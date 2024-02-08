//tech I have worked on
import { React } from "react";
import '../index.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import SkillBlock from "./SkillBlock";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di'
import { BiLogoTailwindCss, BiLogoJavascript, BiLogoReact } from 'react-icons/bi'
import { TbBrandNextjs, TbBrandRedux,TbBrandBootstrap } from 'react-icons/tb';
import {
    SiTypescript, SiExpress, SiDjango,
    SiSolidity, SiHyperledger, SiTensorflow, SiKeras, SiOpenai, SiMongodb, SiMysql
} from 'react-icons/si';
import { FaEthereum,FaNodeJs } from 'react-icons/fa';

// Remove bars and put circular icons divided by sections

const Skills = () => {

    return (
        <section className='section min-h-fit top-0 pb-16' id="skills">
            <div className="container mx-auto align-middle">
                <div className='md:gap-x-5 gap-y-6 md:gap-y-2 align-middle'>
                    {/* <!--   *******  Main Heading Starts  *******   --> */}
                    <motion.div
                        variants={fadeIn('top', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="container main-title flex text-center justify-center flex-col mb-5">

                        <h1 className="h1 text-cyan-500 text-5xl font-primary">MY SKILLS</h1>

                        <p>Elevating Skills, One Tech at a Time.</p>
                    </motion.div>

                    <div className="main-container flex justify-center flex-col lg:flex-row md:flex-col top-0">
                        {/* Left Container */}
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:mx-auto flex justify-center flex-col align-top bg-gray-900 border rounded-xl">

                            <div className="lg:max-w-[25vw] lg:min-w-[20vw] mx-5">
                                <h1 className="title-text">Web Development</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <AiFillHtml5 size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <DiCss3 size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <BiLogoTailwindCss size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <BiLogoJavascript size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <BiLogoReact size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <TbBrandBootstrap size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <FaNodeJs size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiExpress size={60} color="primary" />

                                    </div>

                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiMysql size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <TbBrandRedux size={60} color="primary" />

                                    </div>



                                </div>

                            </div>


                        </motion.div>

                        {/* Mid Container */}
                        <div className="sm:mx-auto flex justify-center flex-col align-middle">

                            <motion.div
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className="lg:max-w-[25vw] lg:min-w-[20vw] mx-2">
                                <h1 className="title-text">Frontend</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent flex flex-col tracking-wider">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://i.ibb.co/ByC4XqX/html-5-2.png"
                                            alt="Metamask"
                                            className="hover:text-accent h-12"
                                        />
                                        HTML

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent flex flex-col tracking-wider">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://i.ibb.co/SmZZcbb/css-3.png"
                                            alt="Metamask"
                                            className="hover:text-accent h-12"
                                        />
                                        CSS

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent flex flex-col tracking-wider">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img className="h-12" src="https://static-00.iconduck.com/assets.00/file-type-tailwind-icon-512x307-l0anq79h.png"
                                        />
                                        Tailwind

                                    </div>
                                    <div className="group relative overflow-hidden h-[12vh] w-[10vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent flex flex-col tracking-wider">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img className="h-12" src="https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
                                        />
                                        Bootstrap

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-4 my-5 justify-center items-center cursor-pointer hover:text-accent flex flex-col tracking-wider">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                            alt="Metamask"
                                            className="h-12"
                                        />
                                       JavaScript

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-4 my-5 justify-center items-center cursor-pointer hover:text-accent flex flex-col tracking-wider">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                            className="hover:text-accent h-12"
                                        />
                                       React

                                    </div>


                                </div>

                            </motion.div>

                            <motion.div
                                variants={fadeIn('down', 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                                className="lg:max-w-[25vw] lg:min-w-[20vw] mx-2">
                                <h1 className="title-text">Tools</h1>
                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                            className="hover:text-accent h-12"
                                        />
                                      GitHub

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                                            className="hover:text-accent h-12"
                                        />
                                      Figma

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
                                            className="hover:text-accent h-12"
                                        />
                                      Netlify

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
                                            className="hover:text-accent h-12"
                                        />
                                      Vercel

                                    </div>
                                    <div className="group relative overflow-hidden h-[12vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://i.ibb.co/LQ9cyNR/Screenshot-64-removebg-preview.png"
                                            className="hover:text-accent h-12"
                                        />
                                     <h2 className="text-center">Chrome DevTools</h2>

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                                            className="hover:text-accent h-12"
                                        />
                                      VS Code

                                    </div>

                                </div>
                            </motion.div>
                        </div>

                        {/* Right Container */}
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:mx-auto flex justify-center flex-col align-top">

                            <div className="lg:max-w-[25vw] lg:min-w-[20vw] mx-5">
                                <h1 className="title-text">Backend</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://i.ibb.co/sjNppJN/png-transparent-js-logo-node-logos-and-brands-icon-removebg-preview.png"
                                            className="hover:text-accent h-12"
                                        />
                                      Node JS

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
                                            className="hover:text-accent h-12"
                                        />
                                      Express

                                    </div>
                                    <div className="group relative overflow-hidden h-[11vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                                            className="hover:text-accent h-12"
                                        />
                                      Firebase

                                    </div>
                                    <div className="group relative overflow-hidden h-[12vh] w-[13vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://media-exp1.licdn.com/dms/image/D4D12AQHW9aRSWIOMxQ/article-cover_image-shrink_600_2000/0/1657421703592?e=2147483647&v=beta&t=nKygyfSDFwgPdEoC-nEkogMS0527SBa8z8D_FqUr-us"
                                            className="hover:text-accent h-11"
                                        />
                                          <h2 className="text-center">JWT Authentication</h2>

                                    </div>

                                    

                                   


                                </div>

                            </div>

                            <div className="lg:max-w-[25vw] lg:min-w-[20vw] mx-5">
                                <h1 className="title-text">Database</h1>
                                <div className="flex flex-row flex-wrap justify-center">
                                    
                                <div className="group relative overflow-hidden h-[26vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png"
                                            className="hover:text-accent h-12"
                                        />
                                      Mongo DB

                                    </div>
                                <div className="group relative overflow-hidden h-[26vh] w-[10vh]
                                    mx-3 my-3 flex flex-col justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <img src="https://pngimg.com/uploads/mysql/mysql_PNG11.png"
                                            className="hover:text-accent h-12"
                                        />
                                      MySQL

                                    </div>



                                </div>
                            </div>


                        </motion.div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Skills;
