import React from 'react';

const Productbox = (props) => {
  return (
    <div className='a-box col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center'>
        <div className='a-b-img'>
            <img src={props.image} alt="image"/>            
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <button className='productbox-button'>Order Now</button>
        </div>
      
    </div>
  )
}

export default Productbox;