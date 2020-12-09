import { appointments } from "./appointments.js";
import { bool } from "prop-types";

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
			},
			events: [
				{ startDate: "2020-11-12T09:45", title: "Meeting" },
				{ startDate: "2020-11-13T12:00", title: "Go to a gym" },
				{ startDate: "2020-11-14T13:00", title: "Groceries" },
				{ startDate: "2020-11-11T15:00", title: "Run" }
			]
		},
		actions: {
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
