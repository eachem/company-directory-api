// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TO DO Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUJPRnfu-BTVhQnkWjLZZkgK2oyub0xyo",
  authDomain: "company-directory-16c01.firebaseapp.com",
  projectId: "company-directory-16c01",
  storageBucket: "company-directory-16c01.appspot.com",
  messagingSenderId: "801355389353",
  appId: "1:801355389353:web:16b7f7d6fe367dc5738cb8",
  measurementId: "G-CYNJZMRHRR"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);