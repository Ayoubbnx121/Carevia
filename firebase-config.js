/* CareVia — Firebase Configuration */


window.CAREVIA_FIREBASE_CONFIG = {
  apiKey: "AIzaSyC8DRWheqAJHavi88-zZWZFE8JVMwlFBU4",
  authDomain: "carevia-75100.firebaseapp.com",
  projectId: "carevia-75100",
  storageBucket: "carevia-75100.firebasestorage.app",
  messagingSenderId: "397863232227",
  appId: "1:397863232227:web:3022097207a1d9d1621bd6",
  measurementId: "G-92BXPXQZWX"
};
if (!firebase.apps.length) {
  firebase.initializeApp(window.CAREVIA_FIREBASE_CONFIG);
}
window.cvFirebaseAuth = firebase.auth();
window.cvFirebaseDb = firebase.firestore();
