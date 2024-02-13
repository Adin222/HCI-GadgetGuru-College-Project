import { React, useEffect, useState } from "react";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Card } from "./Card";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import discount from "../pictures/discount.svg";
import devices from "../pictures/devices.svg";
import desktop from "../pictures/desktop.svg";

export const Home = ({ scrollRef }) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		return onSnapshot(collection(db, "all-laptops"), (snapshot) => {
			const laptopData = snapshot.docs.map((doc) => doc.data());
			setData(laptopData);
		});
	}, []);
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<div data-aos="zoom-in" className="home-page">
				<h1 className="welcome">Dobro došli</h1>
				<div className="home-desc">
					<p className="txt-desc-1">
						Dobrodošli na Gadget Guru, tvoje ultimate odredište za
						najnovije tehnološke inovacije! Mi smo strastveni
						entuzijasti koji istražuju svijet gadgeta kako bismo vam
						donijeli najaktuelnije informacije, recenzije i savjete.
					</p>
				</div>
				<Link className="home-button" to="/begin-shopping">
					<button
						style={{
							border: "none",
							marginTop: "7px",
							marginLeft: "3px",
							backgroundColor: "transparent",
							color: "white",
						}}
					>
						ZAPOČNI KUPOVINU
					</button>
				</Link>
			</div>
			<div data-aos="zoom-in-down" className="home-collection">
				<div className="hTag-color">
					<h4>Novi Modeli</h4>
				</div>
				<h2 style={{ color: "#eee" }}>VRHUNSKA KVALITETA</h2>
			</div>
			<hr />
			<div
				data-aos="fade-down"
				className="display-quality"
				id="display-qlt"
			>
				{data &&
					data.map((product, index) => (
						<Card ref={scrollRef} key={index} product={product} />
					))}
			</div>
			<hr />
			<div
				data-aos="zoom-in"
				data-aos-duration="1500"
				className="discount"
			>
				<div>
					<img className="disc-pic" src={discount} alt="disc-pic" />
				</div>
				<div
					data-aos="zoom-in"
					data-aos-duration="1500"
					className="disc-text"
				>
					<h3>Svi laptopi dostupni u našoj radnji</h3>
					<Link to="/all-laptops">
						<button className="disc-button">PREGLEDAJ</button>
					</Link>
				</div>
			</div>
			<hr />
			<div
				data-aos="zoom-in"
				data-aos-duration="1500"
				className="discount"
			>
				<div>
					<img className="disc-pic" src={desktop} alt="disc-pic" />
				</div>
				<div className="disc-text">
					<h3>Naš izbor desktop računara</h3>
					<Link to="/all-pcs">
						<button className="disc-button">PREGLEDAJ</button>
					</Link>
				</div>
			</div>
			<hr />
			<div
				data-aos="zoom-in"
				data-aos-duration="1500"
				className="discount"
			>
				<div>
					<img className="disc-pic" src={devices} alt="disc-pic" />
				</div>
				<div className="disc-text">
					<h3>Pregledajte ostalu opremu u našoj radnji</h3>
					<Link to="/all-other">
						<button className="disc-button">PREGLEDAJ</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
