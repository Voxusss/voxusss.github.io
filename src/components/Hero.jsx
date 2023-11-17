import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  const animationKey = Date.now(); // Generate a unique key for each render
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[85px] sm:top-[160px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <div className='wrapper'>
            <span className='child font-black text-white text-[50px] lg:text-[80px] md:text-[60px] sm:text-[70px] lg:leading-[98px] mt-2'>Hi, I'm </span>
            <span className='child font-black text-white text-[50px] lg:text-[80px] md:text-[60px] sm:text-[40px] lg:leading-[98px] mt-2'> &nbsp;Antoine</span>
            <span className='child font-black text-white text-[50px] lg:text-[80px] md:text-[60px] sm:text-[40px] lg:leading-[98px] mt-2'>&nbsp;Antoine</span>
          </div>
          <p className={`${styles.heroSubText} mt-2 font-cozy text-white-100`}>
            I bring ideas to life through software development, <br className='sm:block hidden'/>crafting stunning and robust end-to-end solutions.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              key={animationKey} // Add key prop to trigger re-render
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero