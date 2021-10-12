import react from "react";
import { Counsellor } from "../../data/counsellor-data";
import { CounsellorSearchCard } from "./CounsellorSearchCard";
interface CounsellorResultsProps {
    counsellorList: Counsellor[]
}
interface CounsellorResultsState {
}
export class CounsellorResults extends react.Component<CounsellorResultsProps, CounsellorResultsState> {
    constructor(props: CounsellorResultsProps) {
        super(props)
    }
    render() {
        const renderCounsellors = this.props.counsellorList.map(c => <CounsellorSearchCard key={c.id} counsellor={c} />)
        return (
            <div className="col-md-12 col-lg-8 col-xl-9">
                {renderCounsellors}
            </div>
        )
    }
}