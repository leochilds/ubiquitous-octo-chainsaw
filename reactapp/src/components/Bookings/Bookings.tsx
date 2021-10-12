import react from "react";
import { Counsellor } from "../../data/counsellor-data";
import logo from "../../assets/logo.png"
import moment from "moment";
import { TimePicker } from "./TimePicker";
interface BookingProps {
    counsellor: Counsellor,
    selectedDate: string
}
interface BookingState { }
export class Booking extends react.Component<BookingProps, BookingState> {
    constructor(props: BookingProps) {
        super(props)
    }
    counsellor = { ...this.props.counsellor }
    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-12">

                        <div className="card">
                            <div className="card-body">
                                <div className="booking-doc-info">
                                    <a href="doctor-profile.html" className="booking-doc-img">
                                        <img src={logo} alt="User Image" />
                                    </a>
                                    <div className="booking-info">
                                        <h4><a href="doctor-profile.html">{this.counsellor.firstName} {this.counsellor.lastName}</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-6">
                                <h4 className="mb-1">{moment(this.props.selectedDate).format('Do MMMM YYYY')}</h4>
                                <p className="text-muted">{moment(this.props.selectedDate).format('dddd')}</p>
                            </div>
                        </div>
                        <TimePicker counsellor={this.props.counsellor} />
                        <div className="submit-section proceed-btn text-right">
                            <a href="checkout.html" className="btn btn-primary submit-btn">Confirm Booking</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}