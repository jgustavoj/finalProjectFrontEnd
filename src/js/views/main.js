import React from "react";
import { Register } from "../component/register.js";
import placeholder from "../../img/placeholder.jpg";

export const Main = () => (
	<div>
		{/* jumbotron Section */}
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">The Schedule Guy</h1>
				<p className="lead">Its easy as one Click </p>
				{/* this button should take me to the how it works page  */}
				<button className="btn btn-light">Get Started</button>
			</div>
		</div>
		{/* Get started Section/About*/}
		<div className="about-container">
			<div className="text-center bg-light mb-5">
				<h1>Organize, Remember, Schedule like never before</h1>

				<p>
					{" "}
					We want to help you seamlessly organize and stay on top of your busy life. Well remind you through a
					text message whenever your next assignemnt or appoinment is coming up. Parents learning to adapt to
					virtual school? Well send you a message so YOU can help your child stay on top of their work.
					Whatever reminder and schedule you need....
				</p>

				<h4>Dont worry we got a guy for that! </h4>
			</div>
		</div>

		{/* How it Works Section*/}

		<div className="container mb-2">
			<div className="row">
				<div className="col">
					<img src={placeholder} />{" "}
				</div>
				<div className="col">Simply create an account and add your reminder due dates and times</div>
				<div className="w-100" />
				<div className="col">Add phone number and well remind you!</div>
				<div className="col">
					<img src={placeholder} />
				</div>
			</div>
		</div>

		{/* login section   */}
		<div>
			<div className="text-center mt-5">
				<h2>Ready to get to know our guy?</h2>
			</div>

			<div className="sign-up">
				<div className="text-center">
					<h4>Sign up!</h4>
				</div>
				<Register />
			</div>
		</div>
	</div>
);

/* // import rigoImage from "../../img/rigo-baby.jpg";
//<p>
//<img src=rigoImage />
//</p> */

//{
/* <form>
				<div className="row">
					<div className="col">
						<input type="text" className="form-control" placeholder="First name" />
					</div>
					<div className="col">
						<input type="text" className="form-control" placeholder="Last name" />
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputEmail3" />
					<div className="form-group col-md-6">
						<input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputPassword4" />
					<div className="form-group col-md-6">
						<input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
					</div>
				</div>
			</form> */
// }
