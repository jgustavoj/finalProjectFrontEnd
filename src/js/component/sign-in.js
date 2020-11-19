import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { getState } from "../store/flux";

export const SignIn = () => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const history = useHistory();
	const { store, actions } = useContext(Context);
	// const handleSubmit = e => {
	// 	if (users.email == email.toLowerCase() && users.password == password) {
	// 		return "/calendar";
	// 	} else {
	// 		alert("Incorrect Information, please try again.");
	// 	}
	// };

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
											<input
												onChange={e => setEmail(e.target.value)}
												type="text"
												className="form-control"
												placeholder="Email"
												value={email}
											/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col">
											<input
												onChange={e => setPassword(e.target.value)}
												type="password"
												className="form-control"
												id="inputPassword3"
												placeholder="Password"
												value={password}
											/>
										</div>
									</div>
									{/* <Link to={handleSubmit()}> */}
									<div className="text-center">
										<button
											type="button"
											className="btn btn-secondary text-center mb-3"
											onClick={async e => {
												let result = await actions.login(email, password);
												if (result) {
													history.push("/calendar");
												} else {
													alert("Please check your credentials and try again");
												}
											}}>
											Sign In
										</button>
									</div>
									{/* </Link> */}
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