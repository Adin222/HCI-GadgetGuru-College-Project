import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { Card } from "./Card";
import db from "../firebase";

export const SearchedProd = ({ searchTerm }) => {
	const [dataOne, setDataOne] = useState([]);
	const [dataTwo, setDataTwo] = useState([]);
	const [dataThree, setDataThree] = useState([]);
	const [dataFour, setDataFour] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		const unsubscribeOne = onSnapshot(
			collection(db, "all-laptops"),
			(snapshot) => {
				const laptopData = snapshot.docs.map((doc) => doc.data());
				setDataOne(laptopData);
				setLoading(false);
			}
		);

		return () => unsubscribeOne();
	}, []);

	useEffect(() => {
		const unsubscribeTwo = onSnapshot(
			collection(db, "shop-laptops"),
			(snapshot) => {
				const laptopData = snapshot.docs.map((doc) => doc.data());
				setDataTwo(laptopData);
				setLoading(false);
			}
		);

		return () => unsubscribeTwo();
	}, []);
	useEffect(() => {
		const unsubscribeTwo = onSnapshot(
			collection(db, "all-pcs"),
			(snapshot) => {
				const laptopData = snapshot.docs.map((doc) => doc.data());
				setDataThree(laptopData);
				setLoading(false);
			}
		);

		return () => unsubscribeTwo();
	}, []);
	useEffect(() => {
		const unsubscribeTwo = onSnapshot(
			collection(db, "all-others"),
			(snapshot) => {
				const laptopData = snapshot.docs.map((doc) => doc.data());
				setDataFour(laptopData);
				setLoading(false);
			}
		);

		return () => unsubscribeTwo();
	}, []);

	let dataArray = [...dataOne, ...dataTwo, ...dataThree, ...dataFour];
	let searchedString = searchTerm.trim().toLowerCase();

	const filteredProducts = dataArray.filter((product) =>
		product.name.toLowerCase().includes(searchedString)
	);
	return (
		<>
			<h3
				onClick={() => navigate(-1)}
				style={{ color: "white", marginTop: "10px", cursor: "pointer" }}
			>
				Nazad
			</h3>
			<hr />
			<div className="display-quality" id="display-qlt">
				{loading ? (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "10%",
						}}
					>
						<img
							style={{ width: "200px" }}
							src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
							alt="loading"
						/>
					</div>
				) : filteredProducts.length > 0 ? (
					filteredProducts.map((product, index) => (
						<Card key={index} product={product} />
					))
				) : (
					<h1>Taj proizvod ne postoji u našoj radnji trenutno</h1>
				)}
			</div>
		</>
	);
};
