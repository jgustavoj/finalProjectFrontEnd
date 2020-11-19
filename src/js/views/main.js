import React, { useState } from "react";
import { Register } from "../component/register.js";
import { Jumbotron } from "../component/jumbotron.js";
import { Footer } from "../component/footer.js";
import { About } from "../component/about.js";
import { Subscribe } from "../component/subscribe.js";

export const Main = () => {
	const [key, setKey] = useState("login");
	return (
		<>
			<Jumbotron />
			<About />
			<div className="sign-up bg-light">
				<div className="text-center mt-5 mb-5">
					<i className="far fa-paper-plane fa-2x" />
					<h2 id="sign-up">Let our guy keep you up to date!</h2>
				</div>
				{/* <Register setTab={setKey} /> */}
				<Subscribe />
				<Footer />
			</div>
		</>
	);
};

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
