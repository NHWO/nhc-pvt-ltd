import React from "react";
import "./style.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Hiring = () => {
    return(
        <>
        <div className="hiring" style={{marginTop:"100px",marginBottom:"100px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="vacancy" style={{backgroundColor:"#fff",padding:"10px"}}>
                            <h5>Regional Health Manager for Medical counseling center</h5>
                            <p>Naresh health care Pvt. Ltd.</p>
                            <br/>
                            <h6>REQUIREMENTS</h6>
                            <p>No. of Posts:50</p>
                            <p>Experience: Fresher and Experienced.</p>
                            <p>Basice Salary:6000/-</p>
                            <p>Incentives:2000/-</p>
                            <p>Apply Mode: Offline</p>
                            <p><AccessTimeIcon style={{color:"maroon",marginRight:"5px"}}/>Argent hiring</p>
                            <Button style={{color:"White",backgroundColor:"#0d6659"}}><NavLink to="/application-form" style={{color:"#fff",textDecoration:"none"}}>Apply Now</NavLink></Button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="vacancy" style={{backgroundColor:"#fff",padding:"10px"}}>
                            <h5>Regional Health Manager for Medical counseling center</h5>
                            <p>Naresh health care Pvt. Ltd.</p>
                            <br/>
                            <h6>REQUIREMENTS</h6>
                            <p>No. of Posts:50</p>
                            <p>Experience: Fresher and Experienced.</p>
                            <p>Basice Salary:6000/-</p>
                            <p>Incentives:2000/-</p>
                            <p>Apply Mode: Offline</p>
                            <p><AccessTimeIcon style={{color:"maroon",marginRight:"5px"}}/>Argent hiring</p>
                            <Button style={{color:"White",backgroundColor:"#0d6659"}}><NavLink to="/application-form" style={{color:"#fff",textDecoration:"none"}}>Apply Now</NavLink></Button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="vacancy" style={{backgroundColor:"#fff",padding:"10px"}}>
                            <h5>Regional Health Manager for Medical counseling center</h5>
                            <p>Naresh health care Pvt. Ltd.</p>
                            <br/>
                            <h6>REQUIREMENTS</h6>
                            <p>No. of Posts:50</p>
                            <p>Experience: Fresher and Experienced.</p>
                            <p>Basice Salary:6000/-</p>
                            <p>Incentives:2000/-</p>
                            <p>Apply Mode: Offline</p>
                            <p><AccessTimeIcon style={{color:"maroon",marginRight:"5px"}}/>Argent hiring</p>
                            <Button style={{color:"White",backgroundColor:"#0d6659"}}><NavLink to="/application-form" style={{color:"#fff",textDecoration:"none"}}>Apply Now</NavLink></Button>
                        </div>
                    </div>
                </div>
            </div><br/><br/><br/>
        </div>
        </>
    )
}
export default Hiring;