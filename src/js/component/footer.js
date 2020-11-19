import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoname from "../../img/logoname.png";

export const Footer = () => (
	<>
		<div className="container">
			<footer className="footer mt-auto py-3 text-center">
				<div>
					{/* this needs to go all the way to the left when styling */}
					{/* <span className="navbar-brand mb-0">Logo</span> */}
					<img className="img-fluid float-left" src={logoname} height={55} width={55} />
					{/* <span className="navbar-brand mb-0 h1">Mobile App</span>
					<span className="navbar-brand mb-0 h1">Company</span>
					<span className="navbar-brand mb-0 h1">Contact Us</span> */}
					{/* this needs to go all the way to the right when styling */}
					<span className="navbar-brand mb-0 float-right">
						{" "}
						We love our users <i className="fas fa-heart" />
					</span>
				</div>
			</footer>
		</div>
	</>
);
