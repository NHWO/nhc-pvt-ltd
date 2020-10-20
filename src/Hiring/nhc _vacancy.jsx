import React from "react";
import "./style.css";
import vacancy from "./nhc_vacancy-converted.pdf";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const NhcVacancy = () => {
    return(
        <>
        <div className="documents" style={{marginTop:"100px",marginBottom:"100px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <embed src={vacancy} width="800px" height="1000px" style={{marginLeft:"150px",marginBottom:"50px"}}/><br/>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}
export default NhcVacancy;