import react from "react";
import { Councellor } from "../data/councellor-data";
import { TimeSelection } from "./TimeSelection";

export class CounsellorSelection extends react.Component<any, any> {
    constructor(props: { [key: string]: any }) {
        super(props)
    }
    render() {
        const renderAvailableCouncellors = this.props.availableCouncellors.map((c: Councellor) => {
            return <li>{c.firstName} {c.lastName}</li>
        });
        return (
            <section style={{ display: this.props.display ? 'block' : 'none' }}>
                <TimeSelection availableTimes={this.props.availableTimes} handleChangeTime={this.props.handleChangeTime} />
                <h1>Select Counsellor</h1>
                <ul>{renderAvailableCouncellors}</ul>
            </section>
        )
    }
}