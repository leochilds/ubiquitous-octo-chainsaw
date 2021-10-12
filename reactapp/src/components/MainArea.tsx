import react from "react";
import { Appointment, CounsellorAppointmentData } from "../data/councellors";
import { Counsellor } from "../data/counsellor-data";
import { Booking } from "./Bookings/Bookings";
import { Confirmed } from "./Bookings/Confirmed";
import { CounsellorSearch } from "./Bookings/CounsellorSearch";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PatientDashboard } from "./PatientDashboard";
import { TopHeader } from "./TopHeader";
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
        this.goToAppointmentsPage = this.goToAppointmentsPage.bind(this);
        this.goToCounsellorSearchPage = this.goToCounsellorSearchPage.bind(this);
        this.goToBookingPage = this.goToBookingPage.bind(this);
        this.goToConfirmedPage = this.goToConfirmedPage.bind(this);

    }
    goToAppointmentsPage() {
        this.setState({
            page: 0
        })
    }
    goToCounsellorSearchPage() {
        this.setState({
            page: 1
        })
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
            <div className="main-wrapper">
                <TopHeader />
                <Header goToAppointmentsPage={this.goToAppointmentsPage} goToCounsellorSearchPage={this.goToCounsellorSearchPage} />
                <div className="content">
                    {this.state.page === 0 && <PatientDashboard counsellorAppointmentData={this.props.counsellorAppointmentData} />}
                    {this.state.page === 1 && <CounsellorSearch counsellorAppointmentData={this.props.counsellorAppointmentData} goToBookingPage={this.goToBookingPage} />}
                    {this.state.page === 2 && <Booking counsellorAppointmentData={this.props.counsellorAppointmentData} goToConfirmedPage={this.goToConfirmedPage} counsellor={this.state.selectedCounsellor!} selectedDate={this.state.selectedDate} />}
                    {this.state.page === 3 && <Confirmed goToAppointments={this.goToAppointmentsPage} lastBooking={this.state.lastBooking!} />}
                </div>
                <Footer goToAppointmentsPage={this.goToAppointmentsPage} goToCounsellorSearchPage={this.goToCounsellorSearchPage} />
            </div>
        )
    }
}