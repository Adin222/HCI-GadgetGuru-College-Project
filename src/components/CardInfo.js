import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { CreditProduct } from "./CreditProduct";
import db from "../firebase";

export const CardInfo = ({ userID }) => {
	const [cartData, setCartData] = useState([]);
	const [fullName, setFullName] = useState("");
	const [cardNum, setCardNum] = useState("");
	const [cvv, setCvv] = useState("");
	const [exprDate, setExprDate] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		return onSnapshot(collection(db, `Cart${userID}`), (snapshot) => {
			const laptopData = snapshot.docs.map((doc) => doc.data());
			setCartData(laptopData);
		});
	}, [userID]);
	const submitForm = async () => {
		if (
			fullName === "" ||
			cardNum === "" ||
			cvv === "" ||
			exprDate === ""
		) {
			alert("Sva polja moraju biti puna");
		} else {
			try {
				const messagesCollection = collection(db, `card-${userID}`);
				await addDoc(messagesCollection, {
					fullName: fullName,
					cardNum: cardNum,
					cvv: cvv,
					exprDate: exprDate,
				});
				navigate("/success");
			} catch (error) {
				console.error(
					"Greška prilikom spašavanja podataka kartice: ",
					error
				);
			}
		}
	};
	let sumPrice = 0;
	if (cartData.length > 0) {
		for (const el of cartData) {
			sumPrice += el.price;
		}
	}
	return (
		<>
			<h3
				onClick={() => navigate(-1)}
				style={{ color: "white", cursor: "pointer", marginTop: "7px" }}
			>
				Nazad
			</h3>
			<hr />
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-11">
						<div className="card card0 rounded-0">
							<div className="row">
								<div className="col-md-5 d-md-block d-none p-0 box">
									<div
										className="card rounded-0 border-0 card1"
										id="bill"
									>
										<h3 id="heading1">
											Sumiranje Kupovine
										</h3>
										<div className="cart-prod-container">
											{cartData.map((product) => (
												<div className="row">
													<CreditProduct
														key={product.id}
														product={product}
													/>
												</div>
											))}
										</div>
										<div
											className="row"
											style={{
												display: "flex",
												flexDirection: "column",
												justifyContent: "flex-end",
											}}
										>
											<div className="col-md-15 red-bg">
												<p
													className="bill-date"
													id="total-label"
												>
													Ukupna Cijena
												</p>
												<h2
													className="bill-head"
													id="total"
												>
													{sumPrice} KM
												</h2>
												<small
													className="bill-date"
													id="total-label"
												>
													U cijenu je uračunat porez
												</small>
											</div>
										</div>
									</div>
								</div>

								<div className="col-md-7 col-sm-12 p-0 box">
									<div
										className="card rounded-0 border-0 card2"
										id="paypage"
									>
										<div className="form-card">
											<h2
												id="heading2"
												className="text-danger"
											>
												Vaša metoda plaćanja
											</h2>
											<div className="radio-group">
												<div
													className="radio"
													data-value="credit"
												>
													<img
														src="https://i.imgur.com/28akQFX.jpg"
														width="200px"
														height="60px"
														alt="slikasas"
													/>
												</div>

												<br />
											</div>
											<label className="pay">
												Ime i Prezime Na Kartici
											</label>
											<input
												onChange={(e) =>
													setFullName(e.target.value)
												}
												type="text"
												name="holdername"
												placeholder="Ime i Prezime"
											/>
											<div className="row">
												<div className="col-8 col-md-6">
													<label className="pay">
														Broj Kartice
													</label>
													<input
														onChange={(e) =>
															setCardNum(
																e.target.value
															)
														}
														type="text"
														name="cardno"
														id="cr_no"
														placeholder="0000-0000-0000-0000"
														minlength="19"
														maxlength="19"
													/>
												</div>
												<div className="col-4 col-md-6">
													<label className="pay">
														CVV
													</label>
													<input
														onChange={(e) =>
															setCvv(
																e.target.value
															)
														}
														type="password"
														name="cvcpwd"
														placeholder="&#9679;&#9679;&#9679;"
														className="placeicon"
														minlength="3"
														maxlength="3"
													/>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12">
													<label className="pay">
														Datum Isteka Kartice
													</label>
												</div>
												<div className="col-md-12">
													<input
														onChange={(e) =>
															setExprDate(
																e.target.value
															)
														}
														type="text"
														name="exp"
														id="exp"
														placeholder="MM/YY"
														minlength="5"
														maxlength="5"
													/>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<input
														onClick={() =>
															submitForm()
														}
														type="submit"
														value="MAKE A PAYMENT &nbsp; &#xf178;"
														className="btn btn-info placeicon"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
