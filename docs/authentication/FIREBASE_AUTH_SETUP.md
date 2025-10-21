# Firebase Authentication Setup Instructions

This document provides step-by-step instructions for setting up Firebase Authentication for IdeaForge, including enabling OAuth providers (Google, Facebook, GitHub).

## Prerequisites

- A Firebase project (already created for IdeaForge)
- Access to the Firebase Console: https://console.firebase.google.com/

## Part 1: Get Firebase Configuration

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project (ideaforge)
3. Click the gear icon next to "Project Overview" and select "Project settings"
4. Scroll down to "Your apps" section
5. If you haven't added a web app yet:
   - Click the "</>" (web) icon
   - Register your app with a nickname (e.g., "IdeaForge Web")
   - Check "Also set up Firebase Hosting" if prompted
6. Copy the Firebase configuration object
7. Open `public/firebase-config.js` and replace the placeholder values with your actual configuration:

```javascript
const firebaseConfig = {
  apiKey: 'YOUR_ACTUAL_API_KEY',
  authDomain: 'your-project-id.firebaseapp.com',
  projectId: 'your-project-id',
  storageBucket: 'your-project-id.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
```

## Part 2: Enable Authentication Methods

### Enable Email/Password Authentication

1. In the Firebase Console, go to "Build" → "Authentication"
2. Click "Get started" if this is your first time
3. Go to the "Sign-in method" tab
4. Click "Email/Password"
5. Toggle "Enable" to ON
6. Click "Save"

### Enable Google Authentication

1. In "Sign-in method" tab, click "Google"
2. Toggle "Enable" to ON
3. Set a project support email (required)
4. Click "Save"

**Note:** Google sign-in works immediately with no additional configuration needed.

### Enable Facebook Authentication

1. **Create a Facebook App:**
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Click "My Apps" → "Create App"
   - Select "Consumer" as the app type
   - Fill in app details:
     - App Name: "IdeaForge"
     - App Contact Email: your email
   - Click "Create App"

2. **Set up Facebook Login:**
   - In your Facebook app dashboard, click "Add Product"
   - Find "Facebook Login" and click "Set Up"
   - Select "Web" as the platform
   - Enter your site URL (e.g., `https://ideaforge.web.app` or `http://localhost:5000` for testing)
   - Complete the setup wizard

3. **Get App Credentials:**
   - Go to "Settings" → "Basic" in your Facebook app
   - Copy the "App ID" and "App Secret"

4. **Configure Firebase:**
   - In Firebase Console, go to "Authentication" → "Sign-in method"
   - Click "Facebook"
   - Toggle "Enable" to ON
   - Paste your Facebook App ID and App Secret
   - Copy the OAuth redirect URI shown (e.g., `https://ideaforge.firebaseapp.com/__/auth/handler`)
   - Click "Save"

5. **Configure Facebook App:**
   - Go back to your Facebook app dashboard
   - Go to "Facebook Login" → "Settings"
   - Add the OAuth redirect URI from Firebase to "Valid OAuth Redirect URIs"
   - Save changes

6. **Make App Public (when ready for production):**
   - In Facebook app dashboard, toggle the app from "Development" to "Live" mode
   - This requires completing app review for certain permissions

### Enable GitHub Authentication

1. **Create a GitHub OAuth App:**
   - Go to [GitHub Settings](https://github.com/settings/developers)
   - Click "OAuth Apps" → "New OAuth App"
   - Fill in application details:
     - Application name: "IdeaForge"
     - Homepage URL: `https://ideaforge.web.app` (or your domain)
     - Application description: "IdeaForge - Where Art Meets Collaboration"
     - Authorization callback URL: (get this from Firebase in the next step)
   - Click "Register application"

2. **Get Firebase OAuth Redirect URI:**
   - In Firebase Console, go to "Authentication" → "Sign-in method"
   - Click "GitHub"
   - Copy the OAuth redirect URI (e.g., `https://ideaforge.firebaseapp.com/__/auth/handler`)

3. **Update GitHub OAuth App:**
   - Go back to your GitHub OAuth App settings
   - Update the "Authorization callback URL" with the Firebase OAuth redirect URI
   - Save changes

4. **Get GitHub Credentials:**
   - In your GitHub OAuth App settings, copy the "Client ID"
   - Click "Generate a new client secret" and copy it

5. **Configure Firebase:**
   - In Firebase Console, "Authentication" → "Sign-in method" → "GitHub"
   - Toggle "Enable" to ON
   - Paste your GitHub Client ID and Client Secret
   - Click "Save"

## Part 3: Configure Authorized Domains

1. In Firebase Console, go to "Authentication" → "Settings" → "Authorized domains"
2. Add your domains:
   - `localhost` (for local testing)
   - Your Firebase Hosting domain (e.g., `ideaforge.web.app`)
   - Your custom domain if you have one

## Part 4: Test Authentication

1. Deploy your site to Firebase Hosting:

   ```bash
   firebase deploy
   ```

2. Visit your deployed site
3. Click "Login / Sign Up" button
4. Test each authentication method:
   - Email/Password signup and login
   - Google sign-in
   - Facebook sign-in
   - GitHub sign-in

## Troubleshooting

### Common Issues

**"auth/unauthorized-domain" Error:**

- Make sure your domain is added to Authorized domains in Firebase Console
- For local testing, ensure `localhost` is in the list

**Facebook Login Issues:**

- Verify OAuth redirect URI matches exactly between Firebase and Facebook
- Ensure Facebook app is in "Live" mode for production use
- Check that Facebook Login product is added to your app

**GitHub Login Issues:**

- Verify callback URL matches exactly between Firebase and GitHub
- Ensure Client ID and Client Secret are correctly copied
- Check that the OAuth App is active

**"auth/popup-blocked" Error:**

- Browser is blocking the popup window
- Allow popups for your site or use redirect-based sign-in instead

### Getting Help

- Check Firebase Authentication documentation: https://firebase.google.com/docs/auth/web/start
- Check Firebase Console error logs
- Test in incognito/private browsing mode to rule out browser extensions
- Verify your Firebase configuration in `firebase-config.js` is correct

## Security Best Practices

1. **Never commit sensitive credentials:**
   - Firebase config in `firebase-config.js` is safe to expose (it's public)
   - Keep Facebook App Secret and GitHub Client Secret private
   - These are stored in Firebase Console, not in your code

2. **Use Firebase Security Rules:**
   - Configure Firestore/Realtime Database rules to require authentication
   - Example rule: `allow read, write: if request.auth != null;`

3. **Enable Email Enumeration Protection:**
   - Go to Authentication → Settings → "User account management"
   - Enable "Email enumeration protection" to prevent user email discovery

4. **Set up Email Templates:**
   - Customize email templates in Authentication → Templates
   - Update sender name, reply-to email, etc.

## Next Steps

After authentication is set up:

- Create profile pages for users
- Add permission checks for project creation
- Implement user-specific features (My Projects, etc.)
- Add role-based access control if needed
- Set up Cloud Firestore for storing user data
