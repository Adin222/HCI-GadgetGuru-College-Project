import { useEffect, useState, React } from "react";
import db from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import AOS from "aos";
import "../style/StyleSheet.css";
import "aos/dist/aos.css";
import { auth } from "../firebase.js";
import {
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { SignUp } from "./SignUp.js";
import { SignIn } from "./SignIn.js";
import { Logged } from "./Logged.js";

export const User = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const [isLogged, setLogged] = useState();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignup, setSignUp] = useState(false);
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [username, setUsername] = useState("");
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setEmail(user.email);
				setLogged(true);
				const userRef = doc(db, "users", user.uid);
				getDoc(userRef)
					.then((doc) => {
						if (doc.exists()) {
							const userData = doc.data();
							setName(userData.name);
							setLastname(userData.lastname);
							setUsername(userData.username);
						}
					})
					.catch((error) => {
						console.error("Error getting user document:", error);
					});
			} else {
				setLogged(false);
			}
		});

		return () => unsubscribe();
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name === "" || lastname === "" || username === "") {
			alert("Polja su vam prazna");
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then((cred) => {
					const userRef = doc(db, "users", cred.user.uid);
					return setDoc(userRef, {
						name: name,
						lastname: lastname,
						username: username,
						email: email,
						user_id: cred.user.uid,
					});
				})
				.then(() => {
					setLogged(true);
				})
				.catch(() =>
					alert(
						"Pogrešan format podataka ili već imate profil sa tim podacima"
					)
				);
		}
	};

	const handleClick = () => {
		signOut(auth).then(() => {
			setLogged(false);
		});
	};

	const handleSubmit2 = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {})
			.catch(() =>
				alert("Podaci nisu ispravni ili nemate napravljen profil")
			);
	};
	return (
		<div data-aos="zoom-in" className="form-login">
			{isLogged ? (
				<Logged
					handleClick={handleClick}
					email={email}
					name={name}
					lastname={lastname}
					username={username}
				/>
			) : (
				<div>
					<SignUp
						isSignup={isSignup}
						setSignUp={setSignUp}
						setEmail={setEmail}
						handleSubmit={handleSubmit}
						setPassword={setPassword}
						setName={setName}
						setUsername={setUsername}
						setLastname={setLastname}
					/>
					<SignIn
						isSignup={isSignup}
						setSignUp={setSignUp}
						setEmail={setEmail}
						handleSubmit2={handleSubmit2}
						setPassword={setPassword}
					/>
				</div>
			)}
		</div>
	);
};
