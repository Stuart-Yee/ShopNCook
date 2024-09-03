// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUcB6QCQ-38iBCtK0hQBfQAcnfuQsmhfA",
    authDomain: "shopncook-63ec5.firebaseapp.com",
    projectId: "shopncook-63ec5",
    storageBucket: "shopncook-63ec5.appspot.com",
    messagingSenderId: "465660013410",
    appId: "1:465660013410:web:9ceae2d199f420b2e61a3b",
    measurementId: "G-3N8CQ6F5L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);