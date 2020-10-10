import React from "react";
import "./Footer.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import complain from "../hospitalImages/icons8-create-40.png";
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import facebook from "../hospitalImages/icons8-facebook-f-30(1).png";
import twitter from "../hospitalImages/icons8-twitter-30.png";
import google from "../hospitalImages/icons8-google-plus-30.png";
import instagram from "../hospitalImages/icons8-instagram-30.png";
import linkedin from "../hospitalImages/icons8-linkedin-2-30.png";
import pinterest from "../hospitalImages/icons8-pinterest-30.png";
import youtube from "../hospitalImages/icons8-youtube-30.png";
import EditIcon from '@material-ui/icons/Edit';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <div className="footer" style={{color:"#fff",marginBottom:"-50px"}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-12" style={{color:"#fff",marginTop:"20px"}}>
                        <h3>Follow Us</h3><br/>
                        <div className="icons">
                            <img src={facebook} alt="facebook" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={twitter} alt="twitter" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={instagram} alt="instagram" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={linkedin} alt="linkedin" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                        </div>
                        <br/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12" style={{color:"#fff",marginTop:"20px"}}>
                            <h3>Links</h3><br/>

                                <table id="list">
                                    <tr>
                                        <td><li style={{listStyleType:""}}><NavLink style={{color:"#fff",textDecoration:"none"}} to="/">Home</NavLink></li></td>
                                        <td style={{paddingLeft:"100px"}}><li style={{listStyleType:""}}><NavLink style={{color:"#fff",textDecoration:"none"}} to="/about-us">About</NavLink></li></td>
                                    </tr><br/>
                                    <tr>
                                        <td><li style={{listStyleType:""}}><NavLink style={{color:"#fff",textDecoration:"none"}} to="/gallery">Gallery</NavLink></li></td>
                                        <td style={{paddingLeft:"100px"}}><li style={{listStyleType:""}}><NavLink style={{color:"#fff",textDecoration:"none"}} to="/contact-us">Contact Us</NavLink></li></td>
                                    </tr><br/>
                                </table>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12" style={{color:"#fff",marginTop:"20px"}}>
                                <h3>Feedback</h3><br/>
                                <div style={{display:"flex"}}>
                                    {/* <img src={complain} alt="" style={{border:"1px solid white"}}/> */}
                                <EditIcon style={{border:"1px solid white",color:"#0d6659",backgroundColor:"#fff",borderRadius:"5px"}}/>
                                <p style={{marginLeft:"20px"}}> Complain</p>
                                </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                    <div className="container">
                                        <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12"  style={{display:"flex"}}>
                                                 <CallIcon/>
                                            <div style={{marginLeft:"10px"}}>
                                                <p>180002120191</p>
                                            </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12" style={{display:"flex"}}>
                                                <MailIcon/>
                                                <div style={{marginLeft:"10px"}}>
                                                <p>nareshhealthcarepl@gmail.com</p>
                                            </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12"  style={{display:"flex"}}>
                                            <RoomIcon/>
                                            <div style={{marginLeft:"10px"}}>
                                                <p>P3C-509,sector-27,NAYA RAIPUR CHHATTISGARH,492001</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
                <div className="col-lg-12 col-md-12 col-12" style={{backgroundColor:"rgba(0,0,0,0.2)",textAlign:"center",padding:"10px",width:"100%"}}>
                    <p style={{marginTop:"12px"}}>© Naresh Healthcare 2020 All rights reserved</p>
                </div>
            </div><br/><br/>
        </>
    )
}
export default Footer;