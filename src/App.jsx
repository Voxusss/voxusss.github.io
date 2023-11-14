import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import Spinner from './components/Spinner';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for 3 seconds to prevent flashing
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <Suspense fallback={<Spinner/>}>
    {!isLoaded && <Spinner/>}
    <BrowserRouter>
      <div className='relative z-0 bg-black pb-1'>
        {isLoaded && <Navbar />}
        <Hero />
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </BrowserRouter>
    </Suspense>
  )
}

export default App;
