# Firebase Authentication - Quick Start Guide

This guide will help you set up and test the Firebase Authentication system in IdeaForge.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select the `ideaforge` project
3. Click the gear icon ⚙️ → "Project settings"
4. Scroll to "Your apps" and copy the config object
5. Open `public/firebase-config.js` and paste your config:

```javascript
const firebaseConfig = {
  apiKey: 'AIza...', // Your actual values
  authDomain: 'ideaforge.firebaseapp.com',
  projectId: 'ideaforge',
  // ... rest of config
};
```

### Step 2: Enable Email/Password Sign-In

1. In Firebase Console, go to "Authentication"
2. Click "Get started" (if first time)
3. Go to "Sign-in method" tab
4. Click "Email/Password" → Enable → Save

### Step 3: Test It!

1. Deploy to Firebase Hosting or test locally:

   ```bash
   firebase serve
   # or
   firebase deploy
   ```

2. Open your site and click "Login / Sign Up"
3. Try signing up with an email and password
4. After signup, you should see your name in the header!

**That's it!** You now have working authentication. ✨

---

## 🎨 What You Get

### For Visitors (Not Logged In)

- Clean "Login / Sign Up" button in the header
- Beautiful modal with login and signup forms
- Social login options (after setup)

### For Authenticated Users

- User menu in header with avatar (if available)
- Dropdown menu with:
  - Profile
  - My Projects
  - Sign Out
- Persistent sessions (stays logged in across page reloads)

---

## 🔐 Optional: Enable Social Sign-In

### Google Sign-In (2 minutes)

1. In Firebase Console: Authentication → Sign-in method
2. Click "Google" → Enable
3. Set support email → Save
4. **Done!** Google login works immediately.

### Facebook Sign-In (10 minutes)

See `FIREBASE_AUTH_SETUP.md` for detailed Facebook setup instructions.

Quick summary:

1. Create Facebook App at developers.facebook.com
2. Add "Facebook Login" product
3. Copy App ID and Secret to Firebase
4. Add Firebase OAuth redirect URI to Facebook app

### GitHub Sign-In (10 minutes)

See `FIREBASE_AUTH_SETUP.md` for detailed GitHub setup instructions.

Quick summary:

1. Create GitHub OAuth App at github.com/settings/developers
2. Copy Client ID and Secret to Firebase
3. Add Firebase OAuth redirect URI to GitHub app

---

## 🧪 Testing Checklist

- [ ] Click "Login / Sign Up" button
- [ ] Sign up with email/password
- [ ] See user menu appear in header
- [ ] Click user menu dropdown (▼)
- [ ] Visit Profile page
- [ ] Visit My Projects page
- [ ] Sign out
- [ ] Login again with same credentials
- [ ] Test on different pages
- [ ] If enabled: Try Google/Facebook/GitHub login

---

## 🎯 What's Next?

After basic authentication is working, you can:

1. **Customize the UI:** Edit `public/auth.css` to match your branding
2. **Add more providers:** Twitter, Microsoft, Apple, etc.
3. **Build features:** Now that users can log in, add:
   - Project creation
   - User profiles with bios and avatars
   - Collaboration features
   - Comments and feedback
   - And more!

---

## 🐛 Troubleshooting

### "Firebase not defined" error

- Check that Firebase SDK scripts are loaded before `auth.js`
- Look at browser console for errors
- Verify `firebase-config.js` has correct configuration

### "auth/configuration-not-found" error

- You haven't updated `firebase-config.js` with your actual Firebase config
- Get config from Firebase Console → Project Settings

### Modal doesn't open

- Check browser console for JavaScript errors
- Verify `header-inject.js` and `auth.js` are loaded
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Social login doesn't work

- Make sure the provider is enabled in Firebase Console
- Check that you've configured OAuth redirect URIs correctly
- Allow popups in your browser for the site

### User menu doesn't show after login

- Check browser console for errors
- Verify `auth.js` is loaded after `firebase-config.js`
- Try signing out and back in

---

## 📚 More Resources

- **Detailed Setup:** See `FIREBASE_AUTH_SETUP.md` for complete OAuth setup instructions
- **Developer Guide:** See `AUTH_DEVELOPER_GUIDE.md` for extending the system
- **Firebase Docs:** https://firebase.google.com/docs/auth/web/start

---

## 🎉 Success!

Once you see the user menu with your name in the header, you've successfully set up authentication!

Welcome to the authenticated IdeaForge experience. Now the real fun begins! 🚀
