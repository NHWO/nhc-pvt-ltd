import React from "react";
import "./Link.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Button from '@material-ui/core/Button';

const Links = () =>{
    return(
        <>
            <div className="links" style={{color:"#fff"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12 linkCard" style={{backgroundColor:"#0d6659",height:"45vh"}}>
                                <h2 style={{marginTop:"20px",fontSize:"25px"}}>Clinic News</h2>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed
                                </p><br/>
                                <Button className="linkBtn" style={{backgroundColor:"#fff",color:"maroon"}}>Read More</Button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12" style={{backgroundColor:"#118574",height:"45vh"}}>
                        <h2 style={{marginTop:"20px",fontSize:"25px"}}>Top Doctors</h2>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed
                                </p><br/>
                                <Button className="linkBtn" style={{backgroundColor:"#fff",color:"maroon"}}>Read More</Button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12" style={{backgroundColor:"#13ad97",height:"45vh"}}>
                        <h2 style={{marginTop:"20px",fontSize:"25px"}}>24 Hour Service</h2>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed
                                </p><br/>
                                <Button className="linkBtn" style={{backgroundColor:"#fff",color:"maroon"}}>Read More</Button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12" style={{backgroundColor:"#16c9b0",height:"45vh"}}>
                        <h2 style={{marginTop:"20px",fontSize:"25px"}}>Opening Hours</h2><br/>
                        <table>
                            <tr>
                                <td>Monday - Friday </td>
                                <td>  8.00 - 17.00</td>
                            </tr><br/>
                            <tr>
                                <td>Saturday  </td>
                                <td>  9.30 - 17.30</td>
                            </tr><br/>
                            <tr>
                                <td>Sunday </td>
                                <td>  9.30 - 15.00</td>
                            </tr><br/>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Links;