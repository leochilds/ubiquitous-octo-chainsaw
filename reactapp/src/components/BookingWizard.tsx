import react from 'react';
import { CouncellorAppointmentData } from '../data/councellors';
import { Councellor } from '../data/councellor-data';
import { DisclaimerSection } from './DisclaimerSection';
import { AppointmentTypeSelection } from './AppointmentTypeSelection';
import { DateSelection } from './DateSelection';
import { CounsellorSelection } from './CounsellorSelection';
import { BookingConfirmation } from './BookingConfirmation';

export class BookingWizard extends react.Component<any, any>{
    councellorAppointmentData: CouncellorAppointmentData;
    constructor(props: { [key: string]: any }) {
        super(props);
        this.councellorAppointmentData = new CouncellorAppointmentData();
        this.state = {
            slide: 0,
            selectedDate: '2021-08-17',
            selectedTime: '11:00',
            selectedType: 'one_off',
            availableCouncellors: this.councellorAppointmentData.getAvailableCouncellors('one_off', '2021-08-17', '11:00'),
            availableTimes: this.councellorAppointmentData.getAvailableAppointmentTimes('one_off', '2021-08-17'),
            selectedCounsellor: {}
        }
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleTypeSelection = this.handleTypeSelection.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
        this.handleSelectCounsellor = this.handleSelectCounsellor.bind(this);
    }
    changeSlide(slide: number) {
        this.setState({
            slide: slide
        })
    }
    handleChangeDate(date: string) {
        this.setState({
            selectedDate: date,
            availableTimes: this.councellorAppointmentData.getAvailableAppointmentTimes(this.state.selectedType, date)
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
    handleSelectCounsellor(counsellor: Councellor) {
        this.setState({
            selectedCounsellor: counsellor
        })
    }
    render() {
        return (
            <div>
                <form className="w3-container">
                    <DisclaimerSection display={this.state.slide === 0} changeSlide={this.changeSlide} />
                    <AppointmentTypeSelection display={this.state.slide === 1} handleTypeSelection={this.handleTypeSelection} changeSlide={this.changeSlide} />
                    <DateSelection display={this.state.slide === 2} handleChangeDate={this.handleChangeDate} changeSlide={this.changeSlide} />
                    <CounsellorSelection
                        display={this.state.slide === 3}
                        availableCouncellors={this.state.availableCouncellors}
                        changeSlide={this.changeSlide} availableTimes={this.state.availableTimes}
                        handleChangeTime={this.handleChangeTime}
                        handleSelectCounsellor={this.handleSelectCounsellor}
                    />
                </form>
                <BookingConfirmation
                    display={this.state.slide === 4}
                    type={this.state.selectedType}
                    date={this.state.selectedDate}
                    time={this.state.selectedTime}
                    counsellor={this.state.selectedCounsellor}
                />
            </div>
        )
    }
}




