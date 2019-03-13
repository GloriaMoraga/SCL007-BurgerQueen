import firebase from 'firebase';
 const config = {
    apiKey: "AIzaSyDpN_qYR31wwyiIHiVzuwafMUQhusXsvGA",
    authDomain: "burger-queen-b4e3b.firebaseapp.com",
    databaseURL: "https://burger-queen-b4e3b.firebaseio.com",
    projectId: "burger-queen-b4e3b",
    storageBucket: "burger-queen-b4e3b.appspot.com",
    messagingSenderId: "949962364415"
  };
 const fire = firebase.initializeApp(config);

export default fire;