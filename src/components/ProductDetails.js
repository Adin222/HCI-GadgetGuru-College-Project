import { React, useEffect, useState, useContext } from "react";
import db from "../firebase";
import { useParams, useNavigate } from "react-router-dom";
import { collection, onSnapshot, doc, setDoc } from "firebase/firestore";
import { CartContext } from "./Context";
import { LaptopPcDetails } from "./LaptopPcDetails";
import { MonitorDetail } from "./MonitorDetail";
import { KeyboardDetails } from "./KeyboardDetails";
import { SpeakerDetails } from "./SpeakerDetails";
import { HeadphoneDetails } from "./HeadphoneDetails";

export const ProductDetails = ({ userID }) => {
	const [data, setData] = useState([]);
	const [dataAdd, setDataAdd] = useState([]);
	const [dataPc, setDataPc] = useState([]);
	const [dataOther, setDataOther] = useState([]);
	const [counter, setCounter] = useState(0);
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
	const { id } = useParams();
	const { isLogged } = useContext(CartContext);
	const handleAddToCart = async (product) => {
		if (userID !== null) {
			try {
				const cartProduct = {
					...product[0],
					quantity: 1,
				};

				await setDoc(
					doc(db, "Cart" + userID, product[0].id),
					cartProduct
				);
				setCounter(1);
				setTimeout(() => {
					setCounter(0);
				}, 800);
				console.log("Successfully added to Firestore");
			} catch (error) {
				console.error("Error adding to Firestore", error);
			}
		}
	};
	let allData = [...data, ...dataAdd, ...dataPc, ...dataOther];
	if (allData === null) return <div>Nema Proizvoda</div>;
	const product = allData.filter((elem) => elem.id === id);
	if (!product || !product[0]) {
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
	const handleErrorMessage = () => {
		alert("Niste prijavljeni, nemate mogućnost dodavanja u korpu");
	};

	return (
		<div className="container mt-5 mb-5">
			<div className="row d-flex justify-content-center">
				<div className="col-md-10">
					<div className="card">
						<div className="row">
							<div className="col-md-6">
								<div className="images p-3">
									<div className="text-center p-4">
										{" "}
										<img
											id="main-image"
											src={product[0].image_url}
											alt="neka-sl"
											width="250"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="product p-4">
									<div className="d-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
											<button
												onClick={() => navigate(-1)}
												className="arrow-button"
											>
												<i className="fa fa-long-arrow-left"></i>{" "}
												<span className="ml-1">
													Nazad
												</span>{" "}
											</button>
										</div>{" "}
										<i className="fa fa-shopping-cart text-muted"></i>
									</div>
									<div className="mt-4 mb-3">
										{" "}
										<span className="text-uppercase text-muted brand">
											{product[0].brand}
										</span>
										<h5 className="text-uppercase">
											{product[0].name}
										</h5>
										<div className="price d-flex flex-row align-items-center">
											{" "}
											<span className="act-price">
												<b>{product[0].price}</b> KM
											</span>
										</div>
									</div>
									{product[0].has_ss === true ||
									product[0].has_ss === false ? (
										<LaptopPcDetails product={product} />
									) : product[0].type === "monitor" ? (
										<MonitorDetail product={product} />
									) : product[0].type === "keyboard" ? (
										<KeyboardDetails product={product} />
									) : product[0].type === "speaker" ? (
										<SpeakerDetails product={product} />
									) : product[0].type === "headphone" ? (
										<HeadphoneDetails product={product} />
									) : (
										"nema"
									)}
									<div className="d-flex flex-row">
										<div className="ratings mr-2">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<span className="prod-rate">
											{product[0].rate}
										</span>
									</div>
									<div className="cart mt-4 align-items-center">
										{" "}
										<button
											onClick={
												isLogged
													? () =>
															handleAddToCart(
																product
															)
													: () => handleErrorMessage()
											}
											className="btn btn-danger text-uppercase mr-2 px-4"
										>
											Dodaj u korpu
										</button>{" "}
										{counter === 1 && isLogged && (
											<p
												style={{
													color: "green",
													paddingLeft: "10px",
												}}
											>
												Dodano u korpu
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
