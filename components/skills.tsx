"use client"
import React, { useRef } from 'react'
import { skillsData } from '@/lib/data'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.04 * (index),
        }
    })
}


export default function Skills() {

    const ref = useRef(null)
    useSectionInView(ref, "Skills", 0.8)
  return (
    <section 
    ref={ref} id='skills'
    className='mb-28 max-w-[55rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsData.map((skill, index) => (
                <motion.li 
                className=' bg-white border-black/[0.1] rounded-xl px-5 py-2 dark:bg-black/40 dark:text-white/80'
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial" whileInView="animate" 
                custom={index}
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}
