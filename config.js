// https://firebase.google.com/docs/web/setup#available-libraries

const firebase = require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyD1R9ib5hFrp0aDOcFjFcjzj3y4cLPX_aw",
  authDomain: "first-project-8acdb.firebaseapp.com",
  projectId: "first-project-8acdb",
  storageBucket: "first-project-8acdb.appspot.com",
  messagingSenderId: "207147251035",
  appId: "1:207147251035:web:d9e34be10f00676ffb567e",
  measurementId: "G-MYQCDQR3LJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

const user = db.collection('Users')

module.exports = user
