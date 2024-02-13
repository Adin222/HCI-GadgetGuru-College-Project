import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { CardCompare } from "./CardCompare";

export const Compare = () => {
	const [showBoxFirst, setShowBoxFirst] = useState(true);
	const [showBoxSecond, setShowBoxSecond] = useState(true);
	const [showListFirst, setShowListFirst] = useState(false);
	const [showListSecond, setShowListSecond] = useState(false);
	const [dataOne, setDataOne] = useState([]);
	const [dataTwo, setDataTwo] = useState([]);
	const [selectedProductFirst, setSelectedProductFirst] = useState(null);
	const [selectedProductSecond, setSelectedProductSecond] = useState(null);

	useEffect(() => {
		const unsubscribeOne = onSnapshot(
			collection(db, "all-laptops"),
			(snapshot) => {
				const laptopData = snapshot.docs.map((doc) => doc.data());
				setDataOne(laptopData);
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
			}
		);

		return () => unsubscribeTwo();
	}, []);

	const handleShowBoxFirst = () => {
		setShowBoxFirst(false);
		setShowListFirst(true);
	};

	const handleShowBoxSecond = () => {
		setShowBoxSecond(false);
		setShowListSecond(true);
	};

	const handleSelectProductFirst = (event) => {
		const selectedProductName = event.target.value;
		const selectedProduct = dataArray.find(
			(product) => product.name === selectedProductName
		);
		setSelectedProductFirst(selectedProduct);
		setShowListFirst(false);
	};

	const handleSelectProductSecond = (event) => {
		const selectedProductName = event.target.value;
		const selectedProduct = dataArray.find(
			(product) => product.name === selectedProductName
		);
		setSelectedProductSecond(selectedProduct);
		setShowListSecond(false);
	};
	const handleCloseFirst = () => {
		setSelectedProductFirst(false);
		setShowListFirst(true);
	};
	const handleCloseSecond = () => {
		setSelectedProductSecond(false);
		setShowListSecond(true);
	};

	let dataArray = [...dataOne, ...dataTwo];

	return (
		<div className="container_compare">
			{showBoxFirst && (
				<div onClick={handleShowBoxFirst} className="card_compare">
					<span className="plus">+</span>
				</div>
			)}
			{showListFirst && (
				<select onChange={handleSelectProductFirst}>
					<option value=""></option>
					{dataArray &&
						dataArray.map((product, index) => (
							<option key={index} value={product.name}>
								{product.name}
							</option>
						))}
				</select>
			)}
			{selectedProductFirst && (
				<CardCompare
					handleClose={handleCloseFirst}
					product={selectedProductFirst}
				/>
			)}
			{showBoxSecond && (
				<div onClick={handleShowBoxSecond} className="card_compare">
					<span className="plus">+</span>
				</div>
			)}
			{showListSecond && (
				<select onChange={handleSelectProductSecond}>
					<option value=""></option>
					{dataArray &&
						dataArray.map((product, index) => (
							<option key={index} value={product.name}>
								{product.name}
							</option>
						))}
				</select>
			)}

			{selectedProductSecond && (
				<CardCompare
					handleClose={handleCloseSecond}
					product={selectedProductSecond}
				/>
			)}
		</div>
	);
};
