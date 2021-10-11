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
            selectedDate: '2021-08-17',
            selectedTime: '11:00',
            selectedType: 'one_off',
            availableCouncellors: this.councellorAppointmentData.getAvailableCouncellors('one_off', '2021-08-17', '11:00'),
            availableTimes: this.councellorAppointmentData.getAvailableAppointmentTimes('one_off', '2021-08-17')
        }
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
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
                <section>
                    <h1>Disclaimer</h1>
                    <p>This is not a crisis service</p>
                </section>
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