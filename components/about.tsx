"use client"
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { motion, useInView } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';



export default function About() {

  const ref = useRef(null)
  useSectionInView(ref, "About", 0.8) // custom-hooks


  return (
    <motion.section 
        ref={ref}
        className='mb-28 mt-16 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity:0, y: 100}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.175}}
        id='about'
        >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            Hello! I'm a passionate full-stack developer with a strong proficiency in the{" "}
            <span className="font-medium">MERN (MongoDB, Express.js, React, Node.js) stack</span>. 
            My journey in web development has been marked by a commitment to learning, innovation, and delivering high-quality projects.
        </p>
        <p className="mb-3">
            I am always eager to learn and take on new challenges, and I thrive in environments that push me to grow and innovate. Whether it's developing a new feature, optimizing performance, or tackling a complex problem, I am dedicated to delivering the best possible results.
        </p>
        <p className="mb-3">
            Feel free to explore my portfolio to see some of the projects I've worked on and to get a sense of my coding style and capabilities. If you have any questions or would like to collaborate, don't hesitate to reach out!
        </p>
    </motion.section>
    

  )
}
