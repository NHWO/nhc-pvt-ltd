import React from "react";
import "./FeaturedServices.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import medicine from "../hospitalImages/icons8-pills-100(1).png";
import doctor from "../hospitalImages/icons8-medical-doctor-100(1).png";
import ambulance from "../hospitalImages/icons8-ambulance-100(1).png";
import stethescope from "../hospitalImages/icons8-stethoscope-100(1).png";

const FeaturedServices = () => {
    return(
        <>
            <div className="featuredServices" style={{backgroundColor:"#eee",marginBottom:"100px"}}>
                <h1>Featured Services</h1>
                <p>We cover a big variety of medical services</p><br/><br/>

                <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card" id="card" style={{width: "16rem"}}>
                                    <img src={medicine} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Medical Treatment</h5>
                                        <p className="card-text">Our clinic specializes in a wide variety of health issues, related to absolutely any age or severity level.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={ambulance} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Emergency Help</h5>
                                        <p className="card-text">What you need to consider when purchasing UV-C devices for cleaning ambulances to reduce the spread of COVID-19. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={doctor} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Qualified Doctors</h5>
                                        <p className="card-text">we want doctors to have a balanced life and to care for themselves and their families as well as for others. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={stethescope} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Medical professionals</h5>
                                        <p className="card-text">They delivers services as doctors and nurses, helpers, lab technicians, and waste handlers. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default FeaturedServices;