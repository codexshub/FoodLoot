import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/product1.jpg';
import pimage2 from '../images/product2.jpg';
import pimage3 from '../images/product3.jpg';



const Products = () => {
  return (
    <>
      <div className="container-fluid">
        <div id='row-2' className="row">
          <div id='products'>
            <h1 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">CHOOSE & ENJOY</h1>
            <p className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci enim reprehenderit ratione voluptas rerum esse!
            </p>
            <div className='a-container'>
            <Productbox image={pimage1} title="Masala Dosa" />
            <Productbox image={pimage2} title="Khaman Dhokla" />
            <Productbox image={pimage3} title="Pao Bhaji" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products