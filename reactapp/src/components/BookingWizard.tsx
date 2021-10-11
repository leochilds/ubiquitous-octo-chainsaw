import react from 'react';
import { CouncellorAppointmentData } from '../data/councellors';
import { Councellor } from '../data/councellor-data';

export class BookingWizard extends react.Component<any, any>{
    councellorAppointmentData: CouncellorAppointmentData;
    constructor(props: { [key: string]: any }) {
        super(props);
        this.councellorAppointmentData = new CouncellorAppointmentData();
        this.state = {
            selectedDate: '2021-08-17',
            selectedTime: '11:00',
            availableCouncellors: this.councellorAppointmentData.getAvailableCouncellors('2021-08-17', '11:00'),
            availableTimes: this.councellorAppointmentData.getAvailableAppointmentTimes('2021-08-17')
        }
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
    }
    handleChangeDate(event: { target: { value: any; }; }) {
        this.setState({
            selectedDate: event.target.value,
            availableTimes: this.councellorAppointmentData.getAvailableAppointmentTimes(event.target.value)
        });
    }
    handleChangeTime(time: string) {
        this.setState({
            selectedTime: time,
            availableCouncellors: this.councellorAppointmentData.getAvailableCouncellors(this.state.selectedDate, time),
        })
    }
    render() {
        const renderAvailableCouncellors = this.state.availableCouncellors.map((c: Councellor) => {
            return <li>{c.firstName} {c.lastName}</li>
        });
        const renderAvailableTimes = this.state.availableTimes.map((time: string) => {
            return <a className='w3-btn' onClick={() => this.handleChangeTime(time)}>{time}</a>
        })
        return (
            <form className="w3-container">
                <section>
                    <h1>Disclaimer</h1>
                    <p>This is not a crisis service</p>
                </section>
                <section>
                    <h1>Select Type of Appointment</h1>

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