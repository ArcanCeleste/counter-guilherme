import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDW_52vXWUwUlOgwklhUeHNF_QMuXWacZc",
    authDomain: "counter-guilherme.firebaseapp.com",
    projectId: "counter-guilherme",
    storageBucket: "counter-guilherme.appspot.com",
    messagingSenderId: "516501028681",
    appId: "1:516501028681:web:6fd23be22dc02593e2a498"
};

export const fbConfig = initializeApp(firebaseConfig);