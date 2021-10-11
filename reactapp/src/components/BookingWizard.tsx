import react from 'react';
import { CounsellorAppointmentData } from '../data/counsellors';
import { Counsellor } from '../data/counsellor-data';
import { DisclaimerSection } from './DisclaimerSection';
import { AppointmentTypeSelection } from './AppointmentTypeSelection';
import { DateSelection } from './DateSelection';
import { CounsellorSelection } from './CounsellorSelection';
import { BookingConfirmation } from './BookingConfirmation';

export class BookingWizard extends react.Component<any, any>{
    counsellorAppointmentData: CounsellorAppointmentData;
    constructor(props: { [key: string]: any }) {
        super(props);
        this.counsellorAppointmentData = new CounsellorAppointmentData();
        this.state = {
            slide: 0,
            selectedDate: '',
            selectedTime: '',
            selectedType: '',
            availableCounsellors: [],
            availableTimes: [],
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
            availableTimes: this.counsellorAppointmentData.getAvailableAppointmentTimes(this.state.selectedType, date)
        });
    }
    handleChangeTime(time: string) {
        this.setState({
            selectedTime: time,
            availableCounsellors: this.counsellorAppointmentData.getAvailableCounsellors(this.state.selectedType, this.state.selectedDate, time),
        })
    }
    handleTypeSelection(type: string) {
        this.setState({
            selectedType: type
        })
    }
    handleSelectCounsellor(counsellor: Counsellor) {
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
                        availableCounsellors={this.state.availableCounsellors}
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
                    changeSlide={this.changeSlide}
                />
            </div>
        )
    }
}




