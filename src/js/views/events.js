import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Events = () => {
	const [singleEvent, setSingleEvent] = useState({});
	const [events, setEvents] = useState([
		{ startDate: "2018-11-01T09:45", endDate: "2018-11-01T11:00", title: "Meeting" },
		{ startDate: "2018-11-01T12:00", endDate: "2018-11-01T13:00", title: "Go to a gym" },
		{ startDate: "2018-11-01T13:00", endDate: "2018-11-01T14:30", title: "Groceries" }
	]);
	// hook? in startDate and endDate

	// useEffect(() => {
	// 	fetch(
	// 		"https://3000-e602aabd-5ee2-4e3c-83ab-16569a08f1a5.ws-us02.gitpod.io/todos"
	// 	)
	// 		.then(function(response) {
	// 			if (!response.ok) {
	// 				throw Error(response.statusText);
	// 			}
	// 			// Read the response as json.
	// 			return response.json();
	// 		})
	// 		.then(function(responseAsJson) {
	// 			// Do stuff with the JSON
	// 			console.log("responseAsJson", responseAsJson);
	// 			setTodos(responseAsJson);
	// 		})
	// 		.catch(function(error) {
	// 			console.log("Looks like there was a problem: \n", error);
	// 		});
	// }, []);

	const handleChange = e => {
		setSingleEvent({ label: e.target.value, done: false });
	};
	const handleClick = e => {
		// 	fetch(
		// 		"https://3000-e602aabd-5ee2-4e3c-83ab-16569a08f1a5.ws-us02.gitpod.io/todos",
		// 		{
		// 			method: "POST",
		// 			body: JSON.stringify(singleTodo), // data can be `string` or {object}!
		// 			headers: {
		// 				"Content-Type": "application/json"
		// 			}
		// 		}
		// 	)
		// 		.then(res => res.json())
		// 		.then(response => setTodos(response))
		// 		.catch(error => console.error("Error", error));
		// 	setSingleTodo({ label: "" });
	};

	// const deleteTodo = id => {
	// 	fetch(
	// 		"https://3000-e602aabd-5ee2-4e3c-83ab-16569a08f1a5.ws-us02.gitpod.io/todos" +
	// 			"/" +
	// 			id,
	// 		{
	// 			method: "DELETE",
	// 			headers: {
	// 				"Content-Type": "application/json"
	// 			}
	// 		}
	// 	)
	// 		.then(function(response) {
	// 			if (!response.ok) {
	// 				throw Error(response.statusText);
	// 			}
	// 			return response.json();
	// 		})
	// 		.then(function(responseAsJson) {
	// 			console.log("responseAsJson", responseAsJson);
	// 			setTodos(responseAsJson);
	// 		})
	// 		.catch(function(error) {
	// 			console.log("Looks like there was a problem: \n", error);
	// 		});

	//filter cannot be a standalone function, it needs to be a variable example: var newTodos =
	//after filtering the function we needed to set the new todos to the updated (setTodos) so it can show the new
	//list of labels without the item we deleted
	// };
	return (
		<>
			<div className="input-container">
				<form onSubmit={e => e.preventDefault()}>
					<input type="text" name="event" value={singleEvent.title} onChange={handleChange} />

					<button onClick={handleClick}> Save </button>
				</form>
			</div>

			{events.map((event, i) => {
				return (
					<div className="event" key={i}>
						{event.title}

						<button className="btn-delete" type="button" onClick={() => deleteTodo(i)}>
							X
						</button>
					</div>
				);
			})}
		</>
	);
};
