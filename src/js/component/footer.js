import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Footer = () => (
	<>
		<div className="container">
			<footer className="footer mt-auto py-3 text-center">
				<div>
					{/* this needs to go all the way to the left when styling */}
					{/* <span className="navbar-brand mb-0">Logo</span> */}
					<img className="img-fluid float-left" src={logo} height={45} width={45} />
					<span className="navbar-brand mb-0 h1">Mobile App</span>
					<span className="navbar-brand mb-0 h1">Company</span>
					<span className="navbar-brand mb-0 h1">Contact Us</span>
					{/* this needs to go all the way to the right when styling */}
					<span className="navbar-brand mb-0 float-right">
						{" "}
						<i className="fas fa-heart">We love our users!</i>
					</span>
				</div>
			</footer>
		</div>
	</>
);

{
	/* <img className="img-fluid" src={iphone2} height={350} width={300} /> */
}
