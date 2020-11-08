import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
				<span className="navbar-brand mb-0 h1">About</span>
				<span className="navbar-brand mb-0 h1">How it works</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-light">Login</button>
					<button className="btn btn-dark">Sign Up</button>
				</Link>
			</div>
		</nav>
	);
};

// navbar navbar-expand-lg navbar-light fixed-top bg-white mb-3

//bd-navbar flex-md-row flex-column
