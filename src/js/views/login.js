import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Register } from "../component/register.js";

import { Context } from "../store/appContext";

export const Login = () => {
	const [logging, setLogging] = useState("");

	return (
		<>
			<div className="container-account">
				<div className="account-tab">
					<ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
						<li className="nav-item">
							<button className="btn btn-primary" onClick={() => setLogging("login")}>
								Login
							</button>
						</li>
						<li className="nav-item">
							<button className="btn btn-primary" onClick={() => setLogging("register")}>
								Register
							</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div
							className="tab-pane fade show active"
							id="pills-home"
							role="tabpanel"
							aria-labelledby="pills-home-tab">
							{logging == "register" ? (
								<Register />
							) : (
								<form>
									<div className="form-group row">
										<label htmlFor="colFormLabel" className="col-md-0 col-form-label" />
										<div className="col">
											<input
												type="email"
												className="form-control"
												id="colFormLabel"
												placeholder="Email Address"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label htmlFor="inputPassword3" className="col-md-0 col-form-label" />
										<div className="col-sm-10">
											<input
												type="password"
												className="form-control"
												id="inputPassword3"
												placeholder="Password"
											/>
										</div>
									</div>
									<Link to="/calendar">
										<button type="button" className="btn btn-primary text-center">
											Sign In
										</button>
									</Link>
								</form>
							)}
						</div>
						{/* <div
							className="tab-pane fade"
							id="pills-profile"
							role="tabpanel"
							aria-labelledby="pills-profile-tab"
						/> */}
					</div>
				</div>
			</div>
		</>
	);
};
