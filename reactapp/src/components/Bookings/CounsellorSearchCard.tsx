/* eslint-disable jsx-a11y/anchor-is-valid */
import react from "react";
import { Counsellor } from "../../data/counsellor-data";
import logo from "../../assets/logo.png";

interface CounsellorSearchCardProps {
    counsellor: Counsellor,
    goToBookingPage: (counsellor: Counsellor) => void
}
interface CounsellorSearchCardState {
    counsellor: Counsellor
}
export class CounsellorSearchCard extends react.Component<CounsellorSearchCardProps, CounsellorSearchCardState> {
    constructor(props: CounsellorSearchCardProps) {
        super(props)
        this.state = {
            counsellor: this.props.counsellor
        }
        this.bookCounsellor = this.bookCounsellor.bind(this);
    }
    bookCounsellor() {
        this.props.goToBookingPage(this.state.counsellor)
    }
    render() {
        const renderFilters = [...this.props.counsellor.appointment_types, ...this.props.counsellor.appointment_mediums, ...this.props.counsellor.specialisms].map((s: string) => {
            return <span key={s} style={{ marginBottom: 5, textTransform: 'capitalize' }}>{s.replace(/_/i, ' ')}</span>
        });
        return (
            <div className="card">
                <div className="card-body">
                    <div className="doctor-widget">
                        <div className="doc-info-left">
                            <div className="doctor-img">
                                <a href="#">
                                    <img src={logo} className="img-fluid" alt="Spill logo in place of counsellor" />
                                </a>
                            </div>
                            <div className="doc-info-cont">
                                <h4 className="doc-name"><a href="#">{this.props.counsellor.firstName} {this.props.counsellor.lastName}</a></h4>
                                <div className="clinic-services">
                                    {renderFilters}
                                </div>
                            </div>
                        </div>
                        <div className="doc-info-right">
                            <div className="clinic-booking">
                                <a onClick={this.bookCounsellor} className="apt-btn" href="#">Book Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}