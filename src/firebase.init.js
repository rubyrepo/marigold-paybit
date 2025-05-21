// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8rP_GAnI01JOk_OVnscLwPcD7_7hyIMo",
  authDomain: "marigold-1fe9d.firebaseapp.com",
  projectId: "marigold-1fe9d",
  storageBucket: "marigold-1fe9d.firebasestorage.app",
  messagingSenderId: "642009565056",
  appId: "1:642009565056:web:2ae5d4c47daf78a9d62365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app