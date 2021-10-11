import react from "react";

interface TimeSelectionProps {
    handleChangeTime: (time: string) => void,
    availableTimes: string[]
}

interface TimeSelectionState {
    availableTimes: string[]
}

export class TimeSelection extends react.Component<TimeSelectionProps, TimeSelectionState> {
    constructor(props: TimeSelectionProps) {
        super(props)
        this.state = {
            availableTimes: props.availableTimes
        }
        this.handleChangeTime = this.handleChangeTime.bind(this);
    }
    handleChangeTime(time: string) {
        this.props.handleChangeTime(time);
    }
    render() {
        const renderAvailableTimes = this.state.availableTimes.map((time: string) => {
            return <a className='w3-btn w3-round-xxlarge w3-theme' onClick={() => this.handleChangeTime(time)}>{time}</a>
        });
        return (
            <section>
                <h1>Select Appointment Time</h1>
                {renderAvailableTimes}
            </section>
        )
    }
}