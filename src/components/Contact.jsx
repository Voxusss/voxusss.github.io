import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motions'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)
    emailjs.send(
      'service_fag7wbg', 
      'template_rbmbtrz',
      {
        from_name: form.name,
        to_name: 'Antoine',
        from_email: form.email,
        to_email: 'antoinerichardicontact@gmail.com',
        message: form.message
      },
      'oh1sqkFe8UyGUC5cU'
    ).then(() => {
      setIsSending(false)
      alert('Message sent successfully! I will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }), (error) => {
      setIsSending(false)
      alert('An error occured while sending the message. Please try again later.')
    }
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden pb-18'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-12'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')