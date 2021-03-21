import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Register = ({ setTab }) => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
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
										onChange={e => setUser({ ...user, lastName: e.target.value })}
										type="text"
										className="form-control"
										placeholder="Last Name"
										value={user.lastName}
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
								<div className="col">
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
								<div className="col">
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
								<div className="col">
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
										actions.signUp(
											user.firstName,
											user.lastName,
											user.email,
											user.phoneNumber,
											user.password
										);
										setUser({
											firstName: "",
											lastName: "",
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
