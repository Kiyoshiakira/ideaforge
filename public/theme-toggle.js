/**
 * IdeaForge Theme Toggle
 * Handles dark/light mode switching with localStorage persistence
 * Version: 1.0
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'ideaforge-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  /**
   * Get the current theme from localStorage or system preference
   */
  function getInitialTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }

    return THEME_LIGHT;
  }

  /**
   * Apply theme to document
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    
    // Update toggle button if it exists
    updateToggleButton(theme);
    
    // Dispatch custom event for other scripts to listen to
    document.dispatchEvent(new CustomEvent('themeChanged', { 
      detail: { theme } 
    }));
  }

  /**
   * Toggle between dark and light themes
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(newTheme);
  }

  /**
   * Update toggle button icon and text
   */
  function updateToggleButton(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('.theme-icon');
    const text = toggleBtn.querySelector('.theme-text');

    if (theme === THEME_DARK) {
      if (icon) icon.textContent = '☀️';
      if (text) text.textContent = 'Light Mode';
      toggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      if (icon) icon.textContent = '🌙';
      if (text) text.textContent = 'Dark Mode';
      toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  /**
   * Create and inject theme toggle button
   */
  function createToggleButton() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
    
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.className = 'theme-toggle-btn';
    button.setAttribute('aria-label', currentTheme === THEME_DARK ? 'Switch to light mode' : 'Switch to dark mode');
    
    const icon = document.createElement('span');
    icon.className = 'theme-icon';
    icon.textContent = currentTheme === THEME_DARK ? '☀️' : '🌙';
    
    const text = document.createElement('span');
    text.className = 'theme-text';
    text.textContent = currentTheme === THEME_DARK ? 'Light Mode' : 'Dark Mode';
    
    button.appendChild(icon);
    button.appendChild(text);
    button.addEventListener('click', toggleTheme);
    
    return button;
  }

  /**
   * Inject toggle button into header
   */
  function injectToggleButton() {
    // Wait for header to be available
    const header = document.querySelector('header nav');
    if (header) {
      const toggleBtn = createToggleButton();
      
      // Add to end of nav or create a separate container
      const navContainer = document.createElement('div');
      navContainer.className = 'theme-toggle-container';
      navContainer.appendChild(toggleBtn);
      
      header.appendChild(navContainer);
    }
  }

  /**
   * Listen to system theme changes
   */
  function watchSystemTheme() {
    if (!window.matchMedia) return;

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    darkModeQuery.addEventListener('change', (e) => {
      // Only apply if user hasn't set a preference
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      if (!savedTheme) {
        applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
      }
    });
  }

  /**
   * Initialize theme system
   */
  function init() {
    // Apply initial theme immediately (before DOM load)
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);

    // Setup after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        injectToggleButton();
        watchSystemTheme();
      });
    } else {
      injectToggleButton();
      watchSystemTheme();
    }
  }

  // Make toggle function globally available
  window.toggleTheme = toggleTheme;
  
  // Initialize
  init();

  // Add keyboard shortcut (Ctrl/Cmd + Shift + D)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'd') {
      e.preventDefault();
      toggleTheme();
    }
  });

})();
