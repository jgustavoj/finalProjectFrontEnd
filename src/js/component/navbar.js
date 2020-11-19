import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top mb-20" id="mainNav">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={logo} height={50} width={50} />
				</span>
				{/* <span className="navbar-brand mb-0 h1">About</span>
				<span className="navbar-brand mb-0 h1">How it works</span> */}
			</Link>
			<Link to="calendar">
				<span className="navbar-brand mb-0 h1">Calendar</span>
			</Link>
			{/* <Link to="/events">
				<span className="navbar-brand mb-0 h1">Add New Event</span>
			</Link> */}
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-light">Login</button>
				</Link>
			</div>
			<div className="float-right">
				<Link to="/">
					<button className="btn btn-dark">Sign Out</button>
				</Link>
			</div>
		</nav>
	);
};

// navbar navbar-expand-lg navbar-light fixed-top bg-white mb-3
//bd-navbar flex-md-row flex-column

//navbar-brand mb-0 h1
