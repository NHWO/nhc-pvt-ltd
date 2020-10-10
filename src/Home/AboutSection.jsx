import React from "react";
import "./AboutSection.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Divider from '@material-ui/core/Divider';
import sideImage from "../hospitalImages/05a.jpg";

const AboutSection = () => {
    return(
        <>
            <div className="aboutsection" style={{marginTop:"200px"}}>
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-6 col-md-6 col-12" style={{marginBottom:"20px"}}>
                            <h2 style={{marginTop:"20px"}}>About Us</h2><hr/><br/>
                            <h4>What we are and our history</h4>
                            <p align="justify"> To own, establish, run, manage, and maintain, hospitals, research centers, diagnostic centers, blood bank service centers, immunization centers, medical and other research centers, nursing homes, health centers, rehabilitation centers, clinics, polyclinics, laboratories and to apply or provide utility articles and services to patients, attendants and others and to provide aids to medical personnel for research and development and to act and work as consultants in medical profession in India.
                            </p>
                           <br/>
                            <Divider style={{color:"grey"}}/><br/>
                            <h2>Vision and Mission</h2><br/>
                            <h4>Our goal and thoughts</h4>
                            <p align="justify"> To own, establish, run, manage, and maintain, hospitals, research centers, diagnostic centers, blood bank service centers, immunization centers, medical and other research centers, nursing homes, health centers, rehabilitation centers, clinics, polyclinics, laboratories and to apply or provide utility articles and services to patients, attendants and others and to provide aids to medical personnel for research and development and to act and work as consultants in medical profession in India.
                            </p>
                        </div>
                      
                        <div className="col-lg-6 col-md-6 col-12 image" style={{marginTop:"150px"}} >
                            <img src={sideImage} alt="sideImage" height="600px" width="500px"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutSection;