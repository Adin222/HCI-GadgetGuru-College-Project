import React from "react";

export const LaptopPcDetails = ({ product }) => {
	return (
		<div className="about">
			<b>Processor: </b>
			{product[0].processor}, <b>RAM: </b>
			{product[0].ram} GB, <b>GPU: </b>
			{product[0].gpu}, <b>Operativni sistem: </b>
			{product[0].os}, <b>Memorija: </b>
			{product[0].storage} GB,{" "}
			{product[0].has_ss && (
				<>
					<b>Veličina ekrana: </b>
					{product[0].screen_size}"
				</>
			)}
		</div>
	);
};
