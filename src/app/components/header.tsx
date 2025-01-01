"use client";
import React, { useState } from 'react';
import { ModeToggle } from './modetoggel';

function Header() {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}`);
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* Logo */}
          <h1 className="w-[130px] sm:w-auto font-bold text-2xl text-primary">Saima blog</h1>
          <ModeToggle/>
      </div>

      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-5 max-w-[740px] m-auto text-xs sm:text-base">
        A latest blog website brings fresh insights and trends, keeping readers informed and engaged. It’s a dynamic platform where ideas flow and creativity thrives, offering something new with every post.
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-5 border border-black shadow-[-7px_7px_0px_#000000]"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmailChange}
            className="pl-4 outline-none"
            aria-label="Email address"
            required
          />
          {/* Button */}
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white hover:font-bold"
            aria-label="Subscribe"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;







