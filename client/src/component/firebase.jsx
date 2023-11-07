import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSZ29EG0J5tqQr5A02Ytr1Hlq30Qp3FbY",
  authDomain: "otp-project-964ea.firebaseapp.com",
  projectId: "otp-project-964ea",
  storageBucket: "otp-project-964ea.appspot.com",
  messagingSenderId: "454348368365",
  appId: "1:454348368365:web:4613507c73fde240c89fe4",
  measurementId: "G-9B5056QCYN"
};
firebase.initializeApp(firebaseConfig);
export default firebase;