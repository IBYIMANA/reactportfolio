import React from 'react'
import {
    AiOutlineWhatsApp,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
  } from "react-icons/ai";
  
const Contact = () => {
  return (
    
    <div className='text-center'>
        <h1 className='text-4xl font-bold text-blue-300 ml-72 '>MY CONTACT</h1>
        <hr className='h-3 py-3 border-t-2 border-gray-500 w-72 ml-72'></hr>
        {/* <form className='py-3'>
          <div>
              <label for="email" className="text-white">Email:</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="email" className="text-white">Telephone:</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="message" class="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          </form> */}
       <p className='text-2xl font-bold '><strong className='text-2xl font-bold text-blue-300'>Email:</strong> filletteibyimana@.com</p> 
       <p className='mr-5 text-2xl font-bold'><strong className='text-2xl font-bold text-blue-300'> phone:</strong> 0784150477</p>
       <p className='text-2xl font-bold'><strong className='text-2xl font-bold text-blue-300'>Location:</strong> KG 209 St, Kigali,remera</p>
       <div className="flex mt-16 ml-32">
            <a  href="https://www.linkedin.com/jobs/"
              className="inline-block pr-4 text-blue-500 hover:text-lime-700">
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://web.whatsapp.com/"
              className="inline-block pr-4 text-blue-500 hover:text-lime-700"
            >
              {" "}
              <AiOutlineWhatsApp size={40} />{" "}
            </a>
            <a
              href="https://github.com/IBYIMANA"
              className="inline-block pr-4 text-blue-500 hover:text-lime-700"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.instagram.com/rwanamofillette/"
              className="inline-block pr-4 text-blue-500 hover:text-lime-700"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            </div>
    </div>
    
  )
}

export default Contact