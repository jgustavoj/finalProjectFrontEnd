import React, { useState, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import { Context } from "../store/appContext";
import {
	Scheduler,
	MonthView,
	Toolbar,
	// DateNavigator,
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
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		data: store.appointments,
		currentDate: "2018-06-27",

		addedAppointment: {},
		appointmentChanges: {},
		editingAppointment: undefined
	});

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
				const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
				data = [...data, { id: startingAddedId, ...added }];
			}
			if (changed) {
				data = data.map(
					appointment =>
						changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
				);
			}
			if (deleted !== undefined) {
				data = data.filter(appointment => appointment.id !== deleted);
			}
			return { ...state, data };
		});
	}

	const { currentDate, data, addedAppointment, appointmentChanges, editingAppointment, currentViewName } = state;

	return (
		<Paper>
			<Scheduler data={data} height={820}>
				<ViewState currentDate={currentDate} currentViewName={view} onCurrentViewNameChange={setView} />
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
				<Toolbar />
				{/* <DateNavigator /> */}
				<TodayButton />
				<AllDayPanel />
				<ViewSwitcher />
				<EditRecurrenceMenu />
				<ConfirmationDialog />
				<Appointments />
				<AppointmentTooltip showOpenButton showDeleteButton />
				<AppointmentForm />
			</Scheduler>
		</Paper>
	);
};
