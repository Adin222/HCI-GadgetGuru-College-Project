import React from "react";
import { Link } from "react-router-dom";

export const Footer = ({ userID }) => {
	return (
		<footer
			className="text-center text-lg-start text-white"
			style={{ backgroundColor: "#1c2331" }}
		>
			<section
				className="d-flex justify-content-between p-4"
				style={{ backgroundColor: "#6351ce" }}
			>
				<div className="me-5">
					<span>Pronađite nas na društvenim mrežama:</span>
				</div>

				<div>
					<a href="/" className="text-white me-4">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="/" className="text-white me-4">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="/" className="text-white me-4">
						<i className="fab fa-google"></i>
					</a>
					<a href="/" className="text-white me-4">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="/" className="text-white me-4">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="/" className="text-white me-4">
						<i className="fab fa-github"></i>
					</a>
				</div>
			</section>

			<section>
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold">
								Gadget Guru
							</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#7c4dff",
									height: "2px",
								}}
							/>
							<p>
								Ovdje možete pronaći sve informacije o našoj
								online prodavnici
							</p>
							<p>
								Unaprijedite svoje digitalno iskustvo sa našim
								E-shopom za IT opremu
							</p>
						</div>
						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold">Lokacije</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#7c4dff",
									height: "2px",
								}}
							/>
							<p>
								<a href="#!" className="text-white">
									Vrbovska 21
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Glasinačka 32
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Prnjavorska 105
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Semira Frašte 55
								</a>
							</p>
						</div>

						<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold">
								Korisni linkovi
							</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#7c4dff",
									height: "2px",
								}}
							/>
							<p>
								<Link
									to={`user/${userID}`}
									className="text-white"
									style={{ fontSize: 18 }}
								>
									Tvoj Profil
								</Link>
							</p>
							<p>
								<Link
									to="/contact"
									className="text-white"
									style={{ fontSize: 18 }}
								>
									Pošaljite nam poruku
								</Link>
							</p>
							<p>
								<Link
									to="faq"
									className="text-white"
									style={{ fontSize: 18 }}
								>
									Često postavljena pitanja (FAQ)
								</Link>
							</p>
						</div>

						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold">Kontakt</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#7c4dff",
									height: "2px",
								}}
							/>
							<p>
								<i className="fas fa-home mr-3"></i> Sarajevo,
								71000
							</p>
							<p>
								<i className="fas fa-envelope mr-3"></i>{" "}
								GadgetGuru@gmail.com
							</p>
							<p>
								<i className="fas fa-phone mr-3"></i> + 387 62
								234 567
							</p>
							<p>
								<i className="fas fa-print mr-3"></i> + 387 61
								204 520
							</p>
						</div>
					</div>
				</div>
			</section>

			<div
				className="text-center p-3"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
			>
				© 2023 Copyright:{" "}
				<a className="text-white" href="https://mdbootstrap.com/">
					Gadget Guru
				</a>
			</div>
		</footer>
	);
};
