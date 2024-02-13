import React, { useState, useEffect, useContext } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { doc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { CartContext } from "./Context";
import AOS from "aos";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import db from "../firebase";
import EmptyCart from "../pictures/empty_cart.svg";

export const CartProduct = () => {
	const [cart, setCart] = useState("");
	const { userID } = useContext(CartContext);

	useEffect(() => {
		AOS.init();
	}, []);
	useEffect(() => {
		return onSnapshot(collection(db, `Cart${userID}`), (snapshot) => {
			const Data = snapshot.docs.map((doc) => doc.data());
			setCart(Data);
		});
	}, [userID]);
	const handleDeleteProduct = async (productID) => {
		try {
			await deleteDoc(doc(db, `Cart${userID}`, productID));
			console.log("Successfully deleted from Firestore");
		} catch (error) {
			console.error("Error deleting from Firestore", error);
		}
	};
	const handleDeleteAll = async (userID) => {
		try {
			const userCollectionRef = collection(db, `Cart${userID}`);
			const querySnapshot = await getDocs(userCollectionRef);
			querySnapshot.forEach(async (doc) => {
				await deleteDoc(doc.ref);
			});
			console.log("Successfully deleted all products from Firestore");
		} catch (error) {
			console.error("Error deleting products from Firestore", error);
		}
	};
	const handleIncrease = async (product, documentId) => {
		try {
			const docRef = doc(db, `Cart${userID}`, documentId);
			await updateDoc(docRef, {
				quantity: (product.quantity += 1),
			});

			console.log("Vrijednost uspješno povećana");
		} catch (err) {
			console.error(
				"Došlo je do pogreške prilikom povećanja vrijednosti",
				err
			);
		}
	};
	const handleDecrease = async (product, documentId) => {
		try {
			const docRef = doc(db, `Cart${userID}`, documentId);
			const newQuantity = product.quantity - 1;
			if (newQuantity < 1) {
				await deleteDoc(docRef);
			} else {
				await updateDoc(docRef, {
					quantity: newQuantity,
				});
			}

			console.log("Vrijednost uspješno smanjena");
		} catch (err) {
			console.error(
				"Došlo je do pogreške prilikom smanjivanja vrijednosti",
				err
			);
		}
	};
	let sum = 0;
	for (let i = 0; i < cart.length; i++) {
		sum += cart[i].price * cart[i].quantity;
	}

	if (cart.length === 0)
		return (
			<div className="empty-cart">
				<img src={EmptyCart} alt="empty-cart" />
				<h1 style={{ color: "white" }}>Vaša korpa je prazna</h1>
			</div>
		);
	return (
		<>
			{cart &&
				cart.map((prod, index) => {
					return (
						<div
							data-aos="zoom-out"
							key={index}
							className="container mt-5 mb-5"
						>
							<div className="d-flex justify-content-center row">
								<div className="col-md-10">
									<div className="row p-2 bg-white border rounded">
										<div className="col-md-3 mt-1">
											<img
												className="img-fluid img-responsive rounded product-image"
												src={prod.image_url}
												alt="product-pic"
											/>
										</div>
										<div className="col-md-6 mt-1">
											<h5>{prod.name}</h5>
											<div className="d-flex flex-row">
												<div className="ratings mr-2">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<span>{prod.rate}</span>
											</div>
											<div className="mt-1 mb-1 spec-1">
												<span>
													{prod.has_ss && (
														<>
															<b>
																Veličina ekrana:{" "}
															</b>
															{prod.screen_size}"
														</>
													)}
												</span>
												<span className="dot"></span>
											</div>
											<div className="mt-1 mb-1 spec-1">
												<span className="dot"></span>
												<span className="dot">
													{" "}
													<b>Brend:</b> {prod.brand}
												</span>
											</div>

											<p className="text-justify text-truncate para mb-0">
												{prod.processor}
												<br />
											</p>
										</div>
										<div className="align-items-center align-content-center col-md-3 border-left mt-1">
											<div className="d-flex flex-row align-items-center">
												<h4 className="mr-1">
													{prod.price * prod.quantity}
													KM
												</h4>
											</div>
											<h6 className="text-success">
												Besplatna dostava
											</h6>
											<div className="d-flex flex-column mt-4">
												<Link
													className="btn btn-primary btn-sm"
													to={`/product/${prod.id}`}
												>
													<button
														className="small-btn"
														type="button"
													>
														Detalji
													</button>
												</Link>

												<div className="quantity-product">
													<div className="inc-dec-buttons">
														<button
															onClick={() =>
																handleDecrease(
																	prod,
																	prod.id
																)
															}
															className="decrease common-button"
														>
															<FaMinus />
														</button>
														<b>{prod.quantity}</b>
														<button
															onClick={() =>
																handleIncrease(
																	prod,
																	prod.id
																)
															}
															className="increase common-button"
														>
															<FaPlus />
														</button>
													</div>
													<button
														className="delete-button"
														onClick={() =>
															handleDeleteProduct(
																prod.id
															)
														}
													>
														Obriši
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			{cart.length === 0 ? (
				""
			) : (
				<div className="container-total_amount">
					<div className="left-side">
						<Link to="/card-input">
							<button className="buy-button">Kupi</button>
						</Link>

						<button
							onClick={() => handleDeleteAll(userID)}
							className="deleteAll-button"
						>
							Obriši sve
						</button>
					</div>
					<div className="right-side">
						<h1>Ukupan iznos: {sum} KM</h1>
					</div>
				</div>
			)}
		</>
	);
};
