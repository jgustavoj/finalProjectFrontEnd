import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Register } from "../component/register.js";

import { Context } from "../store/appContext";

export const Login = () => {
	const [logging, setLogging] = useState("");

	return (
		<>
			{/* <div className="container"> */}
			<div className="row justify-content-center no-gutters">
				<div className="col">
					<div className="card">
						<div className="container-account">
							{/* <div className="account-tab"> */}
							<ul className="nav nav-pills mb-3 justify-content-center " id="pills-tab" role="tablist">
								<li className="nav-item">
									<button className="btn btn-light" onClick={() => setLogging("login")}>
										Login
									</button>
								</li>
								<li className="nav-item">
									<button className="btn btn-secondary" onClick={() => setLogging("register")}>
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
												<div className="col">
													<input type="text" className="form-control" placeholder="Email" />
												</div>
											</div>
											<div className="form-group row">
												{/* <label htmlFor="inputPassword3" className="col-md-0 col-form-label" /> */}
												<div className="col-sm-10">
													<input
														type="password"
														className="form-control"
														id="inputPassword3"
														placeholder="Create Password"
													/>
												</div>
											</div>
											<Link to="/calendar">
												<button type="button" className="btn btn-secondary text-center mb-3">
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
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};
