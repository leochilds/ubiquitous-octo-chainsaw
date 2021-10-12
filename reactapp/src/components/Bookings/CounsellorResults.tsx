import react from "react";
import { Counsellor } from "../../data/counsellor-data";
import { CounsellorSearchCard } from "./CounsellorSearchCard";
interface CounsellorResultsProps {
    counsellorList: Counsellor[],
    goToBookingPage: (counsellor: Counsellor) => void
}
interface CounsellorResultsState {
}
export class CounsellorResults extends react.Component<CounsellorResultsProps, CounsellorResultsState> {
    render() {
        const renderCounsellors = this.props.counsellorList.map(c => <CounsellorSearchCard goToBookingPage={this.props.goToBookingPage} key={c.id} counsellor={c} />)
        return (
            <div className="col-md-12 col-lg-8 col-xl-9">
                {renderCounsellors.length ? renderCounsellors : <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    No counsellors where found with your selected parameters
                </div>}
            </div>
        )
    }
}