import moment from "moment";
import react from "react";
import { availability } from "../../data/availability-data";
import { CounsellorAppointmentData } from "../../data/councellors";
import { Counsellor, counsellors } from "../../data/counsellor-data";

interface TimePickerProps {
    counsellor: Counsellor,
    selectedDate: string,
    selectAppointment: (day: string, time: string) => void
}
interface TimePickerState {
    week: any,
    trackingDate: string,
    selectedDate: string,
    selectedTime: string
}

export class TimePicker extends react.Component<TimePickerProps, TimePickerState> {
    constructor(props: TimePickerProps) {
        super(props);
        this.state = {
            trackingDate: this.props.selectedDate,
            week: getAvailability(this.props.counsellor, this.props.selectedDate),
            selectedDate: '',
            selectedTime: ''
        }
        this.nextWeek = this.nextWeek.bind(this);
        this.lastWeek = this.lastWeek.bind(this);
        this.picktime = this.picktime.bind(this);
    }
    nextWeek() {
        const nextWeekDate = moment(this.state.trackingDate).add(1, 'weeks').format('YYYY-MM-DD');
        this.setState({
            trackingDate: nextWeekDate,
            week: getAvailability(this.props.counsellor, nextWeekDate)
        })
    }
    lastWeek() {
        const lastWeekDate = moment(this.state.trackingDate).subtract(1, 'weeks').format('YYYY-MM-DD');
        this.setState({
            trackingDate: lastWeekDate,
            week: getAvailability(this.props.counsellor, lastWeekDate)
        })

    }
    picktime(date: string, time: string) {
        this.setState({
            selectedDate: date,
            selectedTime: time
        })
        this.props.selectAppointment(date, time);
    }
    render() {
        const renderDayRow = this.state.week.map((day: { date: string, times: string[] }) => {
            return (
                <li key={day.date}>
                    <span>{moment(day.date).format('dddd').substring(0, 3)}</span>
                    <span className="slot-date">{moment(day.date).format('DD MMMM').substring(0, 6)} <small className="slot-year">{moment(day.date).format('YYYY')}</small></span>
                </li>
            )
        });
        const renderDayColumns = this.state.week.map((day: { date: string, times: string[] }) => {
            const times = day.times.map(t => <a key={t} onClick={() => this.picktime(day.date, t)} className={this.state.selectedTime === t && this.state.selectedDate === day.date ? 'selected timing' : 'timing'} href="#">
                <span>{t}</span>
            </a>)
            return (
                <li key={day.date}>
                    {times}
                </li>
            )
        })
        return (
            <div className="card booking-schedule schedule-widget">
                <div className="schedule-header">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="day-slot">
                                <ul>
                                    <li className="left-arrow">
                                        <a onClick={this.lastWeek} href="#">
                                            <i className="fa fa-chevron-left"></i>
                                        </a>
                                    </li>
                                    {renderDayRow}
                                    <li className="right-arrow">
                                        <a onClick={this.nextWeek} href="#">
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="schedule-cont">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="time-slot">
                                <ul className="clearfix">
                                    {renderDayColumns}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const getAvailability = (counsellor: Counsellor, selectedDate: string): { date: string, times: string[] }[] => {
    const today = moment(selectedDate);
    const start = today.startOf('week');
    const week = Array.from(Array(7).keys()).map(i => start.add(1, 'days').format('YYYY-MM-DD'));
    const availability = week.map(date => {
        return {
            date: date,
            times: CounsellorAppointmentData.getCounsellorAvailability(counsellor, date).map(dt => dt.substring(11, 16)).sort()
        }
    });
    return availability;
}