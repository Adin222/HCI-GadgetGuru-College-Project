import { React, useEffect, useState } from "react";
import db from "../firebase";
import { Pagination } from "./Pagination";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { Card } from "./Card";

export const BeginShop = () => {
	const [data, setData] = useState([]);
	const [dataAdd, setDataAdd] = useState([]);
	const [dataPc, setDataPc] = useState([]);
	const [dataOther, setDataOther] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const navigate = useNavigate();
	useEffect(() => {
		return onSnapshot(collection(db, "all-laptops"), (snapshot) => {
			const laptopData = snapshot.docs.map((doc) => doc.data());
			setData(laptopData);
		});
	}, []);
	useEffect(() => {
		return onSnapshot(collection(db, "shop-laptops"), (snapshot) => {
			const laptopData = snapshot.docs.map((doc) => doc.data());
			setDataAdd(laptopData);
		});
	}, []);
	useEffect(() => {
		return onSnapshot(collection(db, "all-pcs"), (snapshot) => {
			const laptopData = snapshot.docs.map((doc) => doc.data());
			setDataPc(laptopData);
		});
	}, []);
	useEffect(() => {
		return onSnapshot(collection(db, "all-others"), (snapshot) => {
			const laptopData = snapshot.docs.map((doc) => doc.data());
			setDataOther(laptopData);
		});
	}, []);
	const allData = [...data, ...dataAdd, ...dataOther, ...dataPc];

	// Get current page
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = allData.slice(indexOfFirstPost, indexOfLastPost);
	// Change page
	const paginate = (page) => {
		setCurrentPage(page);
	};
	if (allData.length === 0) {
		return (
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
		);
	}
	const allNums = Math.ceil(allData.length / postsPerPage);
	return (
		<>
			<h3
				style={{ marginTop: "7px", color: "white", cursor: "pointer" }}
				onClick={() => navigate(-1)}
			>
				Nazad
			</h3>
			<hr />
			<div className="display-quality">
				{currentPosts.map((product, index) => (
					<Card key={index} product={product} />
				))}
			</div>
			<hr />
			<Pagination allNums={allNums} paginate={paginate} />
		</>
	);
};
