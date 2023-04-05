import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works} from './components';
import { Suspense } from 'react';
import React, { useState} from 'react';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div>
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        <ChildComponent />
      )}
    </div>
  );
}

function ChildComponent() {
    <BrowserRouter>
    <div className='relative z-0 bg-black pb-1'>
      <div>
        <Navbar/>
        <Hero/>
        <StarsCanvas/>
      </div>
      <About/>

      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className='relative z-0'>
        <Contact/>
      </div>
    </div>
  </BrowserRouter>
}

export default Loading;