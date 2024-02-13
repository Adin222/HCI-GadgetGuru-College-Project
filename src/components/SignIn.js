import { React } from "react";

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
import "../style/StyleSheet.css";

export const SignIn = ({
	isSignup,
	setSignUp,
	handleSubmit2,
	setEmail,
	setPassword,
}) => {
	return (
		<MDBContainer fluid className={isSignup ? "p-4" : "hollow"}>
			<MDBRow>
				<MDBCol
					md="6"
					className="text-center text-md-start d-flex flex-column justify-content-center"
				>
					<h1
						style={{ color: "white" }}
						className="my-5 display-3 fw-bold ls-tight px-3"
					>
						Imate profil <br />
						<span className="text-primary">Prijavi Se</span>
					</h1>

					<p className="px-3" style={{ color: "white" }}>
						Dobrodošli! Ako već imate profil, molimo vas da se
						prijavite kako biste pristupili svojim osobnim podacima
						i funkcionalnostima. Ukoliko još nemate profil, klikom
						na Registruj Se možete napraviti svoj profil.
					</p>
				</MDBCol>

				<MDBCol md="6">
					<MDBCard className="my-5">
						<MDBCardBody className="p-5">
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
								onClick={(e) => handleSubmit2(e)}
								className="w-100 mb-4"
								size="md"
							>
								Log In
							</MDBBtn>

							<div className="text-center">
								<p>Nemate profil, prijavite se:</p>
								<button
									onClick={() => setSignUp(!isSignup)}
									className="Logger-button"
								>
									Registruj Se
								</button>
							</div>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
