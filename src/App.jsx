import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works} from './components';

const App = () => {

  return (
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
  )
}

export default App
