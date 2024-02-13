import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { Sort } from "./Sort";
import { Sorter } from "./Sorter";
import db from "../firebase";

export const ListPCs = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		const unsubscribeOne = onSnapshot(
			collection(db, "all-pcs"),
			(snapshot) => {
				const laptopData = snapshot.docs.map((doc) => doc.data());
				setData(laptopData);
			}
		);
		return () => unsubscribeOne();
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
				<h1 style={{ marginTop: "17px" }}>Desktop uređaji</h1>
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
