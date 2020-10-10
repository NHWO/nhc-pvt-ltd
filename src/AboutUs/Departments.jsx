import React from "react";
import "./Department.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import surgery from "../hospitalImages/icons8-scissors-100.png";
import medicine from "../hospitalImages/icons8-pills-100(1).png";
import doctor from "../hospitalImages/icons8-medical-doctor-100(1).png";
import dental from "../hospitalImages/icons8-dental-filling-100.png";
import ent from "../hospitalImages/icons8-hearing-100.png";
import urology from "../hospitalImages/icons8-pee-100(1).png";
import ophthal from "../hospitalImages/icons8-ophthalmology-100.png";
import skin from "../hospitalImages/icons8-cleansing-100.png";
import Orthopedic from "../hospitalImages/icons8-broken-leg-100.png";
import Pediatric from "../hospitalImages/icons8-infant-massage-100.png";
import stethescope from "../hospitalImages/icons8-stethoscope-100(1).png";
import { Button } from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Departments = () => {
    return(
        <>
             <div className="Departments" style={{marginTop:"50px",marginBottom:"100px",textAlign:"center"}}>
                <h1>Departments</h1>
               <br/><br/>

                <div className="cards" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={medicine} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">General Medicine & Cardiology</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={surgery} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">General surgery</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={ent} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">ENT</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={dental} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Dental</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={urology} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Urology</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={ophthal} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Ophthal</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={skin} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Skin</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={Orthopedic} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Orthopedic</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={Pediatric} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px",padding:"10px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Pediatric</h5>
                                        <br/>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}><NavLink to="/appointment" style={{textDecoration:"none",color:"#fff"}}> BOOK APPOINTMENT</NavLink></Button>
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
export default Departments;