import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Paper from "@material-ui/core/Paper";
//import Radio from '@material-ui/core/Radio';
//import RadioGroup from '@material-ui/core/RadioGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ViewState } from "@devexpress/dx-react-scheduler";

import {
	Scheduler,
	ViewSwitcher,
	DayView,
	WeekView,
	MonthView,
	Toolbar,
	DateNavigator,
	Appointments,
	TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";
//import { appointments } from "../../../demo-data/month-appointments";

import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export const Events = () => {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [title, setTitle] = useState("");
	const [time, setTime] = useState("");
	const currentDate = new Date();

	const [state, setState] = useState({
		title: "",
		date: "",
		time: "",
		dayOf: false,
		dayPrior: false,
		twoDaysPrior: false,
		weekPrior: false,
		twoWeekPrior: false
	});

	const [singleEvent, setSingleEvent] = useState();
	const [events, setEvents] = useState([
		// { startDate: "2018-11-01T09:45", endDate: "2018-11-01T11:00", title: "Meeting" },
		// { startDate: "2018-11-01T12:00", endDate: "2018-11-01T13:00", title: "Go to a gym" },
		// { startDate: "2018-11-01T13:00", endDate: "2018-11-01T14:30", title: "Groceries" },
		// { startDate: "2018-11-01T15:00", endDate: "2018-11-01T15:30", title: "Run" }
	]);

	const handleChange = e => {
		setSingleEvent(e.target.value);
	};
	const handleClick = e => {
		const newEvent = {
			title: title,
			time: time,
			startDate: startDate,
			notifications: {
				dayOf: false,
				dayPrior: false,
				twoDaysPrior: false,
				weekPrior: false,
				twoWeekPrior: false
			}
		};
		setEvents([...events, newEvent]);
	};

	return (
		<>
			<div className="input-container">
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Title
						</span>
					</div>
					<input
						onChange={e => setTitle(e.target.value)}
						type="text"
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Date
						</span>
					</div>
					<input
						onChange={e => setStartDate(e.target.value)}
						type="text"
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Time
						</span>
					</div>
					<input
						onChange={e => setTime(e.target.value)}
						type="text"
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Day Of
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Day Prior
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Two Days Prior
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Week Prior
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
					<div className="input-group-prepend ml-2">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Two Weeks Prior
						</span>
					</div>
					<div className="input-group-text">
						<input type="checkbox" aria-label="Checkbox for following text input" />
					</div>
				</div>
				<button className="btn btn-lg btn-primary px-5" onClick={handleClick}>
					Add
				</button>
				<button className="btn btn-lg btn-primary px-5" onClick={handleClick}>
					Submit
				</button>
			</div>

			{/* <div className="input-container">
				<DatePicker selected={startDate} onChange={date => setStartDate(date)} />
				<DatePicker selected={endDate} onChange={date => setEndDate(date)} />
				<form onSubmit={e => e.preventDefault()}>
					<input type="text" name="event" value={singleEvent} onChange={handleChange} />
					<button onClick={handleClick}> Save </button>
				</form>
			</div> */}

			{events.map((event, i) => {
				return (
					<div className="event" key={i}>
						{event.title}, {event.startDate}, {event.time},
						<button className="btn-delete" type="button" onClick={() => deleteTodo(i)}>
							X
						</button>
					</div>
				);
			})}
		</>
	);
};
