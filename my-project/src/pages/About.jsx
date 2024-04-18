import React from 'react';

function About() {
    return (
        <div>
            <h1 className='ml-24 text-3xl font-bold text-blue-500 hover:text-white'>About Me</h1>
            <hr className='w-32 -mt-2 ml-60'></hr>
            <p className='py-5 ml-24 text-2xl italic'> <p>Hello,Iam Theodette Fillette IBYIMANA, </p>
             <p> I study IT NETWORKING in UNILAK my current</p>
              software developer.I Studied MPC
             <p> Mathematic Physics and Computer</p>
             <p> in secondary school .i like to read books my skills
             </p>,HTML,JavaScript,PYTHON
             <p>  Iam a young and woman on a journey to</p>
              discover my true potential
              and make a positive impact in the world.
                </p> 
                
                <a href="images/fillette cv.docx">
                <button className='text-white bg-blue-500 w-28 h-11 ml-28 hover:bg-red-600 mb-28'> Download Cv</button>
                </a>
        </div>
    );
}

export default About;
