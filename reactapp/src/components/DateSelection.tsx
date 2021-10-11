import react from "react";

export class DateSelection extends react.Component<any, any> {
    constructor(props: { [key: string]: any }) {
        super(props);
        this.state = {
            selectedDate: ''
        }
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleConfirmation = this.handleConfirmation.bind(this);
    }
    handleChangeDate(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            selectedDate: event.target.value
        })
    }
    handleConfirmation() {
        this.props.handleChangeDate(this.state.selectedDate);
        this.props.changeSlide(3);
    }
    render() {
        return (
            <section style={{ display: this.props.display ? 'block' : 'none' }}>
                <h1>Select date</h1>
                <input onChange={this.handleChangeDate} type='date' />
                <p>Date Selected: {this.state.selectedDate}</p>
                {this.state.selectedDate !== '' && <a onClick={this.handleConfirmation} className='w3-btn w3-green'>Confirm Selection</a>}
            </section>
        )
    }
}