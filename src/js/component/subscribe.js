import React from "react";
import { Link } from "react-router-dom";

export const Subscribe = () => {
	return (
		<>
			<div className="subscribe-section bg-light" id="subscribe">
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-lg-8 mx-auto text-center">
							<form className="form-inline d-flex">
								<input
									className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
									id="inputEmail"
									type="email"
									placeholder="Enter email address..."
								/>
								<Link to="/login">
									<button className="btn btn-secondary mx-auto" type="button">
										Subscribe
									</button>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
