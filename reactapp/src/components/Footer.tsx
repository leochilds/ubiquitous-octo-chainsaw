import React from "react";
import logo from '../assets/transparentlogo.png';

interface FooterProps {
    goToAppointmentsPage: () => void,
    goToCounsellorSearchPage: () => void
}
export class Footer extends React.Component<FooterProps> {
    constructor(props: FooterProps) {
        super(props);
    }
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <img src={logo} alt="Logo" className="img-fluid" />

                        <div className="social-icons">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/spillchat/">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/spillstagram_/?hl=en">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <ul className="footer-nav">
                            <li>
                                <a onClick={this.props.goToAppointmentsPage} href="#">Appointments</a>
                            </li>
                            <li>
                                <a onClick={this.props.goToCounsellorSearchPage} href="#">Booking</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2021 Spill | All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}