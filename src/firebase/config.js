import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

//removed keys for safety
const firebaseConfig = {
    apiKey: "test key",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };