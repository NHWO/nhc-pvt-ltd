import React from "react";
import "./DoctorsList.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { NavLink,Switch,Route, BrowserRouter as Router  } from "react-router-dom";
import GeneralPractitioner from "./GeneralPractitioner";
import Cardiologist from "./Cardiologist";
import Peditrician from "./Pediatrician";
import Opthalmologist from "./Opthalmologist";
import Neurologist from "./Neurologist";
import Gynaecologist from "./Gynaecologist";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width:'auto',
  },
}));

const DoctorsList = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
          
            <div className="doctorslist" style={{marginTop:"50px",marginBottom:"100px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-12" >
                          <div className={classes.root}>
                              <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                className={classes.tabs}
                              >
                                <Tab label="General Practitioner" {...a11yProps(0)} />
                                <Tab label="Cardiologist" {...a11yProps(1)} />
                                <Tab label="Peditrician" {...a11yProps(2)} />
                                <Tab label="Opthalmologist" {...a11yProps(3)} />
                                <Tab label="Neurologist" {...a11yProps(4)} />
                                <Tab label="Gynaecologist" {...a11yProps(5)} />
                              </Tabs>
                              </div>
                              </div>
                              <div className="col-lg-10 col-md-10 col-12 page">
                              <TabPanel value={value} index={0}>
                                < GeneralPractitioner/>
                              </TabPanel>
                              <TabPanel value={value} index={1}>
                                <Cardiologist/>
                              </TabPanel>
                              <TabPanel value={value} index={2}>
                                <Peditrician/>
                              </TabPanel>
                              <TabPanel value={value} index={3}>
                                <Opthalmologist/>
                              </TabPanel>
                              <TabPanel value={value} index={4}>
                                <Neurologist/>
                              </TabPanel>
                              <TabPanel value={value} index={5}>
                                <Gynaecologist/>
                              </TabPanel>
                            </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default DoctorsList;