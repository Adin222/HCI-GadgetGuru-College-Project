import React from "react";
import { FaSort } from "react-icons/fa";

export const Sort = ({ setToggle }) => {
	return (
		<button onClick={() => setToggle(true)} className="filter-button">
			<FaSort style={{ marginTop: "8px" }} />
			<p style={{ marginTop: "3px" }}>Sorter</p>
		</button>
	);
};
