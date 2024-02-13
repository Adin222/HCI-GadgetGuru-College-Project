import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export const Sorter = ({ setToggle, data, setData }) => {
	const [priceSort, setPriceSort] = useState(null);
	const handlePriceSort = (sortType) => {
		setPriceSort(sortType);
	};

	const handleSort = () => {
		let sortedArray = [...data];

		sortedArray.sort((a, b) => {
			let comparison = 0;

			if (priceSort === "highest") {
				comparison = b.price - a.price;
			} else if (priceSort === "lowest") {
				comparison = a.price - b.price;
			}

			if (comparison !== 0) {
				return comparison;
			}
			return comparison;
		});

		setData(sortedArray);
	};

	return (
		<div className="blur-background">
			<div className="filter-container">
				<button
					onClick={() => setToggle(false)}
					className="close-filter-btn"
				>
					<IoMdClose style={{ marginBottom: "2px" }} />
				</button>

				<div className="sort-price">
					<p style={{ marginLeft: "10px", marginTop: "30px" }}>
						Sortiraj cijenu prema:{" "}
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
						}}
					>
						<button
							className={`btn-sort ${
								priceSort === "highest" ? "selected" : ""
							}`}
							onClick={() => handlePriceSort("highest")}
						>
							Najveća - Najniža
						</button>
						<button
							className={`btn-sort ${
								priceSort === "lowest" ? "selected" : ""
							}`}
							onClick={() => handlePriceSort("lowest")}
						>
							Najniža - Najveća
						</button>
					</div>
					<hr />
					<div className="div-button">
						<button
							onClick={() => handleSort()}
							className="confirm-filter"
						>
							Sortiraj
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
