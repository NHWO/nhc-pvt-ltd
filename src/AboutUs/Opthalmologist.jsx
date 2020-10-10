import React from "react";
import i1 from "../hospitalImages/04.jpg";
import i2 from "../hospitalImages/02.jpg";
import i3 from "../hospitalImages/03.jpg";
import i4 from "../hospitalImages/04.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";


const Opthalmologist = () => {
    return(
        <>
         <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12" style={{margin:"30px"}}>
                                <div className="card" id="card" style={{width: "16rem"}}>
                                    <img src={i1} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-12" style={{margin:"30px"}}>
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i2} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12" style={{margin:"30px"}}>
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i3} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12" style={{margin:"30px"}}>
                                <div className="card" id="card" style={{width: "16rem"}}>
                                    <img src={i1} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-12" style={{margin:"30px"}}>
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i2} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12" style={{margin:"30px"}}>
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i3} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
        </>
    )
}
export default Opthalmologist;