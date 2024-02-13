import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export const Header = ({ userID }) => {
	const [nameClass, setNameClass] = useState(false);
	const toggleOnClick = () => {
		setNameClass(!nameClass);
	};
	return (
		<>
			<div className="header">
				<div className="logo">
					<Link to="/">
						<img className="image" src={logo} alt="Gadget Guru" />
					</Link>
				</div>
				<div className="meni">
					<div className="button-box">
						<Link to="/">
							<button className="button-meni">Početak</button>
						</Link>
					</div>
					<div className="button-box">
						<Link to="/about">
							<button className="button-meni">O nama</button>
						</Link>
					</div>
					<div className="button-box">
						<Link to="/cart">
							<button className="button-meni">
								<FaCartShopping size={25} />
							</button>
						</Link>
					</div>
					<div className="button-box">
						<Link to="/compare">
							<button className="button-meni">Uporedi</button>
						</Link>
					</div>
					<div className="button-box">
						<Link to={`/user/${userID}`}>
							<button className="button-meni">
								<FaRegUserCircle size={25} />
							</button>
						</Link>
					</div>
				</div>
				<div
					onClick={toggleOnClick}
					className={`hamburger ${nameClass ? "active" : ""}`}
				>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</div>
			<div
				className={
					nameClass ? "appearing-meni-appear" : "appearing-meni"
				}
			>
				<div className="element">
					<Link to="/">
						<button className="button-el">HOME</button>
					</Link>
				</div>
				<div className="element">
					<Link to="/about">
						<button className="button-el">O nama</button>
					</Link>
				</div>
				<div className="element">
					<Link to="/cart">
						<button className="button-el">Cart</button>
					</Link>
				</div>
				<div className="element">
					<Link to="/compare">
						<button className="button-el">Uporedi</button>
					</Link>
				</div>
				<div className="element">
					<Link to="/user/:id">
						<button className="button-el">Profile</button>
					</Link>
				</div>
			</div>
		</>
	);
};
