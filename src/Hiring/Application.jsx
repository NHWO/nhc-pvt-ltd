import React from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Application  = () => {
    return(
        <>
            <div className="application" style={{marginTop:"100px",marginBottom:"100px"}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-2 col-md-0 col-0"></div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <h4>Application Form</h4><br/>
                            <form>
                            <div className="form-group">
                                <label for=""> Name</label>
                                <input type="text" className="form-control" id="" placeholder="Enter Name"/>
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Contact Number </label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact Number"/>
                            </div><br/>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Message</label>
                                <input type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Your Message here"/>
                            </div><br/><br/>
                            <NavLink to="/Application-form">
                            Download Application Form
                            </NavLink><br/><br/>
                                <div className="form-group" style={{textAlign:"center"}}>
                                <Button style={{backgroundColor:"#0d6659",color:"#fff",paddingRight:"5px",width:"200px"}}>
                                    Submit  
                                </Button>
                            </div><br/><br/><br/><br/>
                            </form>    
                        </div>
                        <div className="col-lg-2 col-md-0 col-0"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Application;