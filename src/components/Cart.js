import React from "react";
import { CartProduct } from "./CartProduct";
import { useNavigate } from "react-router-dom";

export const Cart = ({ isLogged }) => {
	const navigate = useNavigate();
	return (
		<div>
			<h3
				onClick={() => navigate(-1)}
				style={{ marginTop: "10px", color: "white" }}
			>
				Nazad
			</h3>
			<hr />
			{isLogged ? (
				<div>
					<CartProduct />
				</div>
			) : (
				<div className="user-cart-message">
					<h1>Samo prijavljeni korisnici mogu pristupiti korpi</h1>
				</div>
			)}
		</div>
	);
};
