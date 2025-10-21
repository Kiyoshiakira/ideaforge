// Profile Page JavaScript
(function () {
  'use strict';

  // Wait for Firebase to be loaded
  if (typeof firebase === 'undefined') {
    console.error('Firebase SDK not loaded');
    return;
  }

  const auth = firebase.auth();

  // Load profile customization from localStorage
  function loadCustomization() {
    const bgColor = localStorage.getItem('profile-bg-color') || '#f5f7fa';
    const theme = localStorage.getItem('profile-theme') || 'default';

    // Apply background color
    document.body.style.backgroundColor = bgColor;
    document.getElementById('bg-color-picker').value = bgColor;

    // Apply theme
    applyTheme(theme);
  }

  // Apply theme
  function applyTheme(themeName) {
    const themes = {
      default: '#f5f7fa',
      purple: '#e8d6ff',
      blue: '#d6e8ff',
      green: '#d6ffed',
      sunset: '#ffd6e8',
    };

    const bgColor = themes[themeName] || themes.default;
    document.body.style.backgroundColor = bgColor;
    localStorage.setItem('profile-theme', themeName);
    localStorage.setItem('profile-bg-color', bgColor);

    // Update selected state
    document.querySelectorAll('.theme-option').forEach((option) => {
      option.classList.remove('selected');
      if (option.dataset.theme === themeName) {
        option.classList.add('selected');
      }
    });
  }

  // Reset customization
  window.resetCustomization = function () {
    localStorage.removeItem('profile-bg-color');
    localStorage.removeItem('profile-theme');
    localStorage.removeItem('profile-bio');
    localStorage.removeItem('profile-skills');
    loadCustomization();
    loadProfileData(auth.currentUser);
  };

  // Edit profile
  window.editProfile = function () {
    const currentBio = localStorage.getItem('profile-bio') || '';
    const currentSkills = localStorage.getItem('profile-skills') || '';

    const newBio = prompt('Enter your bio:', currentBio);
    if (newBio !== null) {
      localStorage.setItem('profile-bio', newBio);
    }

    const newSkills = prompt('Enter your skills (comma-separated):', currentSkills);
    if (newSkills !== null) {
      localStorage.setItem('profile-skills', newSkills);
    }

    // Reload profile data
    loadProfileData(auth.currentUser);
  };

  // Load profile data
  function loadProfileData(user) {
    if (!user) return;

    // Display basic user info
    document.getElementById('profile-name').textContent = user.displayName || 'User';
    document.getElementById('profile-email').textContent = user.email;
    document.getElementById('profile-joined').textContent = new Date(
      user.metadata.creationTime
    ).toLocaleDateString();
    document.getElementById('profile-last-active').textContent = new Date(
      user.metadata.lastSignInTime
    ).toLocaleDateString();

    // Display avatar
    const avatarContainer = document.getElementById('profile-avatar-container');
    if (user.photoURL) {
      avatarContainer.innerHTML = `<img src="${user.photoURL}" alt="Profile Avatar" class="profile-avatar">`;
    } else {
      const initial = (user.displayName || user.email || 'U')[0].toUpperCase();
      avatarContainer.innerHTML = `<div class="profile-avatar default">${initial}</div>`;
    }

    // Display bio
    const bio = localStorage.getItem('profile-bio');
    const bioDisplay = document.getElementById('bio-display');
    if (bio && bio.trim()) {
      bioDisplay.innerHTML = bio;
    } else {
      bioDisplay.innerHTML = '<em>No bio yet. Click edit to add one!</em>';
    }

    // Display skills
    const skills = localStorage.getItem('profile-skills');
    const skillsDisplay = document.getElementById('skills-display');
    if (skills && skills.trim()) {
      const skillsArray = skills.split(',').map((s) => s.trim());
      skillsDisplay.innerHTML = skillsArray
        .map((skill) => `<span class="skill-tag">${skill}</span>`)
        .join('');
    } else {
      skillsDisplay.innerHTML = '';
    }

    // Load mock projects (in a real app, this would come from a database)
    loadMockProjects();
    loadMockAuditions();
    loadMockAdaptations();
  }

  // Load mock projects
  function loadMockProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    // For demonstration, we'll show example projects
    const mockProjects = [
      {
        title: 'Dragon Quest RPG',
        type: 'Game Development',
        description: 'A fantasy RPG with turn-based combat and rich storyline.',
        date: 'Started Oct 2025',
      },
      {
        title: 'Animated Short Film',
        type: 'Animation',
        description: 'A 5-minute animated story about friendship and adventure.',
        date: 'In Progress',
      },
    ];

    if (mockProjects.length > 0) {
      projectsGrid.innerHTML = mockProjects
        .map(
          (project) => `
                <div class="content-card">
                    <div class="content-card-title">${project.title}</div>
                    <div class="content-card-type">${project.type}</div>
                    <div class="content-card-desc">${project.description}</div>
                    <div class="content-card-meta">${project.date}</div>
                </div>
            `
        )
        .join('');
    }
  }

  // Load mock auditions
  function loadMockAuditions() {
    const auditionsGrid = document.getElementById('auditions-grid');
    const mockAuditions = [
      {
        title: 'Queen Seraphina Voice',
        type: 'Voice Acting',
        description: "Auditioned for the lead role in Dragon's Tale animation.",
        date: 'Submitted Oct 15, 2025',
      },
    ];

    if (mockAuditions.length > 0) {
      auditionsGrid.innerHTML = mockAuditions
        .map(
          (audition) => `
                <div class="content-card">
                    <div class="content-card-title">${audition.title}</div>
                    <div class="content-card-type">${audition.type}</div>
                    <div class="content-card-desc">${audition.description}</div>
                    <div class="content-card-meta">${audition.date}</div>
                </div>
            `
        )
        .join('');
    }
  }

  // Load mock adaptations
  function loadMockAdaptations() {
    const adaptationsGrid = document.getElementById('adaptations-grid');
    const mockAdaptations = [
      {
        title: 'Seraphina Watercolor',
        type: 'Art',
        description: 'Watercolor illustration of Queen Seraphina in her throne room.',
        date: 'Created Oct 10, 2025',
      },
      {
        title: 'Dragon Flight Animation',
        type: 'Animation',
        description: 'Short animated sequence showing Seraphina taking flight.',
        date: 'Created Oct 12, 2025',
      },
    ];

    if (mockAdaptations.length > 0) {
      adaptationsGrid.innerHTML = mockAdaptations
        .map(
          (adaptation) => `
                <div class="content-card">
                    <div class="content-card-title">${adaptation.title}</div>
                    <div class="content-card-type">${adaptation.type}</div>
                    <div class="content-card-desc">${adaptation.description}</div>
                    <div class="content-card-meta">${adaptation.date}</div>
                </div>
            `
        )
        .join('');
    }
  }

  // Check authentication state
  auth.onAuthStateChanged((user) => {
    if (user) {
      document.getElementById('not-logged-in').style.display = 'none';
      document.getElementById('profile-content').style.display = 'block';

      loadCustomization();
      loadProfileData(user);
    } else {
      document.getElementById('profile-content').style.display = 'none';
      document.getElementById('not-logged-in').style.display = 'block';
    }
  });

  // Event listeners for customization
  document.addEventListener('DOMContentLoaded', () => {
    // Background color picker
    const bgColorPicker = document.getElementById('bg-color-picker');
    if (bgColorPicker) {
      bgColorPicker.addEventListener('change', (e) => {
        const color = e.target.value;
        document.body.style.backgroundColor = color;
        localStorage.setItem('profile-bg-color', color);
        // Clear theme selection
        localStorage.removeItem('profile-theme');
        document.querySelectorAll('.theme-option').forEach((option) => {
          option.classList.remove('selected');
        });
      });
    }

    // Theme selector
    document.querySelectorAll('.theme-option').forEach((option) => {
      option.addEventListener('click', () => {
        const theme = option.dataset.theme;
        applyTheme(theme);
        // Update color picker
        const bgColor = localStorage.getItem('profile-bg-color') || '#f5f7fa';
        document.getElementById('bg-color-picker').value = bgColor;
      });
    });
  });
})();
