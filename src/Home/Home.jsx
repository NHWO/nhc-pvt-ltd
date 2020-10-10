import React from "react";
import Corousel from "./Corousel";
import Links from './Links';
import AboutSection from './AboutSection';
import FeaturedServices from './FeaturedServices';
import Doctors from './Doctors';

const Home = () => {
    return(
        <>
        
      <div style={{width:"100%",borderBottom:"7px solid maroon",margin:"0px"}}>
         <Corousel/>
      </div>
      <div >
          <Links/>
      </div>
      <div style={{backgroundColor:"#fff"}}>
          <AboutSection/>
      </div>
      <div style={{backgroundColor:"#fff",textAlign:"center",marginTop:"160px"}}>
          <FeaturedServices/>
      </div>
      {/* <div style={{backgroundColor:"#eee"}}>
          <Doctors/>
      </div> */}
        </>
    )
}
export default Home;