import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Register } from "../component/register.js";
import { SignIn } from "../component/sign-in.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Context } from "../store/appContext";

export const Login = () => {
	// const [logging, setLogging] = useState("");

	return (
		<>
			<div className="account-tab">
				<Tabs className="justify-content-center" defaultActiveKey="home" id="uncontrolled-tab-example">
					<Tab eventKey="home" title="Home">
						<SignIn />
					</Tab>
					<Tab eventKey="profile" title="Register">
						<Register />
					</Tab>
				</Tabs>
			</div>
		</>
	);
};
