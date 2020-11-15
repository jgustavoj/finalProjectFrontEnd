import React from "react";
import { Link } from "react-router-dom";
export const Register = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center no-gutters">
					<div className="col-lg-4" />
					<div className="col-lg-4 ">
						<div className="card">
							<div className="form-group row">
								<div className="col">
									<input type="text" className="form-control" placeholder="First Name" />
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<input type="text" className="form-control" placeholder="Last Name" />
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<input type="text" className="form-control" placeholder="Email" />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-10">
									<input type="text" className="form-control" placeholder="Phone Number" />
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
							<div className="form-group row">
								{/* <label htmlFor="inputPassword3" className="col-md-0 col-form-label" /> */}
								<div className="col-sm-10">
									<input
										type="password"
										className="form-control"
										id="inputPassword3"
										placeholder="Confirm Password"
									/>
								</div>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-secondary text-center mb-3">
									Register
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-4" />
				</div>
			</div>
		</>
	);
};
