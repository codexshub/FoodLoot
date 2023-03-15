import React, {useState, useEffect} from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';  


function App() {
  const[loading,setLoading] = useState(false);
  const override = `css
  display:block;
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0);
  }, [])
  return (

   <div className='App'>

    {
      <>
      <Navbar/>
      <Header/>
      <Products/>
      <About/>
      <Contact/>
      </>
    }
    
   </div>
  )
}

export default App;