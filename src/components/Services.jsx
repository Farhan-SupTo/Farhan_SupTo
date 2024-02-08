import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import myImg from '../assets/service.png';
import { Image } from 'react-bootstrap';

//services data
const services = [{
  name: 'Difference Between .js and .mjs Files in JavaScript',
  description: 'JavaScript is a versatile programming language used for both client-side and server-side development. However, you might have come across files with different extensions, such as .js and .mjs, and wondered about their distinctions. In this blog post, we will know the difference between these two file types and explore how they impact our JavaScript projects.',
  link: 'https://dev.to/nipu/js-cjs-and-mjs-defference-5f21#:~:text=js%20extension%20using%20the%20CommonJS,standardized%20way%20to%20define%20modules.'
},
{
  name: 'Useful commands for Git and GitHub',
  description: 'Git tracks your local changes, local versions. But when it comes to working as a team on different computers, you need to share your code/code-versions with your team members to work together on a centralized codebase. Here comes GitHub; it takes your local files on the cloud. You work on your local machine, track versions, then upload them on GitHub; your team members do the same. Thus a project code got centralized.',
  link: 'https://www.syncfusion.com/blogs/post/top-git-commands-for-developers.aspx'
},
{
  name: 'Automatic JWT Token setup in Postman',
  description: "While working with APIs, we test them in an API Client, and the most popular client is Postman. If the API has an authentication system, we log in through an endpoint and collect a JWT (JSON web token). Then we can access protected routes by setting the token into the header. We can automate this manual process by using Postman's environment variables. Before that, let's take an idea about Postman's environment variables.",
  link: 'https://medium.com/@sahilseth/automatic-auth-jwt-token-generation-in-postman-7861b25a5c85'
}
];

const Services = () => {
  return (
    <section className='section min-h-[90vh] pb-10' id="services">
      <div className="container mx-auto align-middle">
        <div className='flex flex-col lg:flex-row'>
          {/* {text & images} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-bottom bg-no-repeat
          mix-blend-exclusion mb-12 lg:mb-0'>
            <h2 className='h2 text-cyan-400 mb-4 lg:text-5xl'>TechTunes &nbsp; BLOG.</h2>
            <h3 className='text-lg max-w-[455px] mb-8'>Dive into a world of tech and dev insights, alongside thought-provoking analytical reports, all on my self-made blog website.</h3>
            <a href="https://sarvagya-next-sanity-blog.vercel.app/" target="_blank" rel="noreferrer">
              <button className='btn btn-sm
              hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
              transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700'>
                Blogs
              </button>
            </a>
            <Image src={myImg} alt="name" className='max-w-[25vw]' color='white' />
          </motion.div>
          {/* {services} */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* {service list} */}
            <div className='flex flex-col align-middle ml-[5vw]'>
              {services.map((services, index) => {
                //destructure services
                const { name, description, link } = services;
                return <div className="mb-[5vh] md:mb-[2vh] flex bg-gradient-to-r from-slate-900 via-amber-950
                rounded-lg to-gray-900 p-5 shadow-xl shadow-stone-800 transition-all hover:scale-110 duration-300"
                  key={index}>
                  <div className='min-w-[20vw] max-w-[70vw] md:mr-[4vw]'>
                    <h3 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'>{name}</h3>
                    <div className='font-thin leading-tight text-sm text-cyan-200'>{description}</div>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={link} className='btn w-9 h-9 mb-[42px] flex
                    justify-center items-center' target="_blank" rel="noreferrer">
                      <BsArrowUpRight />
                    </a>
                    <a href={link}
                      className="text-gradient text-sm"
                      target="_blank" rel="noreferrer"
                    >Learn More</a>
                  </div>
                </div>
              })}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Services;
