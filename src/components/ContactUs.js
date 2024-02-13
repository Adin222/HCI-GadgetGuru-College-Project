import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import db from "../firebase";

export const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const submitForm = async () => {
		if (name === "" || email === "" || subject === "" || message === "") {
			alert("Sva polja moraju biti puna");
		} else {
			try {
				const messagesCollection = collection(db, "messages");
				await addDoc(messagesCollection, {
					name: name,
					email: email,
					subject: subject,
					message: message,
				});
				alert("Poruka uspešno poslana!");
			} catch (error) {
				console.error("Greška prilikom slanja poruke:");
			}
		}
	};
	return (
		<section style={{ color: "white" }} className="mb-4">
			<h2 className="h1-responsive font-weight-bold text-center my-4">
				Kontaktirajte nas
			</h2>
			<p className="text-center w-responsive mx-auto mb-5">
				Imate li pitanja? Slobodno nas kontaktirajte direktno. Naš tim
				će vam se javiti u roku od nekoliko sati kako bi vam pomogao.
			</p>

			<div className="row">
				<div className="col-md-12 mb-md-0 mb-5">
					<form
						id="contact-form"
						name="contact-form"
						action="mail.php"
						method="POST"
					>
						<div className="row">
							<div className="col-md-6">
								<div className="md-form mb-0">
									<input
										type="text"
										id="name"
										name="name"
										className="form-control"
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
									<label
										style={{ display: "flex" }}
										htmlFor="name"
										className=""
									>
										Vaše ime{" "}
										<p style={{ color: "red" }}>*</p>
									</label>
								</div>
							</div>

							<div className="col-md-6">
								<div className="md-form mb-0">
									<input
										type="text"
										id="email"
										name="email"
										className="form-control"
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
									<label
										style={{ display: "flex" }}
										htmlFor="email"
										className=""
									>
										Vaš email{" "}
										<p style={{ color: "red" }}>*</p>
									</label>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="md-form mb-0">
									<input
										type="text"
										id="subject"
										name="subject"
										className="form-control"
										onChange={(e) =>
											setSubject(e.target.value)
										}
									/>
									<label
										style={{ display: "flex" }}
										htmlFor="subject"
										className=""
									>
										Predmet{" "}
										<p style={{ color: "red" }}>*</p>
									</label>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="md-form">
									<textarea
										type="text"
										id="message"
										name="message"
										rows="2"
										className="form-control md-textarea"
										onChange={(e) =>
											setMessage(e.target.value)
										}
									></textarea>
									<label
										style={{ display: "flex" }}
										htmlFor="message"
									>
										Vaša poruka{" "}
										<p style={{ color: "red" }}>*</p>
									</label>
								</div>
							</div>
						</div>
					</form>

					<div className="text-center text-md-left">
						<button
							onClick={() => submitForm()}
							className="btn btn-primary"
						>
							Pošalji
						</button>
					</div>
					<div className="status"></div>
				</div>
			</div>
		</section>
	);
};
