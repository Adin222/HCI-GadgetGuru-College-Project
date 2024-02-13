import React from "react";
import { FaSearch } from "react-icons/fa";
export const Searchbar = ({
	setSearchTerm,
	handleKeyPress,
	handleButtonPress,
}) => {
	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};
	return (
		<>
			<div className="search-container">
				<input
					className="search-bar"
					type="text"
					placeholder="pretraži..."
					onChange={handleInputChange}
					onKeyDown={handleKeyPress}
				/>
				<button
					onClick={(e) => handleButtonPress(e)}
					className="search-button"
				>
					<FaSearch className="search-icon" />
				</button>
			</div>
		</>
	);
};
