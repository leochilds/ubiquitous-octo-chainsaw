import react from "react";
import { CounsellorSearch } from "./Bookings/CounsellorSearch";
import { PatientDashboard } from "./PatientDashboard";
interface MainAreaProps { }
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
            <CounsellorSearch />
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