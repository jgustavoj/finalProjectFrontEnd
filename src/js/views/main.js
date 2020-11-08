import React from "react";
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
		{/* Get started Section*/}
		<div className="text-center bg-light mb-5">
			<h1>Organize, Remember, Schedule like never before</h1>
			<p>
				{" "}
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
			<h4>Dont worry we got a guy for that! </h4>
		</div>
		<div className="container mb-2">
			<div className="row">
				<div className="col">
					<img src={placeholder} />{" "}
				</div>
				<div className="col">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</div>
				<div className="w-100" />
				<div className="col">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum
				</div>
				<div className="col">
					<img src={placeholder} />
				</div>
			</div>
		</div>

		<div className="text-center mt-5">
			<h2>Ready to get to know our guy?</h2>
		</div>

		<div className="sign-up">
			<div className="text-center">
				<h4>Sign up!</h4>
			</div>

			<form>
				<div className="form-row">
					<div className="col">
						<input type="text" className="form-control" placeholder="First name" />
					</div>
					<div className="col">
						<input type="text" className="form-control" placeholder="Last name" />
					</div>
				</div>
				<div className="form-row">
					<label htmlFor="colFormLabel" className="col-md-0 col-form-label" />
					<div className="col">
						<input type="email" className="form-control" id="colFormLabel" placeholder="Email Address" />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputPassword3" className="col-md-0 col-form-label" />
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							id="inputPassword3"
							placeholder="Create Password"
						/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Register
				</button>
			</form>
		</div>
	</div>
);

/* // import rigoImage from "../../img/rigo-baby.jpg";
//<p>
//<img src=rigoImage />
//</p> */

{
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
}
