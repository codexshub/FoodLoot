import React from 'react';
import headerimg from '../images/headerimg.png';
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div id='row-1' className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center">
            <div id="header-img">
              <img id='burgger' src={headerimg} alt="Burgger" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className='header-heading'>
              <h3>It's Greate Time For A Good Taste of Burger</h3>
              <h1><span>BURGER</span> FOR<br />WEEK</h1>
              <p className='details'>Lorem ipsum, dolor sit amet consectetur.</p>
              <div className='header-btns'>
              <Link className='header-btn' to="products">Order</Link>
                {/* <a href='#' className='header-btn'>Order</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header