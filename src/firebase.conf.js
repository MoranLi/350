import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA_65TBj-GvJRjrsCQeTaL-MZFeFw6XjhI",
  authDomain: "project-407f3.firebaseapp.com",
  databaseURL: "https://project-407f3.firebaseio.com",
  projectId: "project-407f3",
  storageBucket: "project-407f3.appspot.com",
  messagingSenderId: "874447698406"
};

const app = firebase.initializeApp(config);
const db = app.database()

const itemsDB = db.ref('/items')
const authService = app.auth()
const storageDB = app.storage().ref()

export default {db, itemsDB, authService, storageDB}