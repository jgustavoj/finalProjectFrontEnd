import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { AccordionActions } from "@material-ui/core";
import { Context } from "../store/appContext";
// import { registerLocale } from "react-datepicker";
import PropTypes from "prop-types";
export const Register = ({ setTab }) => {
	const [user, setUser] = useState({
		firstName: "",
		LastName: "",
		email: "",
		phoneNumber: "",
		password: ""
	});
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<div className="row justify-content-center no-gutters">
					<div className="col-lg-4" />
					<div className="col-lg-4 ">
						<div className="card">
							<div className="form-group row">
								<div className="col">
									<input
										onChange={e => setUser({ ...user, firstName: e.target.value })}
										type="text"
										className="form-control"
										placeholder="First Name"
										value={user.firstName}
									/>
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<input
										onChange={e => setUser({ ...user, LastName: e.target.value })}
										type="text"
										className="form-control"
										placeholder="Last Name"
										value={user.LastName}
									/>
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<input
										onChange={e => setUser({ ...user, email: e.target.value })}
										type="text"
										className="form-control"
										placeholder="Email"
										value={user.email}
									/>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-10">
									<input
										onChange={e => setUser({ ...user, phoneNumber: e.target.value })}
										type="text"
										className="form-control"
										placeholder="Phone Number"
										value={user.phoneNumber}
									/>
								</div>
							</div>
							<div className="form-group row">
								{/* <label htmlFor="inputPassword3" className="col-md-0 col-form-label" /> */}
								<div className="col-sm-10">
									<input
										onChange={e => setUser({ ...user, password: e.target.value })}
										type="password"
										className="form-control"
										id="inputPassword3"
										placeholder="Create Password"
										value={user.password}
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
								<button
									type="button"
									className="btn btn-secondary text-center mb-3"
									onClick={e => {
										actions.signUp(user);
										setUser({
											firstName: "",
											LastName: "",
											email: "",
											phoneNumber: "",
											password: ""
										});
										setTab("login");
									}}>
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

Register.propTypes = {
	setTab: PropTypes.func
};
