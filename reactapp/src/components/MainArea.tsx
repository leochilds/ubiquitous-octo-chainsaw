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
    selectedCounsellor: Counsellor
}
export class MainArea extends react.Component<MainAreaProps, MainAreaState> {
    constructor(props: MainAreaProps) {
        super(props);
        this.state = {
            page: 1,
            selectedCounsellor: this.props.counsellorAppointmentData.counsellorAvailability[0]
        }
        this.handleSelectCounsellor = this.handleSelectCounsellor.bind(this);
        this.goToBookingPage = this.goToBookingPage.bind(this);

    }
    handleSelectCounsellor(counsellor: Counsellor) {
        this.setState({
            selectedCounsellor: counsellor
        }, () => {
            this.goToBookingPage();
        })

    }
    goToBookingPage() {
        this.setState({
            page: 2
        });
    }
    render() {
        return (
            <div className="content">

                {this.state.page === 0 && <PatientDashboard />}
                {this.state.page === 1 && <CounsellorSearch counsellorAppointmentData={this.props.counsellorAppointmentData} goToBookingPage={this.handleSelectCounsellor} />}
                {this.state.page === 2 && <Booking counsellor={this.state.selectedCounsellor} selectedDate="2021-08-17" />}

            </div>
        )
    }
}