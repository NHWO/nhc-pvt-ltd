import React from "react";
import "./Appointment.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Button from '@material-ui/core/Button';

const Appointment = () => {
    return(
        <>
            <div className="appointment">
            <h2 style={{textAlign:"center",marginTop:"50px",marginBottom:"50px"}}>Make An Appointment</h2>
            <div className="container">
                <div className="row">
                <div className="col-lg-2 col-md-2 col-0"></div>
                    <div className="col-lg-8 col-md-8 col-12">
                    <form className="form1">
                        <div class="form-check">
                        <label for="" style={{marginLeft:"0px"}}>Patient Appointment</label><br/><br/>
                        <label class="form-check-label" for="exampleRadios1">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                New Patient
                            </label>
                            <label class="form-check-label" for="exampleRadios2" style={{marginLeft:"40px"}}>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked/>
                                Old Patient
                            </label>
                            </div><br/>
                         <div className="form-group">
                            <label for="">Patient Name</label>
                            <input type="text" className="form-control" id="" placeholder="Enter Patient Name"/>
                        </div><br/>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                        </div><br/>
                        <div className="form-group">
                            <label for="">Date</label>
                            <input type="date" className="form-control" id="" placeholder=""/>
                        </div><br/>
                        <div className="form-group">
                                <label for="">Doctor</label>
                                <select class="form-control ">
                                <option>Sansa Gomez</option>
                                <option>Amit Singh</option>
                                <option>Daniel Dsouza</option>
                            </select>
                            </div><br/>
                            <div className="form-group"> 
                                <label for="">Gender</label>
                                <select class="form-control ">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            </div><br/>
                            <div className="form-group">
                            <label for="">Phone</label>
                            <input type="text" className="form-control" id="" placeholder="Enter Phone"/>
                        </div><br/>
                        <div className="form-group">
                            <label for="">Message</label>
                            <input type="text" className="form-control" id="" placeholder="Enter Message"/>
                        </div><br/><br/>
                        <div className="form-group" style={{float:"right"}}>
                            <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>
                                Send Your Request
                            </Button>
                        </div><br/>
                        </form><br/><br/><br/><br/>
                    </div>
                    <div className="col-lg-2 col-md-2 col-0"></div>
                    
                </div>
            </div>
            </div>
        </>
    )
}
export default Appointment;