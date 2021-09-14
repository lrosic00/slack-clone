import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBH5fIFwzO0AuBeb3s-RAqHPNI9Y03yAM0",
	authDomain: "slack-clone-f06fa.firebaseapp.com",
	projectId: "slack-clone-f06fa",
	storageBucket: "slack-clone-f06fa.appspot.com",
	messagingSenderId: "420598955775",
	appId: "1:420598955775:web:622a3fccb8904379f5d6ca",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
