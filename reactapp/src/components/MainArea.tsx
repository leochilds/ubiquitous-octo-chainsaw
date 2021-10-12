import react from "react";
import { CounsellorAppointmentData } from "../data/councellors";
import { Booking } from "./Bookings/Bookings";
import { CounsellorSearch } from "./Bookings/CounsellorSearch";
import { PatientDashboard } from "./PatientDashboard";
interface MainAreaProps {
    counsellorAppointmentData: CounsellorAppointmentData
}
interface MainAreaState {
    page: number
}
export class MainArea extends react.Component<MainAreaProps, MainAreaState> {
    pages: JSX.Element[];
    constructor(props: MainAreaProps) {
        super(props);
        this.state = {
            page: 2
        }
        this.pages = [
            <PatientDashboard />,
            <CounsellorSearch counsellorAppointmentData={this.props.counsellorAppointmentData} />,
            <Booking counsellor={this.props.counsellorAppointmentData.counsellorAvailability[0]} selectedDate="2021-08-17" />
        ]
    }
    render() {
        const renderPage = this.pages[this.state.page];
        return (
            <div className="content">

                {renderPage}

            </div>
        )
    }
}