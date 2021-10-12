import react from "react";
import { Appointment, CounsellorAppointmentData } from "../data/councellors";
import { Counsellor, counsellors } from "../data/counsellor-data";
import { Booking } from "./Bookings/Bookings";
import { Confirmed } from "./Bookings/Confirmed";
import { CounsellorSearch } from "./Bookings/CounsellorSearch";
import { PatientDashboard } from "./PatientDashboard";
interface MainAreaProps {
    counsellorAppointmentData: CounsellorAppointmentData
}
interface MainAreaState {
    page: number,
    selectedCounsellor: Counsellor | null,
    selectedDate: string,
    lastBooking: Appointment | null
}
export class MainArea extends react.Component<MainAreaProps, MainAreaState> {
    constructor(props: MainAreaProps) {
        super(props);
        this.state = {
            page: 1,
            selectedCounsellor: null,
            selectedDate: '2021-08-17',
            lastBooking: null
        }
        this.goToBookingPage = this.goToBookingPage.bind(this);
        this.goToConfirmedPage = this.goToConfirmedPage.bind(this);

    }
    goToBookingPage(counsellor: Counsellor, date: string) {
        this.setState({
            selectedCounsellor: counsellor,
            page: 2,
            selectedDate: date
        })
    }
    goToConfirmedPage(appointment: Appointment) {
        this.setState({
            page: 3,
            lastBooking: appointment
        })
    }
    render() {
        return (
            <div className="content">
                {this.state.page === 0 && <PatientDashboard />}
                {this.state.page === 1 && <CounsellorSearch counsellorAppointmentData={this.props.counsellorAppointmentData} goToBookingPage={this.goToBookingPage} />}
                {this.state.page === 2 && <Booking counsellorAppointmentData={this.props.counsellorAppointmentData} goToConfirmedPage={this.goToConfirmedPage} counsellor={this.state.selectedCounsellor!} selectedDate={this.state.selectedDate} />}
                {this.state.page === 3 && <Confirmed lastBooking={this.state.lastBooking!} />}
            </div>
        )
    }
}