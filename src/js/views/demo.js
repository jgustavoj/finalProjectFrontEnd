import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => (
	<>
		{/* <div className="account-tab"> */}

		<div className="container">
			<div className="row">
				<div className="col-4" />
				<div className="col-4">
					<h1>test</h1>
				</div>
				<div className="col-4" />
			</div>
		</div>

		{/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li className="nav-item">
					<a
						className="nav-link active"
						id="pills-home-tab"
						data-toggle="pill"
						href="#pills-home"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="pills-profile-tab"
						data-toggle="pill"
						href="#pills-profile"
						role="tab"
						aria-controls="pills-profile"
						aria-selected="false">
						Profile
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="pills-contact-tab"
						data-toggle="pill"
						href="#pills-contact"
						role="tab"
						aria-controls="pills-contact"
						aria-selected="false">
						Contact
					</a>
				</li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="pills-home"
					role="tabpanel"
					aria-labelledby="pills-home-tab">
					Home
				</div>
				<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
					Profile
				</div>
				<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
					Contact
				</div>
			</div> */}
		{/* </div> */}
	</>
);

// export const Demo = () => {
// const { store, actions } = useContext(Context);

// 	return (
// 		<div className="container">
// 			<ul className="list-group">
// 				{store.demo.map((item, index) => {
// 					return (
// 						<li
// 							key={index}
// 							className="list-group-item d-flex justify-content-between"
// 							style={{ background: item.background }}>
// 							<Link to={"/single/" + index}>
// 								<span>Link to: {item.title}</span>
// 							</Link>
// 							{// Conditional render example
// 							// Check to see if the background is orange, if so, display the message
// 							item.background === "orange" ? (
// 								<p style={{ color: item.initial }}>
// 									Check store/flux.js scroll to the actions to see the code
// 								</p>
// 							) : null}
// 							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
// 								Change Color
// 							</button>
// 						</li>
// 					);
// 				})}
// 		</ul>
// 			<br />
// 			<Link to="/">
// 				<button className="btn btn-primary">Back Main</button>
// 			</Link>
// 		</div>
// 	);
// };
