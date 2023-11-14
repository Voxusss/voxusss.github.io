import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  const animationKey = Date.now(); // Generate a unique key for each render
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ff8e24]'/>
          <div className='w-1 sm:h-80 h-40 orange-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#ff8e24]'> Antoine</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
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