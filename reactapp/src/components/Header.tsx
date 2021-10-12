import react from "react";
import logo from '../assets/transparentlogo.png';

interface HeaderProps {
    goToAppointmentsPage: () => void,
    goToCounsellorSearchPage: () => void
}
export class Header extends react.Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props);
    }
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header">
                        <a id="mobile_btn" href="javascript:void(0);">
                            <span className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <a href="#" className="navbar-brand logo">
                            <img src={logo} className="img-fluid" alt="Logo" />
                        </a>
                    </div>
                    <div className="main-menu-wrapper ml-auto">
                        <div className="menu-header">
                            <a href="#" className="menu-logo">
                                <img src={logo} className="img-fluid" alt="Logo" />
                            </a>
                        </div>
                        <ul className="main-nav mr-auto">
                            <li>
                                <a onClick={this.props.goToAppointmentsPage} href="#">Appointments</a>
                            </li>
                            <li>
                                <a onClick={this.props.goToCounsellorSearchPage} href="#">Make a Booking</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}