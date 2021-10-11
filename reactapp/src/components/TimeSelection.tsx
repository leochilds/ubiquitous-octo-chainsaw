import react from "react";

export class TimeSelection extends react.Component<any, any> {
    constructor(props: { [key: string]: any }) {
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