import react from "react";
import { Apppointments } from "./Appointments";

interface PatientDashboardProps { }

export class PatientDashboard extends react.Component<PatientDashboardProps> {
    constructor(props: PatientDashboardProps) {
        super(props);
    }
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
                                    <ul>
                                        <li className="active">
                                            <a href="patient-dashboard.html">
                                                <i className="fas fa-columns"></i>
                                                <span>Appointments</span>
                                            </a>
                                        </li>
                                    </ul>
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
                                            <a className="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
                                        </li>
                                    </ul>
                                </nav>

                                <div className="tab-content pt-0">

                                    <Apppointments />


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}