// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB88cAYuvIzNvllMM-iGl27z6IZpH_9ZWI",
    authDomain: "collage-maker-9f1c6.firebaseapp.com",
    projectId: "collage-maker-9f1c6",
    storageBucket: "collage-maker-9f1c6.appspot.com",
    messagingSenderId: "899902947530",
    appId: "1:899902947530:web:0c3bce3a89499a0f2cf433",
    measurementId: "G-1SXW148DB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
