import firebase from 'firebase/app'
import 'firebase/firebase-database'

//console.log(process.env)

const firebaseConfig = {
    apiKey: "AIzaSyDvQBZmFGdnOfY2FUJgdnKWGno3AZFQczk",
    authDomain: "prova-mobile-48be0.firebaseapp.com",
    databaseURL: "https://prova-mobile-48be0-default-rtdb.firebaseio.com/",    
    projectId: "prova-mobile-48be0",
    storageBucket: "prova-mobile-48be0.appspot.com",
    messagingSenderId: "959699634143",
    appId: "1:959699634143:web:7db51501c9433e082b666a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref();

const getAll = () => {
    return db;
}

export default {
    getAll,
}
