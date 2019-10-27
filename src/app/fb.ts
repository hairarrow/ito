import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAfiKQagoDAIinuhnDkymw3JuZXqip4Wrk",
	authDomain: "ito-web.firebaseapp.com",
	databaseURL: "https://ito-web.firebaseio.com",
	projectId: "ito-web",
	storageBucket: "ito-web.appspot.com",
	messagingSenderId: "356919373206",
	appId: "1:356919373206:web:fac35066f311edd072c1b7",
	measurementId: "G-LQ042W89TD"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// if (process.env.NODE_ENV === "development") {
// 	db.settings({
// 		host: "localhost:8080",
// 		ssl: false
// 	});
// }

export { db };
export default firebase;
