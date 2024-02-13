import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ allNums, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= allNums; i++) {
		pageNumbers.push(i);
	}
	return (
		<nav aria-label="...">
			<ul className="pagination justify-content-center">
				{pageNumbers.map((page) => (
					<li key={page} className="page-item">
						<Link
							style={{ color: "#4553FF" }}
							className="page-link disable"
							onClick={() => paginate(page)}
						>
							{page}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
