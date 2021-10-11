import react from "react"
import { Counsellor } from "../data/counsellor-data"
import { SlideProps } from "./SlideProps"

interface BookingProps extends SlideProps {
    type: string,
    date: string,
    time: string,
    counsellor: Counsellor
}

export class BookingConfirmation extends react.Component<BookingProps> {
    constructor(props: BookingProps) {
        super(props)
    }
    render() {
        return (
            <section style={{ display: this.props.display ? 'block' : 'none' }}>
                <h2>Booking Confirmation</h2>
                <p>Appointment type: {this.props.type.replace(/_/i, '-')}</p>
                <p>Date: {this.props.date}</p>
                <p>Time: {this.props.time}</p>
                <p>Counsellor: {`${this.props.counsellor.firstName} ${this.props.counsellor.lastName}`}</p>
                <a className='w3-btn w3-red w3-left'>Go Back</a>
                <a className='w3-btn w3-green w3-right'>Confirm</a>
            </section>
        )
    }
}