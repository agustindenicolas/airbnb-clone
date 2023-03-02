import React from 'react';

function Footer() {
  return (
    <div
      className='grid grid-cols-1 gap-y-10 md:grid-cols-4 px-32 py-14 bg-gray-100
     text-gray-600'
    >
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accesibility</p>
        <p>This is not a real site</p>
        <p>Its an awesome clone</p>
        <p>Referrals accepted</p>
        <p>Built with Next.js</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>This is pretty cool</p>
        <p>I dont know what to write</p>
        <p>Contact me</p>
        <p>Work with us</p>
        <p>Lorem ipsum</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Dieciocho</p>
        <p>De Diciembre</p>
        <p>De dos mil veintidos</p>
        <p>La tercera</p>
        <p>La scaloneta</p>
      </div>
    </div>
  );
}

export default Footer;
