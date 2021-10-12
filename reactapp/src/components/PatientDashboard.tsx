import react from "react";
import { CounsellorAppointmentData } from "../data/councellors";
import { Apppointments } from "./Appointments/Appointments";

interface PatientDashboardProps {
    counsellorAppointmentData: CounsellorAppointmentData
}

export class PatientDashboard extends react.Component<PatientDashboardProps> {
    render() {
        return (
            <div className='container-fluid'>
                <div className="row">

                    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                        <div className="profile-sidebar">
                            <div className="widget-profile pro-widget-content">
                                <div className="profile-info-widget">
                                    <div className="profile-det-info">
                                        <h3>Alex Smith</h3>
                                        <div className="patient-details">
                                            <h5><i className="fas fa-birthday-cake"></i> 02 Aug 1993, 28 years</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-widget">
                                <nav className="dashboard-menu">
                                </nav>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-7 col-lg-8 col-xl-9">
                        <div className="card">
                            <div className="card-body pt-0">

                                <nav className="user-tabs mb-4">
                                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#pat_appointments_one_off" data-toggle="tab">One Off</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#pat_appointments_consultation" data-toggle="tab">Consultations</a>
                                        </li>
                                    </ul>
                                </nav>
                                <Apppointments counsellorAppointmentData={this.props.counsellorAppointmentData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}