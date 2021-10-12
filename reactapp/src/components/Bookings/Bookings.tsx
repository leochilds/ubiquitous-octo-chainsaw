/* eslint-disable jsx-a11y/anchor-is-valid */
import react from "react";
import { Counsellor } from "../../data/counsellor-data";
import logo from "../../assets/logo.png"
import moment from "moment";
import { TimePicker } from "./TimePicker";
import { Appointment, CounsellorAppointmentData } from "../../data/councellors";
interface BookingProps {
    counsellor: Counsellor,
    selectedDate: string,
    counsellorAppointmentData: CounsellorAppointmentData,
    goToConfirmedPage: (appointment: Appointment) => void
}
interface BookingState {
    selectedDate: string,
    selectedTime: { datetime: string, id: string },
    selectedType: string,
    selectedMedium: string
}
export class Booking extends react.Component<BookingProps, BookingState> {
    constructor(props: BookingProps) {
        super(props)
        this.state = {
            selectedDate: this.props.selectedDate,
            selectedTime: { datetime: '', id: '' },
            selectedType: this.props.counsellor.appointment_types[0],
            selectedMedium: this.props.counsellor.appointment_mediums[0]
        }
        this.selectAppointment = this.selectAppointment.bind(this);
        this.handleSelectMedium = this.handleSelectMedium.bind(this);
        this.handleSelectType = this.handleSelectType.bind(this);
        this.confirmBooking = this.confirmBooking.bind(this);
    }
    selectAppointment(day: string, time: { datetime: string, id: string }) {
        this.setState({
            selectedDate: day,
            selectedTime: time
        })
    }
    handleSelectType(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            selectedType: event.target.value
        })
    }
    handleSelectMedium(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            selectedMedium: event.target.value
        })
    }
    confirmBooking() {
        const booking = this.props.counsellorAppointmentData.bookAppointment(this.props.counsellor.id, this.state.selectedTime.id, this.state.selectedType, this.state.selectedMedium);
        this.props.goToConfirmedPage(booking);
    }
    render() {
        const optionStyle: react.CSSProperties = { textTransform: 'capitalize' };
        return (
            <div className="container">

                <div className="row">
                    <div className="col-12">

                        <div className="card">
                            <div className="card-body">
                                <div className="booking-doc-info">
                                    <a href="doctor-profile.html" className="booking-doc-img">
                                        <img src={logo} alt="Spill logo in place of counsellor" />
                                    </a>
                                    <div className="booking-info">
                                        <h4><a href="doctor-profile.html">{this.props.counsellor.firstName} {this.props.counsellor.lastName}</a></h4>
                                        <div className="row">
                                            <div className="col-6">
                                                <label>Type</label>
                                                <select value={this.state.selectedType} onChange={this.handleSelectType} className="form-control">
                                                    {this.props.counsellor.appointment_types.map(t => <option value={t} style={optionStyle} key={t}>{t.replace(/_/i, ' ')}</option>)}
                                                </select>
                                            </div>
                                            <div className="col-6"><label>Medium</label>
                                                <select value={this.state.selectedMedium} onChange={this.handleSelectMedium} className="form-control" style={optionStyle}>
                                                    {this.props.counsellor.appointment_mediums.map(m => <option value={m} style={optionStyle} key={m}>{m}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-6">
                                <h4 className="mb-1">{moment(this.state.selectedDate).format('Do MMMM YYYY')} {this.state.selectedTime.datetime.substring(11, 16)}</h4>
                                <p className="text-muted">{moment(this.state.selectedDate).format('dddd')}</p>
                            </div>
                        </div>
                        <TimePicker selectAppointment={this.selectAppointment} counsellor={this.props.counsellor} selectedDate='2021-08-17' />
                        <div className="submit-section proceed-btn text-right">
                            <a onClick={this.confirmBooking} href="#" className="btn btn-primary submit-btn">Confirm Booking</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}