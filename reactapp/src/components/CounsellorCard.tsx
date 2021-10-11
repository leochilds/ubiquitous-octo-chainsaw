import React from "react";
import { Counsellor } from "../data/counsellor-data";
import Avatar from '../assets/people-40.png'

interface CounsellorProps {
    counsellor: Counsellor,
    handleSelectCounsellor: (counsellor: Counsellor) => void
}

export class CounsellorCard extends React.Component<CounsellorProps> {
    constructor(props: CounsellorProps) {
        super(props)
        this.handleSelectCounsellor = this.handleSelectCounsellor.bind(this);
    }
    handleSelectCounsellor() {
        this.props.handleSelectCounsellor(this.props.counsellor)
    }
    render() {
        const tagStyle = {
            margin: 5
        }
        const avatarStyle = {
            height: 150
        }
        const renderMediums = this.props.counsellor.appointment_mediums.map(m => <span style={tagStyle} className="w3-tag w3-round-large">{m}</span>);
        const renderSpecialisms = this.props.counsellor.specialisms.map(s => <span style={tagStyle} className="w3-tag w3-round-large">{s}</span>)
        return (
            <div className="w3-col s12 m4 w3-margin-bottom w3-border">
                <div className="w3-card-4" style={{ minHeight: "100%" }}>

                    <header className="w3-container w3-light-grey">
                        <h3>{this.props.counsellor.firstName} {this.props.counsellor.lastName}</h3>
                    </header>

                    <div className="w3-container" style={{ display: "block", minHeight: "300px" }}>
                        <h4>Appointment Mediums: {renderMediums}</h4>
                        <hr />
                        <img style={avatarStyle} src={Avatar} alt="Avatar" className="w3-left w3-circle" />
                        <h4>Specialisms</h4>
                        <p>{renderSpecialisms}</p>
                    </div>

                    <a className="w3-button w3-block w3-dark-grey">Select</a>

                </div>
            </ div>
        )
    }
}