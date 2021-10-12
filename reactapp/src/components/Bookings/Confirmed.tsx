import moment from "moment";
import react from "react";
import { Appointment } from "../../data/councellors";

interface ConfirmedProps {
    lastBooking: Appointment
    goToAppointments: () => void
}
interface ConfirmedState {

}
export class Confirmed extends react.Component<ConfirmedProps, ConfirmedState> {
    constructor(props: ConfirmedProps) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">

                <div className="row justify-content-center">
                    <div className="col-lg-6">

                        <div className="card success-card">
                            <div className="card-body">
                                <div className="success-cont">
                                    <i className="fas fa-check"></i>
                                    <h3>Appointment booked Successfully!</h3>
                                    <p><span style={{ textTransform: 'capitalize' }}>{this.props.lastBooking.type.replace(/_/i, ' ')}</span> appointment via {this.props.lastBooking.medium} booked with <strong>{this.props.lastBooking.counsellor.firstName} {this.props.lastBooking.counsellor.lastName}</strong><br /> on <strong>{moment(this.props.lastBooking.datetime).format('MMMM Do YYYY, h:mm a')}</strong></p>
                                    <a onClick={this.props.goToAppointments} href="#" className="btn btn-primary view-inv-btn">View Appointments</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}