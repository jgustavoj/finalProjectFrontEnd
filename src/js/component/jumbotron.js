import React from "react";

export const Jumbotron = () => {
	return (
		<>
			<div className="jumbotron">
				<div className="container d-flex h-100 align-items-center">
					<div className="mx-auto text-center">
						<h1 className="mx-auto my-0 text-uppercase">The Schedule Guy</h1>
						<h2 className="text-black-50 mx-auto mt-2 mb-5">Its easy as one Click</h2>
						<a className="btn btn-secondary" href="#about">
							Get Started
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
