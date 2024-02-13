import { React, useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { IoFilterOutline } from "react-icons/io5";
import { FAQ } from "./components/FAQ";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Compare } from "./components/Compare";
import { User } from "./components/User";
import { Searchbar } from "./components/Searchbar";
import "./style/StyleSheet.css";
import { auth } from "./firebase";
import { CartContext } from "./components/Context";
import { ProductDetails } from "./components/ProductDetails";
import ScrollToTop from "./utils/ScrollToTop";
import { ListLaptops } from "./components/ListLaptops";
import { Filter } from "./components/Filter";
import { SearchedProd } from "./components/SearchedProd";
import { ListPCs } from "./components/ListPCs";
import { ListOther } from "./components/ListOther";
import { ContactUs } from "./components/ContactUs";
import { BeginShop } from "./components/BeginShop";
import { FilteredProducts } from "./components/FilteredProducts";
import { CardInfo } from "./components/CardInfo";
import { SuccesMessage } from "./components/SuccesMessage";

function App() {
	const [userID, setUserID] = useState(null);
	const [isLogged, setLogged] = useState(false);
	const [isToggle, setToggle] = useState(false);
	const [cart, setCart] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterData, setFilterData] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUserID(user.uid);
				setLogged(true);
			} else {
				setUserID(null);
				setLogged(false);
			}
		});
	}, [userID]);

	const location = useLocation();
	const excludedPaths = [
		"/user",
		"/cart",
		"/about",
		"/all-laptops",
		"/product",
		"/faq",
		"/searched-products",
		"/all-pcs",
		"/all-other",
		"/compare",
		"/contact",
		"/begin-shopping",
		"/filtered-products",
		"/card-input",
		"/succes",
	];
	const isHome = !excludedPaths.some((path) =>
		location.pathname.startsWith(path)
	);
	const handleKeyPress = (e) => {
		if (e.key === "Enter" && searchTerm.length > 0) {
			navigate("/searched-products");
		}
	};
	const handleButtonPress = (e) => {
		if (searchTerm.length > 0) {
			navigate("/searched-products");
		}
	};
	return (
		<CartContext.Provider value={{ cart, setCart, userID, isLogged }}>
			<div className="App">
				<Header userID={userID} />
				<div className="container-project">
					{isHome && (
						<>
							<div className="search-filter-container">
								<Searchbar
									searchTerm={searchTerm}
									handleKeyPress={handleKeyPress}
									handleButtonPress={handleButtonPress}
									setSearchTerm={setSearchTerm}
								/>
								<button
									onClick={() => setToggle(true)}
									className="filter-button"
								>
									<IoFilterOutline
										style={{ marginTop: "8px" }}
									/>
									<p style={{ marginTop: "3px" }}>Filter</p>
								</button>
							</div>
							{isToggle && (
								<div className="blur-background">
									<Filter
										setToggle={setToggle}
										setFilterData={setFilterData}
									/>
								</div>
							)}
						</>
					)}
					<ScrollToTop />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="about" element={<About />}></Route>
						<Route
							path="product/:id"
							element={<ProductDetails userID={userID} />}
						></Route>
						<Route path="faq" element={<FAQ />}></Route>
						<Route path="contact" element={<ContactUs />}></Route>
						<Route
							path="cart"
							element={<Cart isLogged={isLogged} />}
						></Route>
						<Route path="compare" element={<Compare />}></Route>
						<Route path="user/:id" element={<User />}></Route>
						<Route
							path="all-laptops"
							element={<ListLaptops />}
						></Route>
						<Route
							path="searched-products"
							element={<SearchedProd searchTerm={searchTerm} />}
						></Route>
						<Route path="all-pcs" element={<ListPCs />}></Route>
						<Route path="all-other" element={<ListOther />}></Route>
						<Route
							path="begin-shopping"
							element={<BeginShop />}
						></Route>
						<Route
							path="/filtered-products"
							element={
								<FilteredProducts filterData={filterData} />
							}
						></Route>
						<Route
							path="/card-input"
							element={<CardInfo userID={userID} />}
						></Route>
						<Route
							path="/success"
							element={<SuccesMessage />}
						></Route>
					</Routes>
				</div>
				<Footer userID={userID} />
			</div>
		</CartContext.Provider>
	);
}

export default App;
