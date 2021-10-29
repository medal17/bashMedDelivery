import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC9olpu_vO202aNii8AcNxC-M_EJcPCey4',
  authDomain: 'bashmed-5f819.firebaseapp.com',
  databaseURL: 'https://bashmed-5f819.firebaseio.com',
  projectId: 'bashmed-5f819',
  storageBucket: 'bashmed-5f819.appspot.com',
  messagingSenderId: 'project-593377125357',
  appId: '1:593377125357:android:32dfb2555df4c54de17de4',
  measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
// initializeApp(firebaseConfig);