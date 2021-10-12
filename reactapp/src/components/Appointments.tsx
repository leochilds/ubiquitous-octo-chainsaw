import react from "react";
interface AppointmentsProps { }
export class Apppointments extends react.Component<AppointmentsProps> {
    constructor(props: AppointmentsProps) {
        super(props);
    }
    render() {
        return (
            <div id="pat_appointments" className="tab-pane fade show active">
                <div className="card card-table mb-0">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Doctor</th>
                                        <th>Appt Date</th>
                                        <th>Booking Date</th>
                                        <th>Amount</th>
                                        <th>Follow Up</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h2 className="table-avatar">
                                                <a href="doctor-profile.html" className="avatar avatar-sm mr-2">
                                                    <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                                </a>
                                                <a href="doctor-profile.html">Dr. John Moffett <span>Psychiatry</span></a>
                                            </h2>
                                        </td>
                                        <td>14 Nov 2020 <span className="d-block text-info">10.00 AM</span></td>
                                        <td>12 Nov 2020</td>
                                        <td>$160</td>
                                        <td>16 Nov 2020</td>
                                        <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                                        <td className="text-right">
                                            <div className="table-action">
                                                <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                                    <i className="fas fa-print"></i> Print
                                                </a>
                                                <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                    <i className="far fa-eye"></i> View
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}