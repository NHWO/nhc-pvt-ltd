import React from "react";
import "./Testimonials.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i1 from "../hospitalImages/001.jpg";
import i2 from "../hospitalImages/003.jpg";
import i3 from "../hospitalImages/005.jpg";
import i4 from "../hospitalImages/004.jpg";
import i5 from "../hospitalImages/002.jpg";
import i6 from "../hospitalImages/008.jpg";
import "./style.css";

const Testimonials = () => {
    return(
        <>
            <div className="testimonials" style={{marginTop:"50px",marginBottom:"100px",textAlign:"center"}}> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={i6} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#118574"}}>James Gandofin</h5>
                                        <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={i1} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#118574"}}>James Gandofin</h5>
                                        <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                             <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={i4} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#118574"}}>James Gandofin</h5>
                                        <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={i2} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#118574"}}>James Gandofin</h5>
                                        <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={i5} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#118574"}}>James Gandofin</h5>
                                        <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                             <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={i3} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#118574"}}>James Gandofin</h5>
                                        <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonials;