import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGB1nFsZnc0dzEg3bNeGkJcFj1t7p8vnM",
    authDomain: "diario-glicemico.firebaseapp.com",
    projectId: "diario-glicemico",
    storageBucket: "diario-glicemico.appspot.com",
    messagingSenderId: "509962472638",
    appId: "1:509962472638:web:f7404808715858700be2ef",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
