import react from 'react';
import { Appointment } from '../../data/councellors';
import logo from '../../assets/logo.png';
import moment from 'moment';

interface AppointmentProps {
    appointment: Appointment
}
interface AppointmentState { }

export class AppointmentRow extends react.Component<AppointmentProps, AppointmentState> {
    constructor(props: AppointmentProps) {
        super(props)
    }
    render() {
        return (
            <tr>
                <td>
                    <h2 className="table-avatar">
                        <a href="#" className="avatar avatar-sm mr-2">
                            <img className="avatar-img rounded-circle" src={logo} alt="User Image" />
                        </a>
                        <a href="#">{this.props.appointment.counsellor.firstName} {this.props.appointment.counsellor.lastName}</a>
                    </h2>
                </td>
                <td>{moment(this.props.appointment.datetime).format("MMM Do YY")}</td>
                <td style={{ textTransform: 'capitalize' }}>{this.props.appointment.type.replace(/_/i, ' ')}</td>
                <td style={{ textTransform: 'capitalize' }}>{this.props.appointment.medium}</td>
                <td>{moment(this.props.appointment.datetime).format("hh:mm a")}</td>
                <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                <td className="text-right">
                </td>
            </tr>
        )
    }
}