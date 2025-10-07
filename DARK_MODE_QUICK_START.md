# 🚀 Dark Mode Quick Start Guide

## Quick Implementation (5 minutes)

### Step 1: Add CSS Files to Your HTML

Add these lines to your `<head>` section:

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="dark-theme.css">
<link rel="stylesheet" href="theme-toggle.css">
```

### Step 2: Add JavaScript

Add this before closing `</body>`:

```html
<script src="theme-toggle.js"></script>
```

### Step 3: Done! 🎉

The theme toggle will automatically appear in your header navigation. Users can switch themes with:
- Click the toggle button
- Keyboard shortcut: `Ctrl/Cmd + Shift + D`
- System preference is auto-detected

---

## CSS Custom Properties Reference

### Basic Usage

```css
/* Use variables for theme-aware styling */
.my-component {
  background: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}
```

### Available Variables

#### Colors
```css
--color-background      /* App background */
--color-surface          /* Card/panel background */
--color-primary          /* Primary purple */
--color-accent           /* Accent gold */
--color-text-primary     /* Main text */
--color-text-secondary   /* Body text */
--color-border           /* Borders */
--color-link             /* Links */
```

#### Dark Mode Specific
```css
--primary-purple-dark    /* #7c4dff */
--accent-gold            /* #ffd86b */
--surface-1 to surface-5 /* Elevation levels */
--text-primary           /* #e8e8e8 */
--text-secondary         /* #b0b0b0 */
--success, --warning, --error, --info
```

#### Gradients
```css
--gradient-header        /* Header background */
--gradient-card          /* Feature cards */
--gradient-cta           /* CTA buttons */
```

---

## Common Patterns

### 1. Cards

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
}

.card h3 {
  color: var(--color-text-primary);
}

.card p {
  color: var(--color-text-secondary);
}
```

### 2. Buttons

```css
/* Primary CTA */
.btn-primary {
  background: var(--gradient-cta);
  color: var(--text-on-gold);
  border: none;
}

/* Secondary */
.btn-secondary {
  background: var(--surface-3);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}
```

### 3. Forms

```css
input, textarea, select {
  background: var(--surface-2);
  border: 1px solid var(--border-default);
  color: var(--text-primary);
}

input:focus {
  border-color: var(--border-focus);
  outline: 2px solid rgba(124, 77, 255, 0.3);
}

input::placeholder {
  color: var(--text-tertiary);
}
```

### 4. Alerts

```css
.alert-success {
  background: var(--success-bg);
  border-left: 4px solid var(--success);
  color: var(--text-primary);
}

.alert-error {
  background: var(--error-bg);
  border-left: 4px solid var(--error);
  color: var(--text-primary);
}
```

---

## JavaScript API

### Toggle Theme Programmatically

```javascript
// Toggle between light and dark
window.toggleTheme();

// Listen for theme changes
document.addEventListener('themeChanged', (e) => {
  console.log('Theme changed to:', e.detail.theme);
});

// Get current theme
const currentTheme = document.documentElement.getAttribute('data-theme');
```

### Check Theme in Your Code

```javascript
if (document.documentElement.getAttribute('data-theme') === 'dark') {
  // Dark mode specific logic
}
```

---

## Accessibility Checklist

- [x] All text meets WCAG AA (4.5:1 contrast)
- [x] Interactive elements have 3:1 contrast
- [x] Focus indicators are visible
- [x] Color is not the only indicator
- [x] Keyboard accessible (Ctrl+Shift+D)
- [x] Respects `prefers-color-scheme`
- [x] Smooth transitions for comfort

---

## Testing

### Browser DevTools

1. Open DevTools
2. Toggle dark mode in the page
3. Inspect element colors
4. Check computed styles

### Accessibility Testing

```bash
# Install pa11y for automated testing
npm install -g pa11y

# Test your page
pa11y http://localhost:8000/dark-mode-showcase.html
```

### Color Contrast

Use online tools:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)

### Color Blindness

Test with simulators:
- [Coblis Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- Chrome DevTools > Rendering > Emulate vision deficiencies

---

## Customization

### Change Colors

Edit `dark-theme.css`:

```css
:root[data-theme="dark"] {
  --primary-purple-dark: #your-color;
  --accent-gold: #your-color;
  /* ... */
}
```

### Different Toggle Styles

The theme toggle comes in 3 styles:

1. **Default Button** (current)
   ```html
   <!-- Automatically injected -->
   ```

2. **Switch Style**
   ```html
   <label class="theme-toggle-switch">
     <input type="checkbox" onclick="toggleTheme()">
     <span class="theme-toggle-slider"></span>
   </label>
   ```

3. **Floating Action Button**
   ```html
   <button class="theme-toggle-fab" onclick="toggleTheme()">
     <span class="theme-icon">🌙</span>
   </button>
   ```

---

## Troubleshooting

### Theme Not Applying?

1. Check CSS file order:
   ```html
   <link rel="stylesheet" href="styles.css">
   <link rel="stylesheet" href="dark-theme.css"> <!-- Must be after -->
   ```

2. Verify JavaScript is loaded:
   ```html
   <script src="theme-toggle.js"></script>
   ```

3. Clear browser cache

### Colors Look Wrong?

1. Check `data-theme` attribute:
   ```javascript
   console.log(document.documentElement.getAttribute('data-theme'));
   ```

2. Verify CSS variables:
   ```javascript
   const style = getComputedStyle(document.documentElement);
   console.log(style.getPropertyValue('--color-background'));
   ```

### Toggle Button Missing?

1. Ensure header has a `<nav>` element
2. Check browser console for errors
3. Verify theme-toggle.js is loaded

---

## Advanced: Manual Theme Application

If you want full control:

```javascript
// Set theme manually
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ideaforge-theme', theme);
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('ideaforge-theme') || 'light';
  setTheme(saved);
});
```

---

## Resources

### Documentation
- [DARK_MODE_DESIGN.md](../DARK_MODE_DESIGN.md) - Complete design specs
- [dark-theme.css](dark-theme.css) - CSS implementation
- [theme-toggle.js](theme-toggle.js) - JavaScript logic

### Tools
- [Material Design Dark Theme](https://material.io/design/color/dark-theme.html)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### Examples
- [dark-mode-showcase.html](dark-mode-showcase.html) - Live examples

---

## Support

For issues or questions:
1. Check [DARK_MODE_DESIGN.md](../DARK_MODE_DESIGN.md)
2. See examples in [dark-mode-showcase.html](dark-mode-showcase.html)
3. Open an issue on GitHub

---

**Last Updated:** 2025-01-07  
**Version:** 1.0  
**License:** MIT
