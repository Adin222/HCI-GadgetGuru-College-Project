import React from "react";
import { Link } from "react-router-dom";

export const CreditProduct = ({ product }) => {
	return (
		<section>
			<div className="container py-5">
				<div className="row justify-content-center mb-3">
					<div className="col-md-15 col-xl-13">
						<div className="card shadow-0 border rounded-3">
							<div className="card-body">
								<div className="row">
									<div className="col-md-12 col-lg-3 col-xl-12 mb-6 mb-lg-1">
										<div className="bg-image hover-zoom ripple rounded ripple-surface">
											<img
												src={product.image_url}
												className="w-100"
												alt="nesta"
											/>
											<a href="#!">
												<div className="hover-overlay">
													<div
														className="mask"
														style={{
															backgroundColor:
																"rgba(253, 253, 253, 0.15)",
														}}
													></div>
												</div>
											</a>
										</div>
									</div>
									<div className="col-md-6 col-lg-6 col-xl-6">
										<h5>{product.name}</h5>
										<div className="d-flex flex-row">
											<div className="text-danger mb-1 me-2">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<span>{product.rate}</span>
										</div>
									</div>
									<div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
										<div className="d-flex flex-row align-items-center mb-1">
											<h4 className="mb-1 me-1">
												<b>{product.price}</b>KM
											</h4>
										</div>
										<div className="d-flex flex-row mt-6">
											<Link to={`/product/${product.id}`}>
												<button
													className="btn btn-primary btn-md"
													type="button"
												>
													Details
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
