import react from "react";
import { Counsellor } from "../data/counsellor-data";
import { CounsellorCard } from "./CounsellorCard";
import { SlideProps } from "./SlideProps";
import { TimeSelection } from "./TimeSelection";

interface CounsellorSelectionProps extends SlideProps {
    availableCounsellors: Counsellor[],
    availableTimes: string[],
    handleChangeTime: (time: string) => void,
    handleSelectCounsellor: (counsellor: Counsellor) => void
}

interface CounsellorSelectionState {
    availableCounsellors: Counsellor[]
}

export class CounsellorSelection extends react.Component<CounsellorSelectionProps, CounsellorSelectionState> {
    constructor(props: CounsellorSelectionProps) {
        super(props)
        this.state = {
            availableCounsellors: props.availableCounsellors
        }
        this.handleSelectCounsellor = this.handleSelectCounsellor.bind(this);
        this.filterAvailableCounsellors = this.filterAvailableCounsellors.bind(this);
    }
    handleSelectCounsellor(counsellor: Counsellor) {
        this.props.handleSelectCounsellor(counsellor)
        this.props.changeSlide(4)
    }
    filterAvailableCounsellors(specialisms: string[]) {
        this.setState({
            availableCounsellors: this.props.availableCounsellors.filter((c) => {
                return specialisms.some(s => c.specialisms.includes(s));
            })
        })
    }
    render() {
        const renderAvailableCounsellors = this.props.availableCounsellors.map((c: Counsellor) => {
            return <CounsellorCard handleSelectCounsellor={this.handleSelectCounsellor} counsellor={c} />
        });
        return (
            <section style={{ display: this.props.display ? 'block' : 'none' }}>
                <TimeSelection availableTimes={this.props.availableTimes} handleChangeTime={this.props.handleChangeTime} />
                <h1>Select Counsellor</h1>
                <div className="w3-row custom-flex">{renderAvailableCounsellors}</div>
            </section>
        )
    }
}