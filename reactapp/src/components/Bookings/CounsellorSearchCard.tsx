import react from "react";
import { Counsellor } from "../../data/counsellor-data";
import logo from "../../assets/logo.png";

interface CounsellorSearchCardProps {
    counsellor: Counsellor
}

export class CounsellorSearchCard extends react.Component<CounsellorSearchCardProps> {
    counsellor: Counsellor;
    constructor(props: CounsellorSearchCardProps) {
        super(props)
        this.counsellor = { ...props.counsellor }
    }
    render() {
        const renderFilters = [...this.counsellor.appointment_types, ...this.counsellor.appointment_mediums, ...this.counsellor.specialisms].map((s: string) => {
            return <span style={{ marginBottom: 5, textTransform: 'capitalize' }}>{s.replace(/_/i, ' ')}</span>
        });
        return (
            <div className="card">
                <div className="card-body">
                    <div className="doctor-widget">
                        <div className="doc-info-left">
                            <div className="doctor-img">
                                <a href="#">
                                    <img src={logo} className="img-fluid" alt="User Image" />
                                </a>
                            </div>
                            <div className="doc-info-cont">
                                <h4 className="doc-name"><a href="#">{this.counsellor.firstName} {this.counsellor.lastName}</a></h4>
                                <h5 className="doc-department">Physical stress</h5>
                                <div className="clinic-services">
                                    {renderFilters}
                                </div>
                            </div>
                        </div>
                        <div className="doc-info-right">
                            <div className="clinic-booking">
                                <a className="apt-btn" href="#">Book Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}