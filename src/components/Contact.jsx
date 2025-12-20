import React from 'react'
import PageTitle from "./PageTitle"

const Contact = () => {
  return (
    <div className=" grid grid-cols-1 w-65  sm:w-132 mt-8  mx-auto">

      <div className='mx-auto sm:ml-50'>
        <PageTitle title="Contact Us" />
      </div>

      <p className='text-center mt-6 text-sm dark:text-light'>We'd love to hear from you! if you have any questions, feedback, or suggestions, please don't hesitate to react out.</p>

      
        <form className='mt-6'>

          <div className='flex flex-col'>
            <label htmlFor='name' className='text-primary dark:text-light'>Name</label>
            <input className='outline-none px-2 py-1 border border-light rounded-sm bg-gray-600 text-lighter ' id='name' type='text'required placeholder="Your Name"></input>
          </div>

          <div className='grid grid-cols-1 mt-6 sm:flex '>

            <div className='flex flex-col '>
              <label htmlFor='email' className='text-primary dark:text-light'>Email</label>
              <input className='outline-none px-2 py-1 sm:w-64 border border-light rounded-sm bg-gray-600 text-lighter' type="email" id='email' required placeholder='Your Email'  />
            </div>

            <div className='flex flex-col  sm:ml-4'>
              <label htmlFor='number' className='text-primary dark:text-light'>Mobile Number</label>
              <input className='outline-none px-2 py-1 sm:w-64 border border-light rounded-sm bg-gray-600 text-lighter' id='number' type='tel' required placeholder='Your Mobile Number' ></input>
            </div>
            
          </div>

          <div className='flex flex-col mt-5 '>
            <label htmlFor='message' className='text-primary dark:text-light'>Message</label>
            <textarea className='outline-none px-2 py-2 h-24 border border-light rounded-sm bg-gray-600 text-lighter' id='message' required placeholder='Your Message'></textarea>

          </div>

          <div className='sm:mx-auto max-w-3xl text-center'>
            <button className='bg-light rounded-sm px-2 mt-6 hover:cursor-pointer hover:bg-lighter' type='submit'>Submit</button>
          </div>
        </form>
      
      
    </div>
  )
}

export default Contact
