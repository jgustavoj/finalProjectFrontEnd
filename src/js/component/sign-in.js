import React from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center no-gutters">
					<div className="col-lg-4" />
					<div className="col-lg-4 ">
						<div className="card">
							<div className="container-account">
								<form>
									<div className="form-group row">
										<div className="col">
											<input type="text" className="form-control" placeholder="Email" />
										</div>
									</div>
									<div className="form-group row">
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
										<div className="text-center">
											<button type="button" className="btn btn-secondary text-center mb-3">
												Sign In
											</button>
										</div>
									</Link>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-4" />
				</div>
			</div>
		</>
	);
};
