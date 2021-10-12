import React from "react";

interface TopHeaderProps {

}

export class TopHeader extends React.Component<TopHeaderProps> {
    constructor(props: TopHeaderProps) {
        super(props);
    }
    render() {
        return (
            <div className="top-header">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <ul className="d-flex justify-content-between align-items-center">
                            <li>
                                <i className="fas fa-at"></i>
                                Contact Email : hi@spill.chat
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                Location : 9th Floor 107 Cheapside, London, United Kingdom, EC2V 6DN
                            </li>
                        </ul>
                        <ul className="d-flex justify-content-between align-items-center">
                            <li>
                                <div className="social-icon">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/spillchat/" target="_blank"><i className="fab fa-facebook-f"></i> </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/spillstagram_/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}