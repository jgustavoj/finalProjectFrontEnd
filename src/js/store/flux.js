import { appointments } from "./appointments.js";
import { bool } from "prop-types";
const url = "https://3000-a1007fd4-1ba0-4ea4-a40d-d94e9227503b.ws-us03.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedIn: false,
			users: [{}],
			appointments: [],
			//currentUser: {},
			token: null
		},
		actions: {
			// GETS all the appointments from the backend listed in the calendar
			getAllTheAppointmentsFromBackend: () => {
				const store = getStore();
				fetch(`${url}appointments`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				})
					.then(response => response.json())
					.then(data => {
						// console.log("Fetched user appointments", data);
						setStore({ appointments: data });
					});
			},
			// adds appointments to the backend from the calendar
			handleAppointment: (param, deleted) => {
				const store = getStore();
				if (param == "added") {
					console.log("param2: ", param2);
					fetch(`${url}appointments`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`
						},
						body: JSON.stringify({
							title: param2.title,
							startDate: param2.startDate.toISOString().replace("Z", ""),
							endDate: param2.endDate.toISOString().replace("Z", ""),
							location: param2.title
						})
					}).then(() => {
						getActions().getAllTheAppointmentsFromBackend();
					});
				}
				// if (param == "changed") {
				// 	// fetch(`${url}appointments${id}`, {
				// 	// 	method: "PUT",
				// 	// 	headers: { "Content-Type": "application/json" },
				// 	// 	body: JSON.stringify({
				// 	// 		title: param2.title,
				// 	// 		startDate: param2.startDate.toISOString().replace("Z", ""),
				// 	// 		endDate: param2.endDate.toISOString().replace("Z", ""),
				// 	// 		location: param2.title
				// 	// 	})
				// 	// }).then(() => {
				// 	// 	fetch(`${url}appointments`)
				// 	// 		.then(response => response.json())
				// 	// 		.then(data => {
				// 	// 			console.log("Created", data);
				// 	// 			setStore({ appointments: data });
				// 	// 		});
				// 	// });
				// }
				if (deleted) {
					fetch(`${url}appointments/${deleted}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`
						}
					}).then(() => {
						getActions().getAllTheAppointmentsFromBackend();
					});
				}
			},

			//this function updates any edits on the backend from calendar
			// handleAppointmentUpdate: (param, param2) => {
			// 	console.log(startDate, endDate);
			// 	/*if (param == "changed") {
			// 		console.log("Updated!", param3);*/
			// 	fetch(`${url}` + id, {
			// 		method: "PUT",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify({
			// 			title: title,
			// 			startDate: startDate.toISOString().replace("Z", ""),
			// 			endDate: endDate.toISOString().replace("Z", ""),
			// 			location: title
			// 		})
			// 	}).then(() => {
			// 		fetch(`${url}appointments`)
			// 			.then(response => response.json())
			// 			.then(data => {
			// 				console.log("Updated", data);
			// 				setStore({ appointments: data });
			// 			});
			// 	});
			// 	//}
			// },
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

			login: async (email, password, history) => {
				await fetch(`${url}login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => response.json())
					.then(token => {
						console.log("Token Created", token);
						if (typeof token.msg != "undefined") {
							//Notify.error(token.msg)
						} else {
							setStore({
								token: token
								// currentUser: data.user_info
							});
						}
					});
				// history.push("/calendar");
			},

			signUp: (firstName, lastName, email, phoneNumber, password) => {
				fetch(`${url}user`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_name: firstName,
						last_name: lastName,
						email: email,
						phone_number: phoneNumber,
						password: password
					})
				})
					.then(response => response.json())
					.then(data => {
						console.log("User Created", data);
						setStore({ users: data });
					});
			}
		}
	};
};

export default getState;

// login: (email, password) => { //this function simulates a login functionality thats front-end only, good for testing
// 	const store = getStore();
// 	// const found = store.users.find(element => element.email == email);
// 	for (let x of store.users) {
// 		if (x.email == email && x.password == password) {
// 			setStore({
// 				currentUser: {
// 					email: email,
// 					token: "lgfshalhfgsdkjgfhlksdfhglkdhfsl"
// 				}
// 			});
// 			return true;
// 		}
// 	}
// 	return false;
// },
// signUp: newUser => {
// 	const store = getStore();
// 	setStore({
// 		users: [...store.users, newUser]
// 	});
// }
