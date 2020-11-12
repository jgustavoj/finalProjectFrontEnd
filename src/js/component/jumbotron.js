import React from "react";

export const Jumbotron = () => {
	return (
		<>
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-4">The Schedule Guy</h1>
					<p className="lead">Its easy as one Click </p>
					{/* this button should take me to the how it works page  */}
					<button className="btn btn-light">Get Started</button>
				</div>
			</div>
		</>
	);
};
