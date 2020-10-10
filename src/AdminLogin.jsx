import React from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

const AdminLogin = () => {
    const classes = useStyles();
    return(
        <>
        <div className="admin" style={{marginTop:"100px",marginBottom:"100px"}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-2 col-md-0 col-0"></div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <h4>Enter Job Description</h4><br/>
                            <form>
                            <div className="form-group">
                                <label for="">Job Title</label>
                                <input type="text" className="form-control" id="" placeholder="Enter Job Title"/>
                            </div><br/>
                            <div className="form-group">
                                <label for="" >Job Location </label>
                                <input type="email" className="form-control" id=""  aria-describedby="emailHelp" placeholder="Enter Job Location"/>
                            </div><br/>
                            <div className="form-group">
                                <label for="" >Relevant Experience </label>
                                <input type="text" className="form-control" id=""  aria-describedby="emailHelp" placeholder="Enter Relevant Experience"/>
                            </div><br/>
                            <div className="form-group">
                                <label for="" >Total Experience</label>
                                <input type="textarea" className="form-control" id=""  aria-describedby="emailHelp" placeholder="Enter Total Experience"/>
                            </div><br/><br/>
                            <div className="form-group">
                                <label for="" >Qualification</label>
                                <input type="textarea" className="form-control" id=""  aria-describedby="emailHelp" placeholder="Enter Qualification"/>
                            </div><br/><br/>
                            <div className="form-group">
                                <label for="" >Basic Salary</label>
                                <input type="textarea" className="form-control" id=""  aria-describedby="emailHelp" placeholder="Enter Basic Salary"/>
                            </div><br/><br/>
                            <div className="form-group">
                                <label for="" >Incentives</label>
                                <input type="textarea" className="form-control" id=""  aria-describedby="emailHelp" placeholder="Enter Incentives"/>
                            </div><br/><br/>
                                <div className="form-group" style={{textAlign:"center"}}>
                                <Button style={{backgroundColor:"#0d6659",color:"#fff",paddingRight:"5px",width:"200px"}}>
                                    Submit  
                                </Button>
                            </div><br/><br/><br/><br/>
                            </form>    
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-0 col-0"></div>
                </div>
                <div className="upload" style={{float:"right"}}>
            <div className={classes.root}>
                    <input
                        accept="file_extension/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span" style={{color:"White",backgroundColor:"#0d6659"}}>
                        Upload document
                        </Button>
                    </label>
                    
                    </div>
            </div>

            </div>
        </>
    )
}
export default AdminLogin;