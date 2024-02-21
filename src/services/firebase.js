import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBi_PaOKgbhdqziJUwzGgQV00L9wvOZusw",
    authDomain: "quizz-app-8c850.firebaseapp.com",
    projectId: "quizz-app-8c850",
    storageBucket: "quizz-app-8c850.appspot.com",
    messagingSenderId: "259596674584",
    appId: "1:259596674584:web:48491d227ff4bb98e3456d",
    measurementId: "G-QBDQK23GKD"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { auth, firestore };