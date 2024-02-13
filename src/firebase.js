// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	messagingSenderId: "1111111111111",
	appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	measurementId: "XXXXXXXXXXXXXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default getFirestore();
