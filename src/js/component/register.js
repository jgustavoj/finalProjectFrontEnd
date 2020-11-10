import React from "react";
import { Link } from "react-router-dom";
export const Register = () => {
	return (
		<form>
			<div className="form-row">
				<div className="col">
					<input type="text" className="form-control" placeholder="First name" />
				</div>
				<div className="col">
					<input type="text" className="form-control" placeholder="Last name" />
				</div>
			</div>
			<div className="form-row">
				<label htmlFor="colFormLabel" className="col-md-0 col-form-label" />
				<div className="col">
					<input type="email" className="form-control" id="colFormLabel" placeholder="Email Address" />
				</div>
			</div>
			<div className="form-group row">
				<label htmlFor="inputPassword3" className="col-md-0 col-form-label" />
				<div className="col-sm-10">
					<input type="password" className="form-control" id="inputPassword3" placeholder="Create Password" />
				</div>
			</div>
			<button type="submit" className="btn btn-primary">
				Register
			</button>
		</form>
	);
};
