import React from "react";
import "./style.css";
import certificate from "../NareshHealthCareImages/CERTIFICATE OF INCORPORATION (1).PDF";
import  moa from "../NareshHealthCareImages/MOA (1)-converted.pdf";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Documents = () => {
    return(
        <>
        <div className="documents" style={{marginTop:"100px",marginBottom:"100px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <embed src={certificate} width="800px" height="1000px" style={{marginLeft:"150px",marginBottom:"50px"}}/><br/>
                        <embed src={moa} width="800px" height="1000px" style={{marginLeft:"150px"}}/><br/>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}
export default Documents;