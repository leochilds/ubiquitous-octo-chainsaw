import react from 'react';
import { CouncellorAppointmentData } from '../data/councellors';
import { Councellor } from '../data/councellor-data';

export class BookingWizard extends react.Component<any, any>{
    councellorAppointmentData: CouncellorAppointmentData;
    availableTypes: string[];
    constructor(props: { [key: string]: any }) {
        super(props);
        this.councellorAppointmentData = new CouncellorAppointmentData();
        this.availableTypes = CouncellorAppointmentData.getAppointmentTypes();
        this.state = {
            slide: 0,
            selectedDate: '2021-08-17',
            selectedTime: '11:00',
            selectedType: 'one_off',
            availableCouncellors: this.councellorAppointmentData.getAvailableCouncellors('one_off', '2021-08-17', '11:00'),
            availableTimes: this.councellorAppointmentData.getAvailableAppointmentTimes('one_off', '2021-08-17')
        }
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
    }
    changeSlide(slide: number) {
        this.setState({
            slide: slide
        })
    }
    handleChangeDate(event: { target: { value: any; }; }) {
        this.setState({
            selectedDate: event.target.value,
            availableTimes: this.councellorAppointmentData.getAvailableAppointmentTimes(this.state.selectedType, event.target.value)
        });
    }
    handleChangeTime(time: string) {
        this.setState({
            selectedTime: time,
            availableCouncellors: this.councellorAppointmentData.getAvailableCouncellors(this.state.selectedType, this.state.selectedDate, time),
        })
    }
    handleTypeSelection(type: string) {
        this.setState({
            selectedType: type
        })
    }
    render() {
        const renderAvailableCouncellors = this.state.availableCouncellors.map((c: Councellor) => {
            return <li>{c.firstName} {c.lastName}</li>
        });
        const renderAvailableTimes = this.state.availableTimes.map((time: string) => {
            return <a className='w3-btn' onClick={() => this.handleChangeTime(time)}>{time}</a>
        });
        const renderTypes = this.availableTypes.map((type: string) => {
            return <a className='w3-btn' onClick={() => this.handleTypeSelection(type)}>{type.replace(/_/i, '-')}</a>
        })
        return (
            <form className="w3-container">
                <DisclaimerSection display={this.state.slide === 0} changeSlide={this.changeSlide} />
                <section>
                    <h1>Select Type of Appointment</h1>
                    {renderTypes}
                </section>
                <section>
                    <h1>Select date</h1>
                    <input onChange={this.handleChangeDate} type='date' />
                </section>
                <section>
                    <h1>Select Appointment Time</h1>
                    {renderAvailableTimes}
                </section>
                <section>
                    <h1>Select Counsellor</h1>
                    <ul>{renderAvailableCouncellors}</ul>
                </section>
            </form>
        )
    }
}

class DisclaimerSection extends react.Component<any, any> {
    constructor(props: { [key: string]: any }) {
        super(props);
        this.state = {
            checked: false
        }
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleCheckBox() {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleClick() {
        this.props.changeSlide(1);
    }
    render() {
        return (
            <section style={{ display: this.props.display ? 'block' : 'none' }}>
                <h2>Disclaimer - Spill is not a crisis service</h2>
                <p>We are not an immediate crisis service and we don't employ staff to be on call. We're also not a medical service. If you think you're having an emotional crisis, please call the NHS 111 for non-emergency advice. If you think you might harm yourself or someone else, please call the Samaritans on 116 123, ring 999, or go straight to A&E.</p>
                <label htmlFor='disclaimer-check'>I understand the statement above</label>
                <input id='disclaimer-check' name='disclaimer-check' type='checkbox' className='w3-check' checked={this.state.checked}
                    onChange={this.handleCheckBox} />
                <br />
                <a onClick={this.handleClick} className={`w3-btn w3-green ${!this.state.checked && 'w3-disabled'}`}>Continue with booking</a>
            </section>
        )
    }
}