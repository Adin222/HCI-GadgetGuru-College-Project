import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";

export const Filter = ({ setToggle, setFilterData }) => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [dataAdd, setDataAdd] = useState([]);
	const [dataPc, setDataPc] = useState([]);
	const [dataOther, setDataOther] = useState([]);
	const [selectedType, setSelectedType] = useState("");
	const [selectedBrand, setSelectedBrand] = useState("");
	const [selectedUsed, setSelectedUsed] = useState("");
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(10000);

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

	const applyFilters = () => {
		let filteredData = allData;

		if (selectedType) {
			filteredData = filteredData.filter(
				(product) =>
					product.type &&
					product.type.toLowerCase() === selectedType.toLowerCase()
			);
		}

		if (selectedBrand) {
			filteredData = filteredData.filter(
				(product) =>
					product.brand &&
					product.brand.toLowerCase() === selectedBrand.toLowerCase()
			);
		}

		if (selectedUsed !== "") {
			filteredData = filteredData.filter(
				(product) =>
					selectedUsed === "none" ||
					product.used === (selectedUsed === "true")
			);
		}

		filteredData = filteredData.filter(
			(product) => product.price >= minPrice && product.price <= maxPrice
		);

		setFilterData(filteredData);
		navigate("/filtered-products");
	};

	return (
		<div className="filter-container">
			<button
				onClick={() => setToggle(false)}
				className="close-filter-btn"
			>
				<IoMdClose style={{ marginBottom: "2px" }} />
			</button>
			<div className="filter-content">
				<div className="prod-type">
					<p>Vrsta proizvoda: </p>
					<select onChange={(e) => setSelectedType(e.target.value)}>
						<option value=""></option>
						<option value="laptop">Laptop</option>
						<option value="pc">PC</option>
						<option value="headphone">Slušalice</option>
						<option value="speaker">Zvučnik</option>
						<option value="keyboard">Tastatura</option>
						<option value="monitor">Monitor</option>
					</select>
				</div>
				<hr />
				<div className="select-choice">
					<div className="brand">
						<p>Brend: </p>
						<select
							onChange={(e) => setSelectedBrand(e.target.value)}
						>
							<option value=""></option>
							<option value="asus">Asus</option>
							<option value="acer">Acer</option>
							<option value="dell">Dell</option>
							<option value="hp">Hp</option>
							<option value="apple">Apple</option>
							<option value="razer">Razer</option>
							<option value="toshiba">Toshiba</option>
							<option value="samsung">Samsung</option>
						</select>
					</div>
				</div>
				<hr />
				<div
					style={{ display: "flex", justifyContent: "space-evenly" }}
				>
					<label>
						<input
							onChange={(e) => setSelectedUsed(e.target.value)}
							type="radio"
							value="true"
							name="react-tips"
						/>
						Korišteno
					</label>
					<label>
						<input
							onChange={(e) => setSelectedUsed(e.target.value)}
							type="radio"
							value="false"
							name="react-tips"
						/>
						Novo
					</label>
					<label>
						<input
							onChange={(e) => setSelectedUsed(e.target.value)}
							type="radio"
							value="none"
							name="react-tips"
						/>
						Oboje
					</label>
				</div>
				<hr />
				<div className="input-price">
					Od
					<input
						type="number"
						id="min-price"
						name="min-price"
						min="0"
						max="10000"
						onChange={(e) => setMinPrice(Number(e.target.value))}
					/>
					Do
					<input
						type="number"
						id="max-price"
						name="max-price"
						min="10"
						max="10000"
						onChange={(e) => setMaxPrice(Number(e.target.value))}
					/>
				</div>
				<hr />
				<div className="div-button">
					<button onClick={applyFilters} className="confirm-filter">
						Pretraži
					</button>
				</div>
			</div>
		</div>
	);
};
