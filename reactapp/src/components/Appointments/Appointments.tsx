import react from "react";
import { CounsellorAppointmentData } from "../../data/councellors";
import { AppointmentRow } from "./AppointmentRow";
interface AppointmentsProps {
    counsellorAppointmentData: CounsellorAppointmentData
}
export class Apppointments extends react.Component<AppointmentsProps> {
    render() {
        const renderAppointments = this.props.counsellorAppointmentData.appointments.map(a => <AppointmentRow key={a.counsellor.id + a.datetime} appointment={a} />);
        return (
            <div id="pat_appointments" className="tab-pane fade show active">
                <div className="card card-table mb-0">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Counsellor</th>
                                        <th>Appt Date</th>
                                        <th>Type</th>
                                        <th>Medium</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderAppointments}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}