import React from "react";

export const KeyboardDetails = ({ product }) => {
	return (
		<div className="about">
			<b>Konekcija: </b>
			{product[0].conectivity}, <b>Osvjetljenje: </b>
			{product[0].light_support}, <b>Broj tipki: </b>
			{product[0].num_keys}
		</div>
	);
};
