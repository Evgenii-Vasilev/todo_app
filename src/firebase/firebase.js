import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDf4t9HK9Ba9vQQdh-dSGn5QpvsPUYXIZQ",
    authDomain: "todo-app-a672d.firebaseapp.com",
    projectId: "todo-app-a672d",
    storageBucket: "todo-app-a672d.appspot.com",
    messagingSenderId: "492194193250",
    appId: "1:492194193250:web:18991e1521263812b3563b"
})

export const auth = app.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export default app