import React from "react";

export const HeadphoneDetails = ({ product }) => {
	return (
		<div className="about">
			<b>Konekcija: </b>
			{product[0].conectivity}, <b>Opis: </b>
			{product[0].description}
		</div>
	);
};
