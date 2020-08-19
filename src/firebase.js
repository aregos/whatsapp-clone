import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAnvj_K4JbVGlsd9PS7awv596Uks2WTIig",
    authDomain: "whatsapp-clone-81226.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-81226.firebaseio.com",
    projectId: "whatsapp-clone-81226",
    storageBucket: "whatsapp-clone-81226.appspot.com",
    messagingSenderId: "543169447506",
    appId: "1:543169447506:web:1e40e1e698bf4cbe9f818b",
    measurementId: "G-TNZ512PBRN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}

export default db;