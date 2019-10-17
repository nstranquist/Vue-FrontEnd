import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true }

// firebase config
const config = {
  apiKey: "AIzaSyAlctduxH2jJOZNEdoyoUoN96GiX_j3BCs",
  authDomain: "edurain.firebaseapp.com",
  databaseURL: "https://edurain.firebaseio.com",
  projectId: "edurain",
  storageBucket: "edurain.appspot.com",
  messagingSenderId: "121691707714",
  appId: "1:121691707714:web:c1ff88636e8b24476410db",
  measurementId: "G-CH3JB3FFW8"
};
firebase.initializeApp(config)

firebase.firestore().settings(settings)

export default firebase