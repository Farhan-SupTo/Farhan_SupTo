import React from 'react';
//motion
import { motion } from 'framer-motion';
//variant 
import { fadeIn } from '../variants';
//img
import blog from '../assets/projects/blog.png';
import race from '../assets/projects/racing.png';

import trello from '../assets/projects/trello.png';
// Work Experience

import { CiServer } from "react-icons/ci";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const Work = () => {
  return (
    <section className='section flex flex-col' id="work">
      <div className="container mx-auto align-middle">
        <div className='flex flex-col lg:flex-row gap-x-10 gap-y-10 align-middle m-5 lg:m-0'>
          {/* Left-text and Left-Image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-6 mb-2 lg:mb-0'>
            {/* {text} */}
            <div>
              <h2 className='h2 leading-tight text-cyan-500 lg:text-5xl font-tertiary'>
                My
                Projects
              </h2>
              <p className="max-w-lg mb-10 text-sm font-semibold">
                <span className='text-xl'>I learn the fun way — by building cool stuff!</span>
                <br /><br />
                As a web developer, my motive is to build effective, visually stunning, and intuitive web applications that enhance user experience and drive business success.Thanks for watching.
              </p>

              <p className='text-cyan-500 text-base text-center invisible lg:visible'>
                Hover over the blocks to know more!
              </p>
            </div>
            {/* {image} */}
            <div className='flex flex-row space-x-3 h-full'>
              {/* Left Image 1 */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
                <a href="https://skill-sculpt.web.app/" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={race} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                    Skill-Sculpt
                    </div>
                    <div className="md:text-xl text-sm">
                      People can buy Skill development course.
                    </div>
                    <div className="md:text-xl text-sm text-cyan-500">
                      Technology
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'> HTML | CSS | Tailwind CSS | Daisy UI | React JS | Node JS | Express | Firebase | Mongo DB</div>
                   <div className='flex justify-between'>
                    <div className='flex items-center  text-blue-500 hover:text-blue-700 duration-300 transition'>
                    <FaGithub></FaGithub>
                      
                    <a href="https://github.com/Farhan-SupTo/SkillSculpt_client" className='pl-1'>Client Site</a>
                    </div>
                    <div className='flex items-center  text-red-500 hover:text-red-700 duration-300 transition'>
                    <CiServer></CiServer>
                    <a href="https://github.com/Farhan-SupTo/Skill_Sculpt-server" className='pl-1'>Server Site</a>
                    </div>
                    <div className='flex items-center  text-green-500 hover:text-green-700 duration-300 transition pr-2'>
                    <FaExternalLinkAlt />
                    <a href="https://skill-sculpt.web.app/" className='pl-1'>Live Website</a>
                    </div>
                
                   </div>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Image-top-right */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            {/* Right image 1 */}
            <div className='flex flex-row space-x-3 h-full'>

              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg cursor-pointer">
              <a href="https://tastytraverse-656af.web.app/" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={blog} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      Taste Traverse
                    </div>
                    <div className="md:text-xl text-sm">
                    Customers of all preferences can place an order for their desired food options at this establishment,with any devices..
                    </div>
                    <div className="md:text-xl text-sm text-cyan-500">
                      Technology
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'> HTML | CSS | Tailwind CSS | Daisy UI | React JS | Node JS | Express | Firebase | Mongo DB | JWT Authentication</div>
                   <div className='flex justify-between'>
                    <div className='flex items-center  text-blue-500 hover:text-blue-700 duration-300 transition'>
                    <FaGithub></FaGithub>
                      
                    <a href="https://github.com/Farhan-SupTo/TastyTraverse-client" className='pl-1'>Client Site</a>
                    </div>
                    <div className='flex items-center  text-red-500 hover:text-red-700 duration-300 transition'>
                    <CiServer></CiServer>
                    <a href="https://github.com/Farhan-SupTo/TastyTraverse-server" className='pl-1'>Server Site</a>
                    </div>
                    <div className='flex items-center  text-green-500 hover:text-green-700 duration-300 transition pr-2'>
                    <FaExternalLinkAlt />
                    <a href="https://tastytraverse-656af.web.app/" className='pl-1'>Live Website</a>
                    </div>
                
                   </div>
                  </div>
                </a>

              </div>
            </div>
            {/* Right image 2 */}
            <div className='flex flex-row space-x-3 h-full'>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
              <a href="https://vum-pros.web.app/" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={trello} alt="" />
{/* hh */}
                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      Yola
                    </div>
                    <div className="md:text-xl text-sm">
                      People can buy  Yoga Courses course.
                    </div>
                    <div className="md:text-xl text-sm text-cyan-500">
                      Technology
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'> HTML | CSS | Tailwind CSS | Daisy UI | React JS | Node JS | Express | Firebase | Mongo DB | JWT Authentication</div>
                   <div className='flex justify-between'>
                    <div className='flex items-center  text-blue-500 hover:text-blue-700 duration-300 transition'>
                    <FaGithub></FaGithub>
                      
                    <a href="https://github.com/Farhan-SupTo/YogaMaster" className='pl-1'>Client Site</a>
                    </div>
                    <div className='flex items-center  text-red-500 hover:text-red-700 duration-300 transition'>
                    <CiServer></CiServer>
                    <a href="https://github.com/Farhan-SupTo/YogaMaster-server" className='pl-1'>Server Site</a>
                    </div>
                    <div className='flex items-center  text-green-500 hover:text-green-700 duration-300 transition pr-2'>
                    <FaExternalLinkAlt />
                    <a href="https://vum-pros.web.app/" className='pl-1'>Live Website</a>
                    </div>
                
                   </div>
                  </div>
                </a>

              </div>
            </div>
            {/* Right-down */}


          </motion.div>

        </div>
      </div>
      <a href="https://github.com/Farhan-SupTo" target="_blank" rel="noreferrer">
                <button className="btn btn-sm mt-12
                hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700">
                  View all projects
                </button>
              </a>
    </section>
  );
};

export default Work;
