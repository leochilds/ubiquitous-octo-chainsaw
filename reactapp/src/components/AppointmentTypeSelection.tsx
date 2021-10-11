import react from "react";
import { CouncellorAppointmentData } from "../data/councellors";

export class AppointmentTypeSelection extends react.Component<any, any> {
    availableTypes: string[];
    constructor(props: { [key: string]: any }) {
        super(props)
        this.availableTypes = CouncellorAppointmentData.getAppointmentTypes();
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(type: string) {
        this.props.handleTypeSelection(type);
        this.props.changeSlide(2);
    }
    render() {
        const buttonStyle = {
            height: '50px',
            width: '80px'
        }
        const renderTypes = this.availableTypes.map((type: string) => {
            return <a className='w3-button w3-ripple w3-theme' style={buttonStyle} onClick={() => this.handleButtonClick(type)}>{type.replace(/_/i, '-')}</a>
        });
        return (
            <section style={{ display: this.props.display ? 'block' : 'none' }}>
                <h1>Select Type of Appointment</h1>
                <div className='w3-bar'>{renderTypes}</div>
            </section>
        )
    }
}