// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
    apiKey: "AIzaSyD5jSnnYWNuS_Ed7mvqwudLAjyVT8NJQ34",
    authDomain: "todo-app-c61b9.firebaseapp.com",
    databaseURL: "https://todo-app-c61b9.firebaseio.com",
    projectId: "todo-app-c61b9",
    storageBucket: "todo-app-c61b9.appspot.com",
    messagingSenderId: "310976024880",
    appId: "1:310976024880:web:6522d2e4b54a2604b7f8f5",
    measurementId: "G-SR414QHXGQ"
  }; */

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD5jSnnYWNuS_Ed7mvqwudLAjyVT8NJQ34",
    authDomain: "todo-app-c61b9.firebaseapp.com",
    databaseURL: "https://todo-app-c61b9.firebaseio.com",
    projectId: "todo-app-c61b9",
    storageBucket: "todo-app-c61b9.appspot.com",
    messagingSenderId: "310976024880",
    appId: "1:310976024880:web:6522d2e4b54a2604b7f8f5",
    measurementId: "G-SR414QHXGQ"


    });

    const db = firebaseApp.firestore();
    export default db;

  