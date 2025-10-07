// Authentication Module for IdeaForge
// Handles user authentication using Firebase Auth with Email/Password, Google, Facebook, and GitHub providers

(function() {
    'use strict';

    // Wait for Firebase to be loaded
    if (typeof firebase === 'undefined') {
        console.error('Firebase SDK not loaded. Please include Firebase scripts before auth.js');
        return;
    }

    const auth = firebase.auth();

    // ===========================
    // Authentication State Manager
    // ===========================
    
    // Listen for authentication state changes
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // User is signed in
            console.log('User signed in:', user.uid);
            
            // If user doesn't have a display name (e.g., from email/password signup), prompt for one
            if (!user.displayName) {
                const displayName = await promptForDisplayName();
                if (displayName) {
                    await user.updateProfile({ displayName: displayName });
                }
            }
            
            updateHeaderForAuthenticatedUser(user);
        } else {
            // User is signed out
            console.log('User signed out');
            updateHeaderForUnauthenticatedUser();
        }
    });

    // ===========================
    // Sign In with Email/Password
    // ===========================
    
    window.signInWithEmail = async (email, password) => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log('Sign in successful:', userCredential.user.uid);
            closeAuthModal();
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Sign in error:', error);
            return { success: false, error: error.message };
        }
    };

    // ===========================
    // Sign Up with Email/Password
    // ===========================
    
    window.signUpWithEmail = async (email, password, displayName) => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            
            // Update user profile with display name
            if (displayName) {
                await userCredential.user.updateProfile({ displayName: displayName });
            }
            
            console.log('Sign up successful:', userCredential.user.uid);
            closeAuthModal();
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Sign up error:', error);
            return { success: false, error: error.message };
        }
    };

    // ===========================
    // Social Sign-In Providers
    // ===========================
    
    window.signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return await signInWithProvider(provider, 'Google');
    };

    window.signInWithFacebook = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return await signInWithProvider(provider, 'Facebook');
    };

    window.signInWithGitHub = async () => {
        const provider = new firebase.auth.GithubAuthProvider();
        return await signInWithProvider(provider, 'GitHub');
    };

    async function signInWithProvider(provider, providerName) {
        try {
            const result = await auth.signInWithPopup(provider);
            console.log(`${providerName} sign in successful:`, result.user.uid);
            
            // If user doesn't have a display name, prompt for one
            if (!result.user.displayName) {
                const displayName = await promptForDisplayName();
                if (displayName) {
                    await result.user.updateProfile({ displayName: displayName });
                }
            }
            
            closeAuthModal();
            return { success: true, user: result.user };
        } catch (error) {
            console.error(`${providerName} sign in error:`, error);
            return { success: false, error: error.message };
        }
    }

    // ===========================
    // Sign Out
    // ===========================
    
    window.signOut = async () => {
        try {
            await auth.signOut();
            console.log('Sign out successful');
            return { success: true };
        } catch (error) {
            console.error('Sign out error:', error);
            return { success: false, error: error.message };
        }
    };

    // ===========================
    // UI Helper Functions
    // ===========================
    
    function updateHeaderForAuthenticatedUser(user) {
        const authContainer = document.getElementById('auth-container');
        if (!authContainer) return;

        const displayName = user.displayName || 'User';
        const photoURL = user.photoURL || '';
        
        authContainer.innerHTML = `
            <div class="user-menu">
                ${photoURL ? `<img src="${photoURL}" alt="${displayName}" class="user-avatar">` : ''}
                <span class="user-name">${displayName}</span>
                <button class="dropdown-toggle" onclick="toggleUserDropdown()">▼</button>
                <div class="user-dropdown" id="user-dropdown">
                    <a href="profile.html">Profile</a>
                    <a href="my-projects.html">My Projects</a>
                    <a href="#" onclick="signOut(); return false;">Sign Out</a>
                </div>
            </div>
        `;
    }

    function updateHeaderForUnauthenticatedUser() {
        const authContainer = document.getElementById('auth-container');
        if (!authContainer) return;

        authContainer.innerHTML = `
            <button class="cta-btn auth-btn" onclick="openAuthModal()">Login / Sign Up</button>
        `;
    }

    window.toggleUserDropdown = function() {
        const dropdown = document.getElementById('user-dropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    };

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const userMenu = document.querySelector('.user-menu');
        const dropdown = document.getElementById('user-dropdown');
        
        if (dropdown && userMenu && !userMenu.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

    // ===========================
    // Modal Functions
    // ===========================
    
    window.openAuthModal = function(defaultTab = 'login') {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            modal.style.display = 'flex';
            if (defaultTab === 'signup') {
                showSignupForm();
            } else {
                showLoginForm();
            }
        }
    };

    window.closeAuthModal = function() {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            modal.style.display = 'none';
            // Clear form fields
            const forms = modal.querySelectorAll('input');
            forms.forEach(input => input.value = '');
        }
    };

    window.showLoginForm = function() {
        document.getElementById('login-form-container').style.display = 'block';
        document.getElementById('signup-form-container').style.display = 'none';
        document.getElementById('login-tab').classList.add('active');
        document.getElementById('signup-tab').classList.remove('active');
    };

    window.showSignupForm = function() {
        document.getElementById('login-form-container').style.display = 'none';
        document.getElementById('signup-form-container').style.display = 'block';
        document.getElementById('login-tab').classList.remove('active');
        document.getElementById('signup-tab').classList.add('active');
    };

    // ===========================
    // Form Handlers
    // ===========================
    
    window.handleLoginSubmit = async function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errorDiv = document.getElementById('login-error');
        
        errorDiv.textContent = '';
        
        const result = await signInWithEmail(email, password);
        if (!result.success) {
            errorDiv.textContent = result.error;
        }
    };

    window.handleSignupSubmit = async function(event) {
        event.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const displayName = document.getElementById('signup-displayname').value;
        const errorDiv = document.getElementById('signup-error');
        
        errorDiv.textContent = '';
        
        // Basic validation
        if (password.length < 6) {
            errorDiv.textContent = 'Password must be at least 6 characters long';
            return;
        }
        
        const result = await signUpWithEmail(email, password, displayName);
        if (!result.success) {
            errorDiv.textContent = result.error;
        }
    };

    // ===========================
    // Display Name Prompt
    // ===========================
    
    async function promptForDisplayName() {
        return new Promise((resolve) => {
            const name = prompt('Please enter your display name:');
            resolve(name || '');
        });
    }

    // ===========================
    // Utility Functions
    // ===========================
    
    // Get current user
    window.getCurrentUser = function() {
        return auth.currentUser;
    };

    // Check if user is authenticated
    window.isAuthenticated = function() {
        return auth.currentUser !== null;
    };

    console.log('Auth module loaded successfully');

})();
