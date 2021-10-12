import react from "react";
import { CounsellorAppointmentData } from "../data/councellors";
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
            page: 1
        }
        this.pages = [
            <PatientDashboard />,
            <CounsellorSearch counsellorAppointmentData={this.props.counsellorAppointmentData} />
        ]
    }
    render() {
        const renderPage = this.pages[this.state.page];
        return (
            <div className="content">
                <div className="container-fluid">

                    {renderPage}

                </div>

            </div>
        )
    }
}