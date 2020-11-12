import React from "react";
import { Link } from "react-router-dom";
export const Register = () => {
	return (
		<>
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
					<input type="password" className="form-control" id="inputPassword3" placeholder="Create Password" />
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
			<button type="submit" className="btn btn-primary">
				Register
			</button>
		</>
	);
};
