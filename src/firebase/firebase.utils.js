import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDDrlTZ_E04lUJFsk2zIijeTc_8rgyI404",
    authDomain: "ecom-react-template.firebaseapp.com",
    projectId: "ecom-react-template",
    storageBucket: "ecom-react-template.appspot.com",
    messagingSenderId: "282691855968",
    appId: "1:282691855968:web:9df48262a28de1e69bc505",
    measurementId: "G-D569DMQPVH"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;