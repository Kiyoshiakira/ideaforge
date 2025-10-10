// Firebase Configuration
// Replace these values with your actual Firebase project configuration
// Find these values in: Firebase Console > Project Settings > General > Your apps > SDK setup and configuration

const firebaseConfig = {
      apiKey: "AIzaSyD4dVzjsGLI1znvU2-1zhZfLKFZLf8PXWU",
      authDomain: "ideaforge-e92ff.firebaseapp.com",
      projectId: "ideaforge-e92ff",
      storageBucket: "ideaforge-e92ff.firebasestorage.app",
      messagingSenderId: "700329776913",
      appId: "1:700329776913:web:d912716f7df8ef698c9eb0",
      measurementId: "G-2YX4CRP00G"
};

// Initialize Firebase
// This will be used by other modules
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
}
