import React from 'react';
import "./corousel.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import img1 from "../hospitalImages/hospital (another copy).jpeg";
import img2 from "../hospitalImages/4.jpg";
import img3 from "../hospitalImages/3.jpg";

const items = [
  {
    src: img1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: img3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Corousel = () => {
  return(
  <>
    <div className="corousel">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="2000">
            <img src={img1} className="d-block w-100" alt="img1"/>
             <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
              <h2>Naresh Healthcare<br/> Health and Care redefining</h2>
          </div>
          </div>
          <div className="carousel-item" data-interval="2000">
            <img src={img2} className="d-block w-100" alt="img2"/>
             <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
              <h2>Access best treatment, get healthy life.</h2>
           </div>
          </div>
          <div className="carousel-item" data-interval="2000">
            <img src={img3} className="d-block w-100" alt="img3"/>
             <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
              <h2>A Hospital for the Patients of all ages</h2>
        </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </>
  )
} 
export default Corousel;
