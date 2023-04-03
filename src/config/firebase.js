
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD7KO1CT9OPMBAyNkC7tgoeN38BF3UHqIU",
    authDomain: "tik-tok---jornadadev-96871.firebaseapp.com",
    projectId: "tik-tok---jornadadev-96871",
    storageBucket: "tik-tok---jornadadev-96871.appspot.com",
    messagingSenderId: "123804877077",
    appId: "1:123804877077:web:40e1a1f53363db34b9a91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;