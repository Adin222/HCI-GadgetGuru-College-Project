import React from "react";

export const MonitorDetail = ({ product }) => {
	return (
		<div className="about">
			<b>Rezolucija u pikselima: </b>
			{product[0].display_res}, <b>Portovi: </b>
			{product[0].ports}, <b>Brzina osvježavanja: </b>
			{product[0].refresh_rate}, <b>Rezolucija: </b>
			{product[0].resolution}, <b>Vrijeme odziva: </b>
			{product[0].response_time}, <b>Veličina ekrana: </b>
			{product[0].screen_size}
		</div>
	);
};
