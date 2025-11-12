import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for the newsletter
    console.log("Newsletter subscription for email:", email);
  };

  return (
    <footer className='bg-gray-900 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-36 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        
        {/* Logo and Description */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        
        {/* Company Links */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h5 className='text-white text-lg font-semibold'>Company</h5>
          <ul className='mt-6 space-y-4 text-sm text-white/80'>
            <li><a href="#" className='hover:text-blue-400'>Home</a></li>
            <li><a href="#" className='hover:text-blue-400'>About us</a></li>
            <li><a href="#" className='hover:text-blue-400'>Contact us</a></li>
            <li><a href="#" className='hover:text-blue-400'>Privacy policy</a></li>
          </ul>
        </div>

        {/* Subscribe to Newsletter */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h5 className='text-white text-lg font-semibold'>Subscribe to our newsletter</h5>
          <p className='mt-6 text-sm text-white/80'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form onSubmit={handleSubmit} className='mt-4'>
            <input 
              type='email' 
              placeholder='Enter your email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className='p-2 rounded bg-white text-black w-60 mt-2'
              required 
            />
            <button type="submit" className='mt-2 bg-blue-500 text-white p-2 rounded'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Copyright */}
      <p className='py-4 text-center text-sm text-white/60'>
        Copyright 2025 © Courserate. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
