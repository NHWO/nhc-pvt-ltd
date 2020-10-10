import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Button from '@material-ui/core/Button';

const ContactUs = () => {
    return(
        <>
             <h2 style={{textAlign:"center",marginTop:"50px",marginBottom:"50px"}}>Let's Talk</h2>
             <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-3 col-0"></div>
                    <div className="col-lg-6 col-md-6 col-12">
                    
                    </div>
                <div className="col-lg-3 col-md-3 col-0"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                    <form>
                         <div className="form-group">
                            <label for=""> Name</label>
                            <input type="text" className="form-control" id="" placeholder="Enter Patient Name"/>
                        </div><br/>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                        </div><br/>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Subject </label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject"/>
                        </div><br/>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Description </label>
                            <input type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Deacription"/>
                        </div><br/><br/>
                            <div className="form-group" style={{textAlign:"center"}}>
                            <Button style={{backgroundColor:"#0d6659",color:"#fff",paddingRight:"5px",width:"200px"}}>
                                Submit  
                            </Button>
                        </div><br/><br/><br/>
                        </form>        
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12" style={{marginTop:"20px"}}>
                        <h3>Medicine Center</h3>
                        <p>Medicine center make sure that all the important medicines are available for the patients.</p>
                        <a style={{color:"maroon",marginBottom:"10px"}}>Mon - Fri 9:00 am - 2:00 PM</a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12" style={{marginTop:"20px"}}>
                        <h3>Enquiry Phone.</h3>
                        <p>We are happy to help the patients, if they have any queries they can contact on the nuber below.</p>
                        <a style={{color:"maroon",marginBottom:"10px"}}>(+91) 180002120191</a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12" style={{marginTop:"20px"}}>
                        <h3>Drop a line.</h3>
                        <p>Write us your comments or message, mail us your feedback on the mail-id below.</p><br/>
                        <a style={{color:"maroon",marginBottom:"10px"}}>nareshhealthcarepl@gmail.com</a>
                    </div>
                </div>
            </div><br/><br/><br/>
            
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7365517246376!2d81.64689541434977!3d21.242292985883118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd1be4281a57%3A0xe1fdaa01195b20a5!2sVirtuora%20Technologies%20%26%20Services!5e0!3m2!1sen!2sin!4v1600884739488!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"/>
            </div>
            </div>
            </div><br/><br/><br/><br/> */}
            </>
    )
}
export default ContactUs;