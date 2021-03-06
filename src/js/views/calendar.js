import React, { useState, useContext, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import { Context } from "../store/appContext";
import {
	Scheduler,
	MonthView,
	Toolbar,
	DateNavigator,
	TodayButton,
	Appointments,
	AppointmentForm,
	AppointmentTooltip,
	ViewSwitcher,
	WeekView,
	DayView,
	EditRecurrenceMenu,
	AllDayPanel,
	ConfirmationDialog
} from "@devexpress/dx-react-scheduler-material-ui";

export const Calendar = () => {
	const [view, setView] = useState("Month");
	const [dateView, setDateView] = useState(new Date());
	const { store, actions } = useContext(Context);
	const url = "https://3000-a1007fd4-1ba0-4ea4-a40d-d94e9227503b.ws-us03.gitpod.io/";
	const [state, setState] = useState({
		data: store.appointments,
		currentDate: new Date(),
		addedAppointment: {},
		appointmentChanges: {},
		editingAppointment: undefined
	});

	// useEffect(() => {
	// 	actions.getAllTheAppointmentsFromBackend();
	// }, []);

	useEffect(() => {
		// Update the document title using the browser API
		const test = async () => {
			let getData = await fetch(`${url}appointments`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${store.token}`
				}
			});
			let response = await getData.json();
			setState({ ...state, data: response });
			// setState({ ...state, data: store.appointments });
		};
		test();
	}, []);

	function changeAddedAppointment(addedAppointment) {
		setState({ ...state, addedAppointment });
	}

	function changeAppointmentChanges(appointmentChanges) {
		setState({ ...state, appointmentChanges });
	}

	function changeEditingAppointment(editingAppointment) {
		setState({ ...state, editingAppointment });
	}

	function commitChanges({ added, changed, deleted }) {
		setState(state => {
			let { data } = state;
			if (added) {
				actions.handleAppointment("added", added);
				const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			// if (changed) {
			// 	data = data.map(
			// 		appointment =>
			// 			// changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
			// 			changed[appointment.id] && actions.handleAppointment("changed", changed, appointment.id)
			// 		// console.log("DATA: ", appointment)
			// 	);
			// 	// actions.handleAppointment("changed", changed, changed.id);
			// }
			if (deleted !== undefined) {
				actions.handleAppointment("deleted", deleted);

				data = data.filter(appointment => appointment.id !== deleted);
				console.log("deleted data", deleted);
			}
			return { ...state, data };
		});
	}

	const { currentDate, data, addedAppointment, appointmentChanges, editingAppointment, currentViewName } = state;
	return (
		<>
			{data.length > 0 && (
				<Paper>
					<Scheduler data={data} height={700}>
						<ViewState
							currentViewName={view}
							onCurrentViewNameChange={setView} //changes the current view to whatever date the user chooses
							currentDate={dateView}
							onCurrentDateChange={setDateView}
						/>
						<EditingState
							onCommitChanges={commitChanges}
							addedAppointment={addedAppointment}
							onAddedAppointmentChange={changeAddedAppointment}
							appointmentChanges={appointmentChanges}
							onAppointmentChangesChange={changeAppointmentChanges}
							editingAppointment={editingAppointment}
							onEditingAppointmentChange={changeEditingAppointment}
						/>
						<WeekView startDayHour={7} endDayHour={24} />
						<MonthView />
						<DayView />
						<AllDayPanel />
						<EditRecurrenceMenu />
						<ConfirmationDialog />
						<Appointments />
						<AppointmentTooltip showOpenButton showDeleteButton />
						<AppointmentForm />
						<Toolbar />
						<DateNavigator />
						<TodayButton />
						<ViewSwitcher />
					</Scheduler>
				</Paper>
			)}{" "}
		</>
	);
};
