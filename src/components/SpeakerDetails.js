import React from "react";

export const SpeakerDetails = ({ product }) => {
	return (
		<div className="about">
			<b>Konekcija: </b>
			{product[0].conectivity}, <b>Uparivanje: </b>
			{product[0].pairing}
		</div>
	);
};
