import React from 'react';
import heroImage from './images/pexels-vanessa-loring-5966443.jpg';

const Hero = () => {
  return (
    <>
    <div className='heroSection'> 
        <h1 className='heroText'>Welcome to our Veggie world</h1>

      <img src={heroImage} alt="Hero" className='heroImg' />
      </div>
      <button>Order Now</button>

    </>
  );
};

export default Hero;
