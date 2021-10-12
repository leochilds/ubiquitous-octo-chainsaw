import react from "react";
import { SearchFilter } from "./SearchFilter";
interface CounsellorSearchProps { }
export class CounsellorSearch extends react.Component<CounsellorSearchProps> {
    constructor(props: CounsellorSearchProps) {
        super(props)
    }
    render() {
        return (
            <div className="row">
                <SearchFilter />

                <div className="col-md-12 col-lg-8 col-xl-9">

                    <div className="card">
                        <div className="card-body">
                            <div className="doctor-widget">
                                <div className="doc-info-left">
                                    <div className="doctor-img">
                                        <a href="doctor-profile.html">
                                            <img src="assets/img/doctors/doctor-thumb-01.jpg" className="img-fluid" alt="User Image" />
                                        </a>
                                    </div>
                                    <div className="doc-info-cont">
                                        <h4 className="doc-name"><a href="doctor-profile.html">Dr. John Moffett</a></h4>
                                        <p className="doc-speciality">M.D. (Psychiatry)</p>
                                        <h5 className="doc-department"><img src="assets/img/specialities/specialities-03.png" className="img-fluid" alt="Speciality" />Physical stress</h5>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating">(17)</span>
                                        </div>
                                        <div className="clinic-details">
                                            <p className="doc-location"><i className="fas fa-map-marker-alt"></i> Florida, USA</p>
                                            <ul className="clinic-gallery">
                                                <li>
                                                    <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                        <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                        <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                        <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                        <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clinic-services">
                                            <span>Surgery & Radiology</span>
                                            <span> Nutrition</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="doc-info-right">
                                    <div className="clini-infos">
                                        <ul>
                                            <li><i className="far fa-thumbs-up"></i> 98%</li>
                                            <li><i className="far fa-comment"></i> 17 Feedback</li>
                                            <li><i className="fas fa-map-marker-alt"></i> Florida, USA</li>
                                            <li><i className="far fa-money-bill-alt"></i> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
                                        </ul>
                                    </div>
                                    <div className="clinic-booking">
                                        <a className="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                        <a className="apt-btn" href="booking.html">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="load-more text-center">
                        <a className="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
                    </div>
                </div>
            </div>
        )
    }
}