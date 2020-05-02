import Firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "", // TODO: replace blank api key
  authDomain: "creative-cards-vue-app.firebaseapp.com",
  databaseURL: "https://creative-cards-vue-app.firebaseio.com",
  projectId: "creative-cards-vue-app",
  storageBucket: "creative-cards-vue-app.appspot.com",
  messagingSenderId: "900502852988",
  appId: "1:900502852988:web:65e513b177ce61245680f9"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
