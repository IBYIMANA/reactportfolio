
import React from 'react'

const Skills = () => {
  return (
    <div > 
        <h2 className='text-4xl font-extrabold text-center text-white hover:text-blue-300'>MY Skills</h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-10 ml-60'>
        <div class="w-2/3 text-black bg-gray-200 rounded-2xl ml-14 hover:bg-orange-300">
        <img src="images/htm.png" className='w-16 ml-8'/>
          <p class="ml-8 text-black">
            HyperText Markup Language or <br />
            HTML is the standard markup language for documents designed to
            be displayed in a web browser. It defines the content and
            structure of web content. It is often assisted by technologies
            such as Cascading Style Sheets (CSS) and scripting languages
            such as JavaScript.
          </p>
        </div>
        <div class="float-right w-2/3 bg-gray-200 md:mb-624 rounded-2xl hover:bg-orange-300">
        <img src="images/cs.png" className='w-16 ml-8'/>
          <p class="ml-8 font-bold text-black">
            CSS (Cascading Style Sheets) allows you to create great-looking
            web pages, but how does it work under the hood? This article
            explains what CSS is with a simple syntax example and also
            covers some key terms about the language.
          </p>
        </div>
        <div class="w-2/3 text-black bg-gray-200 rounded-2xl ml-14 hover:bg-orange-300">
        <img src="images/lara.png" className='w-16 ml-8'/>
          <p class="ml-8">Laravel is an easy-to-use web framework that will help you create extensible PHP-based
            websites and web applications at scale.
            Before creating a web app or website, you need to make a foundational decision as to what technology
            you are going to use.
          </p>
        </div>
        <div class="w-2/3 text-black bg-gray-200 rounded-2xl hover:bg-orange-300 ">
        <img src="images/java.png" className='w-16 ml-8'/>
          <p class="ml-8">JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled
            programming
            language.
            It is also known as the scripting language for webpages.
            It is well-known for the development of web pages, and many non-browser environments also use it.
          </p>
        </div>
    </div>
    </div>
  )
}

export default Skills