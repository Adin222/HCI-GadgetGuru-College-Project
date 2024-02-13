import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { doc, setDoc } from "firebase/firestore";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";
import db from "../firebase";

export const Card = (product) => {
	const [counter, setCounter] = useState(0);
	const {
		product: { image_url, name, price, rate, id },
	} = product;
	const { userID, isLogged } = useContext(CartContext);
	const handleAddToCart = async (product) => {
		if (userID !== null) {
			try {
				const cartProduct = {
					...product.product,
					quantity: 1,
				};

				await setDoc(
					doc(db, "Cart" + userID, product.product.id),
					cartProduct
				);
				setCounter(1);
				setTimeout(() => {
					setCounter(0);
				}, 800);
				console.log("Successfully added to Firestore");
			} catch (error) {
				console.error("Error adding to Firestore", error);
			}
		}
	};
	const handleErrorMessage = () => {
		alert("Niste prijavljeni, nemate mogućnost dodavanja u korpu");
	};
	return (
		<div className="product-card" id="pr-card">
			<div className="product-image">
				<img src={image_url} alt="product" className="image-laptop" />
			</div>
			<div className="product-details">
				{name.length > 13 ? (
					<h6>{name.slice(0, 13)}...</h6>
				) : (
					<h6>{name}</h6>
				)}
				<p>Cijena: {price}KM</p>

				<h6>Ocjena: {rate}</h6>
				<hr />
				<div className="button-container">
					<button
						onClick={
							isLogged
								? () => handleAddToCart(product)
								: () => handleErrorMessage()
						}
						className={
							counter === 1 && isLogged
								? "button-added-cart"
								: "button-addCart"
						}
					>
						{counter === 1 ? (
							<p>
								<TiTick />
							</p>
						) : (
							<FaCartPlus className="cart-button-icon" />
						)}
					</button>
					<Link to={`/product/${id}`}>
						<button className="button-check">Pregledaj</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
