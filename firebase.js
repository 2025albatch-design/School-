// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD7ps2jbU4hxZ9xXyMm8YuaKM0moQn1rFw",
  authDomain: "school-8b88d.firebaseapp.com",
  projectId: "school-8b88d",
  storageBucket: "school-8b88d.firebasestorage.app",
  messagingSenderId: "7368659801",
  appId: "1:7368659801:web:1780adc027f79e2e10b248",
  measurementId: "G-WEGPR2C0Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
