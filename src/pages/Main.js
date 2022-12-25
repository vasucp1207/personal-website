import React from 'react'
import About from './About';
import Blogs from './Blogs';
import Contack from './Contact';
import Home1 from './Home1';
import Navbar from './Navbar';

function Main() {
  return (
    <div>
      <Navbar />
      <Home1 />
      <About />
      <Blogs />
      <Contack />
    </div>
  )
}

export default Main