import React from 'react';
import {
    AiOutlineWhatsApp,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
  } from "react-icons/ai";

  

function Home() {
    return (
        <div className='text-center -mt-9 '>
            <h1 className='text-6xl italic font-extrabold text-center ml-96 text-lime-200'> Developer and Designer..</h1>
            <p className='mt-16 ml-10 text-3xl italic font-bold text-blue-300'>Hello !!,</p>
           <p className='mt-16 text-3xl italic font-extrabold text-gray-200 ml-96'> Iam Theodette Fillette IBYIMANA</p>

            <div className="flex py-4 ml-96 pl-44">
            <a  href="https://www.linkedin.com/jobs/"
              className="inline-block pr-4 text-blue-500 hover:text-lime-700"
            >
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
            <img src="images/image.jpeg" className='ml-auto rounded-full h-60 w-60 mr-60'/>
        </div>
    );
}

export default Home;
