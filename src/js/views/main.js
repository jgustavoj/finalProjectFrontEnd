import React, { useState } from "react";
//import { Register } from "../component/register.js";
import { Jumbotron } from "../component/jumbotron.js";
import { Footer } from "../component/footer.js";
import { About } from "../component/about.js";
import { Subscribe } from "../component/subscribe.js";

export const Main = () => {
	//const [key, setKey] = useState("login");
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
