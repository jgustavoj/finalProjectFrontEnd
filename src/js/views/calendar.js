import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
	Scheduler,
	MonthView,
	Toolbar,
	// DateNavigator,
	// TodayButton,
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
import { appointments } from "../store/appointments";

export class Calendar extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: appointments,
			currentDate: "2018-06-27",

			addedAppointment: {},
			appointmentChanges: {},
			editingAppointment: undefined
		};

		this.commitChanges = this.commitChanges.bind(this);
		this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
		this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
		this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
	}

	changeAddedAppointment(addedAppointment) {
		this.setState({ addedAppointment });
	}

	changeAppointmentChanges(appointmentChanges) {
		this.setState({ appointmentChanges });
	}

	changeEditingAppointment(editingAppointment) {
		this.setState({ editingAppointment });
	}

	commitChanges({ added, changed, deleted }) {
		this.setState(state => {
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
			return { data };
		});
	}

	render() {
		const {
			currentDate,
			data,
			addedAppointment,
			appointmentChanges,
			editingAppointment,
			currentViewName
		} = this.state;

		return (
			<Paper>
				<Scheduler data={data} height={820}>
					<ViewState currentDate={currentDate} />
					<EditingState
						onCommitChanges={this.commitChanges}
						addedAppointment={addedAppointment}
						onAddedAppointmentChange={this.changeAddedAppointment}
						appointmentChanges={appointmentChanges}
						onAppointmentChangesChange={this.changeAppointmentChanges}
						editingAppointment={editingAppointment}
						onEditingAppointmentChange={this.changeEditingAppointment}
					/>
					<WeekView startDayHour={9} endDayHour={17} />
					{/* <MonthView />
                    <DayView /> */}
					{/* <Toolbar /> */}
					{/* <DateNavigator /> */}
					{/* <TodayButton /> */}
					<AllDayPanel />
					<EditRecurrenceMenu />
					<ConfirmationDialog />
					<Appointments />
					<AppointmentTooltip showOpenButton showDeleteButton />
					<AppointmentForm />
				</Scheduler>
			</Paper>
		);
	}
}

// date navigation imports
// MonthView,
// Toolbar,
// DateNavigator,
// TodayButton,
