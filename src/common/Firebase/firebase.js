import firebase from 'firebase'
import 'firebase/database'
import 'firebase/firestore'

export const config = {
    apiKey: "AIzaSyDuYEj3DN2l-LF6KXA8vF4zhhUzwZKZk9A",
    authDomain: "enye-fireside.firebaseapp.com",
    databaseURL: "https://enye-fireside.firebaseio.com",
    projectId: "enye-fireside",
    storageBucket: "enye-fireside.appspot.com",
    messagingSenderId: "1041335920799"
  };

firebase.initializeApp(config)
export const database = firebase.database()
export const db = firebase.firestore()