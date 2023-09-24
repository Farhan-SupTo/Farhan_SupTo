import React from 'react';
//images
import MyImage from '../assets/cover.png';
//icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodingninjas } from 'react-icons/si';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Image from 'react-bootstrap/Image';

const Banner = () => {



  return (
    <section className="min-h-[80vh] lg:min-h-[85vh] flex sm:justify-center" id='home'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 align-middle lg:flex-row lg:items-center lg:align-middle lg:gap-x-12">

          {/* {image} */}
          <motion.div variants={fadeIn('down', 0.5)}
            initial="hidden" whileInView={'show'}

            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]
          mx-auto justify-center mix-blend-lighten brightness-150 lg:pl-[8vw] mt-[6vh]">
            <Image src={MyImage} alt='' className='min-w-[42vw]' fluid />
          </motion.div>

          {/* {text} */}
          <motion.div variants={fadeIn('up', 0.3)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 text-center align-middle font-secondary lg:ml-[10vw] lg:text-left lg:w-4/5 sm:w-full text-2xl">



            <p className="text-cyan-600 mb-3">
              <span className='text-xl'>Hi there!</span>
              <span className="wave ml-3 text-4xl" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </p>

            <motion.h1 variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[6vh] leading-[0.8] lg:text-[6vh] font-semibold pb-2">
              <span className='text-cyan-700'>I'M</span>  SARVAGYA <span>SAXENA</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[3vh] lg:text-[3vh] font-secondary uppercase leading-[1] pt-1 flex flex-row lg:justify-start justify-center">

              <TypeAnimation sequence={[
                'Full-Stack Engineer',
                2000,
                'MERN and Next.js Developer',
                2000,
                'Blockchain Developer',
                2000,
                'AI/ML Engineer',
                2000,
                'React-Native Developer',
                2000,

              ]}
                speed={50}
                className="text-cyan-700 pt-2 font-extrabold text-2xl"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-10 mb-4 max-w-lg mx-auto text-[3vh] lg:text-[2vh] lg:mx-0">Nice to meet you. Please take a look around.</motion.p>
            <motion.div variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-5 mx-auto lg:mx-0 text-sm">
              <div>
                <Link to="work" activeClass='active'>
                  <button className="btn btn-sm hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
            transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700">
                    My Projects
                  </button>
                </Link>
              </div>
              <a href="https://drive.google.com/file/d/1izGevUmhfBDRbWRQ6Pd07kV2Q08E7m1g/view?usp=sharing"
                target="_blank" rel="noreferrer">
                <div
                  className="px-4 py-3 border-b-4 border-cyan-200 text-cyan-200 hover:text-white hover:bg-cyan-700 transition-all duration-200 w-[170px] flex justify-center flex-row items-center text-base"

                >
                  See my Resume
                  <HiArrowNarrowRight className='ml-3' />
                </div>
              </a>
            </motion.div>
            <div>
              <a href="/" className="text-gradient btn-link">FIND ME ON</a>
              {/* {Socials} */}
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="https://github.com/serverf21" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sarvagya-saxena-a8740195/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/user0367PG/" target="_blank" rel="noreferrer">
                  <SiLeetcode />
                </a>
                <a href="https://www.hackerrank.com/saxena_sarvagya1" target="_blank" rel="noreferrer">
                  <SiHackerrank />
                </a>
                <a href="https://www.codingninjas.com/studio/profile/b61adbc3-1a17-4936-9b8b-0f1c07b9282b" target="_blank" rel="noreferrer">
                  <SiCodingninjas />
                </a>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Banner;
