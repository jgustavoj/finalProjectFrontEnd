import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	// const notify = () => {
	// 	fetch(
	// 		"https://3000-a1007fd4-1ba0-4ea4-a40d-d94e9227503b.ws-us02.gitpod.io/notification",

	// 		{
	// 			method: "DELETE",
	// 			headers: {
	// 				"Content-Type": "application/json"
	// 			}
	// 		}
	// 	)
	// 		.then(function(response) {
	// 			if (!response.ok) {
	// 				throw Error(response.statusText);
	// 			}
	// 			return response.json();
	// 		})
	// 		.then(function(responseAsJson) {
	// 			console.log("responseAsJson", responseAsJson);
	// 		})
	// 		.catch(function(error) {
	// 			console.log("Looks like there was a problem: \n", error);
	// 		});
	// };
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top mb-20" id="mainNav">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" /*onClick={() => notify()}*/>
					<img src={logo} height={50} width={50} />
				</span>
			</Link>

			<div className="float-left">
				{store.loggedIn && (
					<Link to="calendar">
						<button className="btn btn-light m-auto mb-0 h1">Calendar</button>
					</Link>
				)}
			</div>

			<div className="ml-auto" />
			<div className="float-right">
				{store.loggedIn ? (
					<Link to="/">
						<button className="btn btn-dark" onClick={() => actions.setLoggedIn(false)}>
							Sign Out
						</button>
					</Link>
				) : (
					<Link to="/login">
						<button className="btn btn-light">Login</button>
					</Link>
				)}
			</div>
		</nav>
	);
};

// navbar navbar-expand-lg navbar-light fixed-top bg-white mb-3
//bd-navbar flex-md-row flex-column

//navbar-brand mb-0 h1

// {
// 	/* <Link to="/events">
// 				<span className="navbar-brand mb-0 h1">Add New Event</span>
//             </Link> */
// }

// {
// 	/* <span className="navbar-brand mb-0 h1">About</span>
// <span className="navbar-brand mb-0 h1">How it works</span> */
// }
