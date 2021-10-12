import react from "react";
import { CounsellorAppointmentData } from "../data/councellors";
import { Counsellor, counsellors } from "../data/counsellor-data";
import { Booking } from "./Bookings/Bookings";
import { CounsellorSearch } from "./Bookings/CounsellorSearch";
import { PatientDashboard } from "./PatientDashboard";
interface MainAreaProps {
    counsellorAppointmentData: CounsellorAppointmentData
}
interface MainAreaState {
    page: number,
    selectedCounsellor: Counsellor,
    selectedDate: string
}
export class MainArea extends react.Component<MainAreaProps, MainAreaState> {
    constructor(props: MainAreaProps) {
        super(props);
        this.state = {
            page: 1,
            selectedCounsellor: this.props.counsellorAppointmentData.counsellorAvailability[0],
            selectedDate: '2021-08-17'
        }
        this.goToBookingPage = this.goToBookingPage.bind(this);

    }
    goToBookingPage(counsellor: Counsellor, date: string) {
        this.setState({
            selectedCounsellor: counsellor,
            page: 2,
            selectedDate: date
        })
    }
    render() {
        return (
            <div className="content">

                {this.state.page === 0 && <PatientDashboard />}
                {this.state.page === 1 && <CounsellorSearch counsellorAppointmentData={this.props.counsellorAppointmentData} goToBookingPage={this.goToBookingPage} />}
                {this.state.page === 2 && <Booking counsellor={this.state.selectedCounsellor} selectedDate={this.state.selectedDate} />}

            </div>
        )
    }
}