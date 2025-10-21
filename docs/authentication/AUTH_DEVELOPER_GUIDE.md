# Firebase Authentication - Developer Guide

This guide explains how the Firebase Authentication system works in IdeaForge and how to extend it.

## Architecture Overview

The authentication system is built with vanilla JavaScript and Firebase Authentication SDK v9 (compat mode). It consists of several modular components:

### Core Files

1. **firebase-config.js** - Firebase project configuration
2. **auth.js** - Authentication logic and state management
3. **header-inject.js** - Dynamically injects auth UI into all pages
4. **auth.css** - Styling for authentication components

### How It Works

#### 1. Page Load Sequence

When a page loads:

1. Firebase SDK is loaded from CDN
2. `firebase-config.js` initializes Firebase app
3. `header-inject.js` runs and injects:
   - Auth container into the header (Login/Sign Up button or user menu)
   - Auth modal (login/signup form) into the page body
4. `auth.js` sets up authentication state listener
5. UI updates based on authentication state

#### 2. Authentication Flow

**Sign Up with Email/Password:**

1. User clicks "Login / Sign Up" button
2. Modal opens with signup form
3. User enters display name, email, and password
4. `handleSignupSubmit()` → `signUpWithEmail()` → Firebase `createUserWithEmailAndPassword()`
5. User profile updated with display name
6. Modal closes, header updates with user info

**Sign In with Email/Password:**

1. User opens modal and switches to login tab
2. User enters email and password
3. `handleLoginSubmit()` → `signInWithEmail()` → Firebase `signInWithEmailAndPassword()`
4. Modal closes, header updates with user info

**Social Sign-In (Google/Facebook/GitHub):**

1. User clicks social provider button
2. `signInWithGoogle/Facebook/GitHub()` → Firebase `signInWithPopup()`
3. Popup window opens for OAuth flow
4. After authorization, user is signed in
5. If no display name, user is prompted to enter one
6. Modal closes, header updates with user info

**Sign Out:**

1. User clicks "Sign Out" in dropdown menu
2. `signOut()` → Firebase `signOut()`
3. Header updates to show login button

#### 3. Authentication State Management

Firebase Auth's `onAuthStateChanged()` listener automatically detects:

- User signs in → Updates UI to show user menu
- User signs out → Updates UI to show login button
- Page reload → Restores session (Firebase handles persistence)

### UI Components

#### Auth Container (in Header)

Dynamically injected after the navigation menu:

**Logged Out:**

```html
<div id="auth-container">
  <button class="cta-btn auth-btn" onclick="openAuthModal()">Login / Sign Up</button>
</div>
```

**Logged In:**

```html
<div id="auth-container">
  <div class="user-menu">
    <img src="..." class="user-avatar" />
    <span class="user-name">User Name</span>
    <button class="dropdown-toggle">▼</button>
    <div class="user-dropdown">
      <a href="profile.html">Profile</a>
      <a href="my-projects.html">My Projects</a>
      <a href="#" onclick="signOut()">Sign Out</a>
    </div>
  </div>
</div>
```

#### Auth Modal

The modal contains:

- Tabs for Login/Sign Up
- Email/password forms
- Social login buttons (Google, Facebook, GitHub)
- Error message displays

## Extending the System

### Adding a New OAuth Provider

To add a new provider (e.g., Twitter):

1. **Enable in Firebase Console:**
   - Go to Authentication → Sign-in method
   - Add new provider and configure

2. **Add function in auth.js:**

```javascript
window.signInWithTwitter = async () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  return await signInWithProvider(provider, 'Twitter');
};
```

3. **Add button in header-inject.js:**

```html
<button class="social-btn twitter" onclick="signInWithTwitter()">
  <svg><!-- Twitter icon --></svg>
  Continue with Twitter
</button>
```

4. **Add styles in auth.css:**

```css
.social-btn.twitter {
  border-color: #1da1f2;
  color: #1da1f2;
}

.social-btn.twitter:hover {
  background: #f0f9ff;
  border-color: #0c85d0;
}
```

### Adding User Roles/Permissions

To implement role-based access control:

1. **Store roles in Firestore:**

```javascript
// After user signs up
const db = firebase.firestore();
await db.collection('users').doc(user.uid).set({
  email: user.email,
  displayName: user.displayName,
  role: 'user', // or 'admin', 'creator', etc.
  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
});
```

2. **Check permissions in auth.js:**

```javascript
window.hasPermission = async (permission) => {
  const user = firebase.auth().currentUser;
  if (!user) return false;

  const db = firebase.firestore();
  const userDoc = await db.collection('users').doc(user.uid).get();
  const userData = userDoc.data();

  // Define permission mappings
  const permissions = {
    admin: ['create_project', 'delete_project', 'manage_users'],
    creator: ['create_project', 'edit_own_project'],
    user: ['view_projects'],
  };

  return permissions[userData.role]?.includes(permission);
};
```

3. **Protect routes:**

```javascript
// In my-projects.html
firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) {
    window.location.href = 'index.html';
    return;
  }

  const canCreate = await hasPermission('create_project');
  if (!canCreate) {
    alert('You need creator access to create projects');
    document.getElementById('create-btn').disabled = true;
  }
});
```

### Customizing User Profile

To add more user profile fields:

1. **Update signup form in header-inject.js:**

```html
<div class="form-group">
  <label for="signup-bio">Bio (optional)</label>
  <textarea id="signup-bio" placeholder="Tell us about yourself"></textarea>
</div>
```

2. **Update signup handler in auth.js:**

```javascript
window.handleSignupSubmit = async function (event) {
  event.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const displayName = document.getElementById('signup-displayname').value;
  const bio = document.getElementById('signup-bio').value;

  const result = await signUpWithEmail(email, password, displayName);

  if (result.success) {
    // Store additional profile data in Firestore
    const db = firebase.firestore();
    await db.collection('users').doc(result.user.uid).set({
      displayName: displayName,
      bio: bio,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
};
```

### Email Verification

To require email verification:

1. **Send verification email after signup:**

```javascript
window.signUpWithEmail = async (email, password, displayName) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);

    // Update profile
    if (displayName) {
      await userCredential.user.updateProfile({ displayName: displayName });
    }

    // Send verification email
    await userCredential.user.sendEmailVerification();
    alert('Please check your email to verify your account');

    closeAuthModal();
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

2. **Check verification status:**

```javascript
firebase.auth().onAuthStateChanged((user) => {
  if (user && !user.emailVerified) {
    // Show verification notice
    alert('Please verify your email address');
  }
});
```

### Password Reset

To add password reset functionality:

1. **Add function in auth.js:**

```javascript
window.sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

2. **Add UI in header-inject.js:**

```html
<!-- In login form -->
<a href="#" onclick="handleForgotPassword(); return false;" style="font-size: 0.9rem;">
  Forgot password?
</a>
```

3. **Add handler:**

```javascript
window.handleForgotPassword = async function () {
  const email = prompt('Enter your email address:');
  if (email) {
    const result = await sendPasswordResetEmail(email);
    if (result.success) {
      alert('Password reset email sent! Check your inbox.');
    } else {
      alert('Error: ' + result.error);
    }
  }
};
```

## Security Considerations

### Client-Side Security

1. **Never trust client-side data:**
   - User roles/permissions should be verified on the backend
   - Use Firebase Security Rules for Firestore/Storage

2. **Use Firebase Security Rules:**

```javascript
// Example Firestore rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Users can read their own data
      allow read: if request.auth != null && request.auth.uid == userId;
      // Users can update their own data (but not role)
      allow update: if request.auth != null
                    && request.auth.uid == userId
                    && !request.resource.data.diff(resource.data).affectedKeys().hasAny(['role']);
    }

    match /projects/{projectId} {
      // Anyone can read public projects
      allow read: if resource.data.visibility == 'public';
      // Only authenticated users can create projects
      allow create: if request.auth != null;
      // Only owner can update/delete
      allow update, delete: if request.auth != null
                             && resource.data.owner == request.auth.uid;
    }
  }
}
```

3. **Validate on the backend:**
   - Use Cloud Functions to validate sensitive operations
   - Don't rely on client-side checks alone

### Best Practices

1. **Rate limiting:** Use Firebase App Check to prevent abuse
2. **Secure configuration:** Keep OAuth secrets in Firebase Console, not in code
3. **HTTPS only:** Ensure your site uses HTTPS in production
4. **Session management:** Firebase handles this automatically, but be aware of session expiration

## Testing

### Local Testing

1. Start Firebase emulator:

```bash
firebase emulators:start
```

2. Update `firebase-config.js` to use emulators:

```javascript
if (location.hostname === 'localhost') {
  firebase.auth().useEmulator('http://localhost:9099');
}
```

### Testing Different Scenarios

- **New user signup:** Test email/password and social providers
- **Returning user:** Test login persistence across page reloads
- **Sign out:** Verify UI updates correctly
- **Invalid credentials:** Test error handling
- **Network errors:** Test with offline mode

## Troubleshooting

### Common Issues

**Firebase not defined:**

- Ensure Firebase SDK scripts are loaded before auth scripts
- Check browser console for script loading errors

**OAuth popup blocked:**

- Browser is blocking popups
- Add site to browser's popup exception list
- Or implement redirect-based flow instead

**User not persisting across reloads:**

- Check Firebase persistence settings
- Verify cookies are enabled in browser

**Dropdown not closing:**

- Check event listeners in auth.js
- Verify dropdown toggle functionality

## Future Enhancements

Potential additions to the auth system:

- [ ] Profile editing page
- [ ] Avatar upload with Firebase Storage
- [ ] Multi-factor authentication
- [ ] Account linking (link multiple providers to one account)
- [ ] Custom claims for advanced permissions
- [ ] Analytics integration
- [ ] Admin dashboard for user management

## Resources

- [Firebase Auth Documentation](https://firebase.google.com/docs/auth/web/start)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [Firebase Auth Best Practices](https://firebase.google.com/docs/auth/web/best-practices)
