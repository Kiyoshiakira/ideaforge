// Firebase Configuration
// Replace these values with your actual Firebase project configuration
// Find these values in: Firebase Console > Project Settings > General > Your apps > SDK setup and configuration

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
// This will be used by other modules
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
}
