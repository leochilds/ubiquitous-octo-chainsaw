import react from "react";
import { Counsellor } from "../data/counsellor-data";
import { SlideProps } from "./SlideProps";
import { TimeSelection } from "./TimeSelection";

interface CounsellorSelectionProps extends SlideProps {
    availableCounsellors: Counsellor[],
    availableTimes: string[],
    handleChangeTime: (time: string) => void,
    handleSelectCounsellor: (counsellor: Counsellor) => void
}

export class CounsellorSelection extends react.Component<CounsellorSelectionProps> {
    constructor(props: CounsellorSelectionProps) {
        super(props)
        this.handleSelectCounsellor = this.handleSelectCounsellor.bind(this);
    }
    handleSelectCounsellor(counsellor: Counsellor) {
        this.props.handleSelectCounsellor(counsellor)
        this.props.changeSlide(4)
    }
    render() {
        const renderAvailableCounsellors = this.props.availableCounsellors.map((c: Counsellor) => {
            return <li onClick={() => this.handleSelectCounsellor(c)}>{c.firstName} {c.lastName}</li>
        });
        return (
            <section style={{ display: this.props.display ? 'block' : 'none' }}>
                <TimeSelection availableTimes={this.props.availableTimes} handleChangeTime={this.props.handleChangeTime} />
                <h1>Select Counsellor</h1>
                <ul>{renderAvailableCounsellors}</ul>
            </section>
        )
    }
}