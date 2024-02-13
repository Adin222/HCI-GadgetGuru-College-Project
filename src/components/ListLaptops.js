import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import db from "../firebase";
import { Sort } from "./Sort";
import { Sorter } from "./Sorter";

export const ListLaptops = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, "all-laptops"),
			(snapshot) => {
				const allLaptopsData = snapshot.docs.map((doc) => doc.data());
				setData(allLaptopsData);
			}
		);

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, "shop-laptops"),
			(snapshot) => {
				const shopLaptopsData = snapshot.docs.map((doc) => doc.data());
				setData((prevData) => [...prevData, ...shopLaptopsData]);
			}
		);

		return () => unsubscribe();
	}, []);

	return (
		<div>
			<div
				style={{
					display: "flex",
					color: "white",
					justifyContent: "space-between",
				}}
			>
				<h3
					style={{ marginTop: "20px", cursor: "pointer" }}
					onClick={() => navigate(-1)}
				>
					Nazad
				</h3>
				<h1 style={{ marginTop: "17px" }}>Laptop uređaji</h1>
				<div></div>
			</div>
			<hr />
			<Sort setToggle={setToggle} />
			{toggle && (
				<Sorter setToggle={setToggle} data={data} setData={setData} />
			)}
			<div className="display-quality" id="display-qlt">
				{data &&
					data.map((product, index) => (
						<Card key={index} product={product} />
					))}
			</div>
			<hr />
		</div>
	);
};
