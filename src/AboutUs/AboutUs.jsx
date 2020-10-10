import React from "react";
import "./AboutUs.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i1 from "../hospitalImages/Director (another copy).jpeg";
import Divider from '@material-ui/core/Divider';
import i2 from "../hospitalImages/icons8-call-40.png";
import i3 from "../hospitalImages/icons8-task-40.png";
import i4 from "../hospitalImages/icons8-heart-40.png";
import i5 from "../hospitalImages/icons8-water-40.png";
import Doctors from "../Home/Doctors";


const AboutUs = () => {
    return(
        <>
            <div className="aboutUs" style={{marginTop:"100px",marginBottom:"100px",textAlign:"center"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 image1" style={{marginLeft:"-60px"}}>
                            <img src={i1} alt="i1" />
                            <p style={{color:"#fff",backgroundColor:"#118574",width:"400px",marginLeft:"71px"}}><h4>Dr. Naresh Manhar</h4>Director</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h2>Some Words About Us</h2>
                            <p align="justify"> To own, establish, run, manage, and maintain, hospitals, research centers, diagnostic centers, blood bank service centers, immunization centers, medical and other research centers, nursing homes, health centers, rehabilitation centers, clinics, polyclinics, laboratories and to apply or provide utility articles and services to patients, attendants and others and to provide aids to medical personnel for research and development and to act and work as consultants in medical profession in India.
                            </p>
                        <table>
                            <tr>
                                <td>
                                    <ul style={{textAlign:"left"}}>
                                        <li>Emergency Case</li>
                                        <li>Doctors Timetables</li>
                                        <li>Vaccinations & Travel Health</li>
                                        <li>Women’s Health</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul style={{textAlign:"left"}}>
                                        <li>Emergency Case</li>
                                        <li>Doctors Timetables</li>
                                        <li>Vaccinations & Travel Health</li>
                                        <li>Women’s Health</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                        </div>  
                    </div>
                    
                    <div className="row" style={{marginTop:"100px",textAlign:"left"}}>
                        <div className="col-lg-8 col-md-8 col-12">
                            <h2>Our Mission</h2>
                            <p>Mission of Naresh Healthcare is to <br/>provide care and services to all the patient the following facilities.</p>
                           <br/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <table>
                                            <tr>
                                                <td><img src={i2} alt="img2"/></td>
                                                <td>
                                                    <h5>Health information</h5>
                                                    <p>We provide health awareness information to keep the word healthy,it is our initiative towards a healthy world.</p>
                                                </td>
                                            </tr> <br/>
                                            <tr>
                                                <td><img src={i3} alt="img3"/></td>
                                                <td>
                                                    <h5>Medical Facility</h5>
                                                    <p>We provide medical facilities to keep the word healthy,it is our initiative towards a healthy world.</p>
                                                </td>
                                            </tr> <br/>
                                        </table>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                    <table>
                                            <tr>
                                                <td style={{marginRight:"20px"}}><img src={i5} alt="img5"/></td>
                                                <td>
                                                    <h5>Symptom Check</h5>
                                                    <p>Patients can check symptoms and get information,it is our initiative towards a healthy world.</p>
                                                </td>
                                            </tr> <br/>
                                            <tr>
                                                <td><img src={i4} alt="img4"/></td>
                                                <td>
                                                    <h5>Qualified Doctors</h5>
                                                    <p>Our Qualified doctors keep the word healthy,it is our initiative towards a healthy world.</p>
                                                </td>
                                            </tr> <br/>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>      
                        <div className="col-lg-4 col-md-4 col-12" style={{border:"2px solid #118574", height:"400px"}}>
                            <h4 style={{margin:"20px",textAlign:"center"}}>MONDAY-FRIDAY</h4>
                            <h6 style={{margin:"20px",textAlign:"center"}}>OPENING HOURS</h6>
                            <p align="justify">Lorem ipsum dolor sit amet, consectetur adi pisic ing elit, sed do eiusmod tempor incidid.</p>
                            <table style={{margin:"10px"}}>
                                <tr >
                                    <td style={{marginTop:"50px"}}>INTETMIST DOCTOR</td><br/><br/>
                                    <td style={{margin:"20px",textAlign:"right"}}>08:00 – 20:00</td><br/><br/>
                                </tr>
                                <Divider/>
                                <tr>
                                    <td>FAMILY DOCTOR</td><br/><br/>
                                    <td>09:00 – 17:00</td><br/><br/>
                                </tr>
                                <Divider/>
                                <tr>
                                    <td>PEDIATRICIAN</td><br/><br/>
                                    <td>08:00 – 16:00</td><br/><br/>
                                </tr>
                                <Divider/>
                                <tr>
                                    <td>PHYSIOTHEREPIST</td><br/><br/>
                                    <td>10:00 – 15:00</td><br/><br/>
                                </tr>
                                <Divider/>
                            </table>
                        </div>     
                                
                    </div>
                </div>
            </div>     
            {/* <Doctors/> */}
        </>
    )
}
export default AboutUs;