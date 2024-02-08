import React from 'react';
//countup
import CountUp from 'react-countup';
//intsersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
//To add link to contact 
import { Link } from 'react-scroll';

// bg-slate-800
// bg-stone-700
//#AA4465
//#3D0814

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  // mix-blend-exclusion
  return (
    <section className='section sm:bottom-2 ' id="about" ref={ref}>
      <div className="container md:mx-auto md:flex md:justify-center">

        <div className='flex flex-col items-center align-middle justify-center lg:flex-row
        lg:items-center h-screen lg:space-x-[2vw] md:p-4'>
          {/* {img} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="invisible sm:flex-1 sm:bg-about sm:bg-contain sm:bg-no-repeat md:h-[90vh] md:w-[40vw]
            sm:bg-center sm:visible w-[50vw] ">
          </motion.div>
          {/* {text} */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 xl:leading-9">
            <h2 className='h2 text-accent text-5xl lg:text-[5vh] font-tertiary'>About me</h2>
            <h4 className='h4 mb-4 lg:text-[2.5vh]'>A Junior Full Stack Developer</h4>

            <p className='text-base font-extralight xl:text-[2vh] xl:leading-9 xl:w-[700px]'>

            As a web developer, my motive is to build effective, visually stunning, and intuitive web applications that enhance user experience and drive business success.I am a skilled web developer with experience in &nbsp;
              <span className='text-yellow-400'>HTML, CSS, JavaScript, ES6, and MongoDB</span>.
              Also my soft skills are 
              <span className='text-yellow-400'> communication, Problem-Solving,Critical Thinking, Teamwork, and Leadership.</span>, I have knowledge of popular frameworks such as 

              <span className='text-yellow-400 '> React </span>
              and experience with

              <span className='text-yellow-400'> REST APIs, expressJS, and Firebase frameworks.</span>

            </p>
            <br />


            {/* {stats} */}
            <div className="flex gap-x-2 lg:gap-x-10 mb-12">

              <div>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={1} /> : 0}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Months of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : 100}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Open-Source  <br />
                  Contributions
                </div>
              </div>

              <div className='invisible md:visible'>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : 20}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Technologies <br />
                  Mastered and still learning
                </div>
              </div>

            </div>
            <div className="hidden md:flex md:gap-x-8 md:items-center md:mb-5">
              <Link to="contact" activeClass='active'>
                <button className='btn btn-lg
                hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700'>
                  Say "Hi"! &nbsp; <span className='text-2xl'>🙋🏽‍♂️</span>
                </button>
              </Link>
              <a href="https://drive.google.com/file/d/1U4Qa8JJsSq1I1ui7fXwi283ORShpAb7s/view?usp=sharing" target="_blank" rel="noreferrer">
                <button className='btn btn-lg
                hover:text-blue-950 tracking-wider hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700'>
                  Curriculum Vitae
                </button>
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default About;


