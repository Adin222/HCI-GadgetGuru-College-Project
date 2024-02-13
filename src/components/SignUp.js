import React from "react";
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBCheckbox,
} from "mdb-react-ui-kit";
export const SignUp = ({
	setPassword,
	handleSubmit,
	setEmail,
	isSignup,
	setSignUp,
	setName,
	setUsername,
	setLastname,
}) => {
	return (
		<MDBContainer fluid className={isSignup ? "hollow" : "p-4"}>
			<MDBRow>
				<MDBCol
					md="6"
					className="text-center text-md-start d-flex flex-column justify-content-center"
				>
					<h1
						style={{ color: "white" }}
						className="my-5 display-3 fw-bold ls-tight px-3"
					>
						Nemate Profil? <br />
						<span className="text-primary">Kreirajte Ga</span>
					</h1>

					<p className="px-3" style={{ color: "white" }}>
						Nemate profil? Nema problema! Ovdje možete jednostavno
						stvoriti svoj. Ako već imate profil, jednostavno
						kliknite na "Prijavi se" i uđite u svoj korisnički
						račun. Uživajte u svim prednostima naše platforme!
					</p>
				</MDBCol>

				<MDBCol md="6">
					<MDBCard className="my-5">
						<MDBCardBody className="p-5">
							<div className="name-lastname">
								<MDBInput
									wrapperClass="mb-4"
									label="Ime"
									id="form1"
									type="text"
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
								<MDBInput
									wrapperClass="mb-4"
									label="Prezime"
									id="form1"
									type="text"
									onChange={(e) =>
										setLastname(e.target.value)
									}
								/>
							</div>

							<MDBInput
								wrapperClass="mb-4"
								label="Korisničko ime"
								id="form1"
								type="text"
								onChange={(e) => setUsername(e.target.value)}
							/>
							<MDBInput
								wrapperClass="mb-4"
								label="Email"
								id="form1"
								type="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<MDBInput
								wrapperClass="mb-4"
								label="Lozinka"
								id="form1"
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>

							<div className="d-flex justify-content-center mb-4">
								<MDBCheckbox
									name="flexCheck"
									value=""
									id="flexCheckDefault"
									label="Pretplatite se na naše novosti"
								/>
							</div>

							<MDBBtn
								onClick={(e) => handleSubmit(e)}
								className="w-100 mb-4"
								size="md"
							>
								Registruj Se
							</MDBBtn>

							<div className="text-center">
								<p>Već imate profil ?</p>
								<button
									className="Logger-button"
									onClick={() => setSignUp(!isSignup)}
								>
									Prijavi Se
								</button>
							</div>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
