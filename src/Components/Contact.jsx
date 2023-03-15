import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div id='contact'>
            <h1>Book Your Table</h1>
            <form>
              <input type="text" placeholder='Full Name' />
              <input type="text" placeholder='Type Your E-Mail' />
              <textarea placeholder='Write Here...' ></textarea>
              <input className='submitbtn' type="submit" value="BOOK" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact