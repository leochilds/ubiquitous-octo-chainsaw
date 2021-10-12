import react from "react";

export class Confirmed extends react.Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row justify-content-center">
                    <div className="col-lg-6">

                        <div className="card success-card">
                            <div className="card-body">
                                <div className="success-cont">
                                    <i className="fas fa-check"></i>
                                    <h3>Appointment booked Successfully!</h3>
                                    <p>Appointment booked with <strong>Dr. Mary Nielson</strong><br /> on <strong>12 Nov 2020 5:00PM to 6:00PM</strong></p>
                                    <a href="invoice-view.html" className="btn btn-primary view-inv-btn">View Invoice</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}