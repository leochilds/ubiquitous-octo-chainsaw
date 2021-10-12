import react from "react";
import { CounsellorAppointmentData } from "../../data/councellors";
import { AppointmentRow } from "./AppointmentRow";
interface AppointmentsProps {
    counsellorAppointmentData: CounsellorAppointmentData
}
export class Apppointments extends react.Component<AppointmentsProps> {
    render() {
        const renderOneOffs = this.props.counsellorAppointmentData.appointments.filter(a => a.type === 'one_off').map(a => <AppointmentRow key={a.counsellor.id + a.datetime} appointment={a} />);
        const renderConsultations = this.props.counsellorAppointmentData.appointments.filter(a => a.type === 'consultation').map(a => <AppointmentRow key={a.counsellor.id + a.datetime} appointment={a} />);
        return (
            <div className="tab-content pt-0">
                <div id="pat_appointments_one_off" className="tab-pane fade show active">
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
                                        {renderOneOffs}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pat_appointments_consultation" className="tab-pane fade show">
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
                                        {renderConsultations}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}