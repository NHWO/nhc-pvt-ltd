import React from "react";
import "./NoticeBar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import MailIcon from '@material-ui/icons/Mail';

const NoticeBar = () => {
    return(
        <>
            <div className="noticebar" style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{color:"#118574",marginLeft:"60px",display:"flex"}}>
                    <FacebookIcon style={{marginTop:"5px",marginLeft:"3px",marginRight:"3px"}}/>
                    <TwitterIcon style={{marginTop:"5px",marginLeft:"3px",marginRight:"3px"}}/>
                    <MailIcon style={{marginTop:"5px",marginLeft:"3px",marginRight:"3px"}}/>
                    <InstagramIcon style={{marginTop:"5px",marginLeft:"3px",marginRight:"3px"}}/>
                    <LinkedInIcon style={{marginTop:"5px",marginLeft:"3px",marginRight:"3px"}}/>
                    <PinterestIcon style={{marginTop:"5px",marginLeft:"3px",marginRight:"3px"}}/>
                </div>
                <div style={{margin:"2px",paddingRight:"10px"}}>
                    <Button size="small" style={{backgroundColor:"#118574",color:"#fff"}}>Login</Button>
                </div>
            </div>
        </>
    )
}
export default NoticeBar;