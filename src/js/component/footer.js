import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div>
			{/* this needs to go all the way to the left when styling */}
			<span className="navbar-brand mb-0">Logo</span>
			<span className="navbar-brand mb-0 h1">Mobile App</span>
			<span className="navbar-brand mb-0 h1">Company</span>
			<span className="navbar-brand mb-0 h1">Contact Us</span>
			{/* this needs to go all the way to the right when styling */}
			<span className="navbar-brand mb-0 ">We love our users!</span>
		</div>
	</footer>
);
