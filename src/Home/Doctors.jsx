import React from "react";
import "./Doctors.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i1 from "../hospitalImages/005.jpg";
import i2 from "../hospitalImages/006.jpg";
import i3 from "../hospitalImages/007.jpg";
import i4 from "../hospitalImages/008.jpg";
import i5 from "../hospitalImages/001.jpg";
import i6 from "../hospitalImages/002.jpg";
import i7 from "../hospitalImages/003.jpg";
import i8 from "../hospitalImages/004.jpg";
import i9 from "../hospitalImages/009.jpg";
import i10 from "../hospitalImages/010.jpg";
import i11 from "../hospitalImages/011.jpg";
import i12 from "../hospitalImages/012.jpg";

const Doctors = () => {
    return(
        <>
            <div className="Doctors" style={{margin:"50px",textAlign:"center",backgroundColor:"#eee"}}>
                <h1>Our Doctors</h1><br/><br/>

                <div className="">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="2000">
                            <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card" id="card" style={{width: "16rem"}}>
                                    <img src={i1} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i2} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i3} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i4} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                            </div>
                            <div className="carousel-item" data-interval="2000">
                            <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card" id="card" style={{width: "16rem"}}>
                                    <img src={i5} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i6} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i7} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i8} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                            </div>
                            <div className="carousel-item" data-interval="2000">
                            <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card" id="card" style={{width: "16rem"}}>
                                    <img src={i9} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i10} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i11} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={i12} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"maroon"}}>Marc Percival</h5>
                                        <p className="card-text">Professor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Doctors;