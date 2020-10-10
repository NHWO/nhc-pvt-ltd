import React from "react";
import { Button, Divider } from "@material-ui/core";
import "./Events.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i1 from "../hospitalImages/1.jpg";
import i2 from "../hospitalImages/07.jpg";

const Events = () => {
    return(
        <>
            <div className="events" style={{marginTop:"50px",marginBottom:"100px"}}> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-6"   style={{color:"#0d6659",borderRight:"1px solid #9fa4a6"}}>
                            <h1>24</h1><h6>Sept</h6>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                            <h3 style={{color:"#0d6659"}}>Event-One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </p>
                            <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>View details</Button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 eventImage">
                            <img src={i1} alt="" height="190px" width="300px"/>
                        </div>
                    </div><br/><br/>
                    <Divider/><br/>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-6"   style={{color:"#0d6659",borderRight:"1px solid #9fa4a6"}}>
                            <h1>25</h1><h6>Sept</h6>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                            <h3 style={{color:"#0d6659"}}>Event-Two</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </p>
                            <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>View details</Button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 eventImage">
                            <img src={i2} alt="" height="190px" width="300px"/>
                        </div>
                    </div><br/><br/>
                    <Divider/><br/>
                    <p style={{color:"gray"}}>showing:2</p>
                </div>
            </div>
        </>
    )
}
export default Events;