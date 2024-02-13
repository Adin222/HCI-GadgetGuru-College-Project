import React from "react";
import { Link } from "react-router-dom";

export const SuccesMessage = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "80vh",
			}}
		>
			<div
				style={{
					backgroundColor: "white",
					borderRadius: "8px",
					opacity: "0.65",
					textAlign: "center",
					padding: "20px",
				}}
			>
				<img
					style={{ width: "200px" }}
					src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/34-512.png"
					alt="succes"
				/>
				<h3>Uspješno ste obavili kupovinu</h3>
				<Link to="/">
					<button
						style={{
							backgroundColor: "#2543af",
							borderRadius: "8px",
							color: "white",
							border: "none",
						}}
					>
						Početna
					</button>
				</Link>
			</div>
		</div>
	);
};
