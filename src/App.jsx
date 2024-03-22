/* eslint-disable no-unused-vars */
import React from 'react';
import { Hero, Navbar, Companies, Courses, Achievement,Categories, FeedBack, CTA, Footer} from './components';
import './App.css'

const App = () => {
  return (  
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <FeedBack />
      <CTA />
      <Footer />

      
    </div>
  )
}

export default App