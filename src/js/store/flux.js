import { appointments } from "./appointments.js";
import { bool } from "prop-types";
const url = "https://3000-c1d777e6-ff85-463a-b85e-6a74ebab16d8.ws-us03.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedIn: false,
			users: [
				{
					firstName: "Gustavo",
					lastName: "Jimenez",
					email: "jime@gmail.com",
					phoneNumber: "3057984105",
					password: "123456"
				}
			],
			appointments: appointments,
			currentUser: {
				email: "",
				token: null
			}
		},
		actions: {
            getAllTheAppointmentsFromBackend: () => {
				fetch(`${url}appointments`)
					.then(response => response.json())
					.then(data => {
						console.log("Fetched again", data);
						setStore({ appointments: data });
					});
			},
				handleAppointments: (param, param2) => {
				if (param == "added") {
					console.log("param2: ", param2);
					fetch(`${url}appointments`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							title: param2.title,
							startDate: param2.startDate.toISOString().replace("Z", ""),
							endDate: param2.endDate.toISOString().replace("Z", ""),
							location: param2.notes
						})
					}).then(() => {
						fetch(`${url}appointments`)
							.then(response => response.json())
							.then(data => {
								console.log("Fetched again", data);
								setStore({ appointments: data });
							});
					});
				}
			},
			setLoggedIn: bool => {
				setStore({ loggedIn: bool });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar })
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			login: (email, password) => {
				const store = getStore();
				// const found = store.users.find(element => element.email == email);
				for (let x of store.users) {
					if (x.email == email && x.password == password) {
						setStore({
							currentUser: {
								email: email,
								token: "lgfshalhfgsdkjgfhlksdfhglkdhfsl"
							}
						});
						return true;
					}
				}
				return false;
			},
			signUp: newUser => {
				const store = getStore();
				setStore({
					users: [...store.users, newUser]
				});
			}
		}
	};
};

export default getState;
