import React from 'react';
import aboutimage from '../images/upcoming-img.jpg';


const About = () => {
  return (
    <div className="container-fluid">
      <div id='row-3' className="row">
        <div className="about-image col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
        <img src={aboutimage} />
          
        </div>
        <div id='about-heading' className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
        <h1>UPCOMING EVENT</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam aliquid recusandae deleniti molestiae. Iusto quisquam aliquid recusandae deleniti molestiae. Iure delectus ad ratione pariatur error possimus numquam libero odit dignissimos.</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About