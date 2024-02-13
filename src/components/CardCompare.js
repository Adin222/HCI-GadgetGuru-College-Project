import React from "react";

export const CardCompare = ({ product, handleClose }) => {
	const { image_url, name, price, rate, processor, screen_size, gpu } =
		product;

	return (
		<div className="compareProduct-card" id="pr-card">
			<button
				className="button-compare-close"
				onClick={() => handleClose()}
			>
				X
			</button>
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
				<p>
					<b>Procesor:</b> {processor}
				</p>
				<p>
					<b>Veličina ekrana: </b>
					{screen_size}"
				</p>
				<p>
					<b>GPU: </b>
					{gpu}
				</p>
				<h6>Ocjena: {rate}</h6>
				<hr />
			</div>
		</div>
	);
};
