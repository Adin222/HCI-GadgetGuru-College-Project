import React from "react";

export const Logged = ({ email, handleClick, name, lastname, username }) => {
	return (
		<div className="login-container">
			<div className="login-box">
				<img
					src="https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg"
					alt="Profilna slika"
					className="profile-picture"
				/>
				<h1>Dobro došao: {name}</h1>
				<div className="data-logged">
					<div className="podatak-logged">
						<p>
							<b>Ime:</b> {name}
						</p>
						<p>
							<b>Prezime:</b> {lastname}
						</p>
					</div>
					<div className="mail-logged">
						<p>
							<b>Email:</b> {email}
						</p>
					</div>
					<div>
						<p>
							<b>Korisničko ime:</b> {username}
						</p>
					</div>
				</div>
				<button onClick={handleClick} className="button-logged">
					Odjava
				</button>
			</div>
		</div>
	);
};
