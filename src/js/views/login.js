import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Register } from "../component/register.js";
import { Footer } from "../component/footer.js";
import { SignIn } from "../component/sign-in.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Context } from "../store/appContext";

export const Login = () => {
	const [key, setKey] = useState("login");
	return (
		<>
			<div className="account-tab">
				<Tabs
					onSelect={k => {
						// console.log(k);
						setKey(k);
					}}
					className="justify-content-center"
					defaultActiveKey="login"
					activeKey={key}
					id="uncontrolled-tab-example">
					<Tab eventKey="login" title="Login">
						<SignIn />
					</Tab>
					<Tab eventKey="register" title="Register">
						<Register setTab={setKey} />
					</Tab>
				</Tabs>
			</div>

			<Footer className="footer-login" />
		</>
	);
};
