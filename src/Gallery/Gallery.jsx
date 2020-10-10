import React from "react";
import "./Gallery.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i1 from "../NareshHealthCareImages/1.jpeg";
import i2 from "../NareshHealthCareImages/2.jpeg";
import i3 from "../NareshHealthCareImages/3.jpeg";
import i4 from "../NareshHealthCareImages/4.jpeg";
import i5 from "../NareshHealthCareImages/5.jpeg";
import i6 from "../NareshHealthCareImages/6.jpeg";
import i7 from "../NareshHealthCareImages/7.jpeg";
import i8 from "../NareshHealthCareImages/8.jpeg";
import i9 from "../NareshHealthCareImages/9.jpeg";
import i10 from "../NareshHealthCareImages/10.jpeg";
import i11 from "../NareshHealthCareImages/11.jpeg";
import i12 from "../NareshHealthCareImages/12.jpeg";
import i13 from "../NareshHealthCareImages/13.jpeg";
import i14 from "../NareshHealthCareImages/14.jpeg";
import i15 from "../NareshHealthCareImages/15.jpeg";




const Gallery = () => {
    return(
        <>
            
            <div className="Gallery" style={{marginTop:"50px",textAlign:"center",color:"#fff"}}>
                <h1 style={{color:"black"}}>Gallery</h1><br/><br/>
               
                <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i1} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                   
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i4} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i6} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                   
                                </div>
                            </div>
                            </div><br/>

                            <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i2} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i5} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i3} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    
                                </div>
                            </div>
                            </div><br/>

                            <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i7} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i8} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i9} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            </div><br/>

                            <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i10} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i11} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i13} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            </div><br/>

                            <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i12} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i14} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i15} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                </div>
                            </div> 
                            </div><br/>

                            

                        </div>
                    </div>
                </div>

        </>
    )
}
export default Gallery;