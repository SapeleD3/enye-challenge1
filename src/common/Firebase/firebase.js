import firebase from 'firebase'
import 'firebase/database'
import 'firebase/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyDuYEj3DN2l-LF6KXA8vF4zhhUzwZKZk9A",
  authDomain: "enye-fireside.firebaseapp.com",
  databaseURL: "https://enye-fireside.firebaseio.com",
  projectId: "enye-fireside",
  storageBucket: "enye-fireside.appspot.com",
  messagingSenderId: "1041335920799",
  appId: "1:1041335920799:web:d527ed6e925a0f88a25aaa",
  measurementId: "G-ELQFT0ZWEP"
};

firebase.initializeApp(firebaseConfig)
export const database = firebase.database()
export const db = firebase.firestore()
