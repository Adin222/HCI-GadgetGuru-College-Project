import React from "react";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const FilteredProducts = ({ filterData }) => {
	const navigate = useNavigate();

	return (
		<div>
			<h3
				style={{ marginTop: "7px", color: "white" }}
				onClick={() => navigate(-1)}
			>
				Nazad
			</h3>
			<hr />
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}
			>
				{filterData.length === 0 ? (
					<h3 style={{ color: "white" }}>
						Nema proizvoda prema tom filteru
					</h3>
				) : (
					filterData.map((product) => (
						<Card key={product.id} product={product} />
					))
				)}
			</div>
		</div>
	);
};
