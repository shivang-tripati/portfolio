"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import profileUrl from '@/public/profile.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const ref = useRef(null);
  useSectionInView(ref, 'Home', 0.4); // custom hook
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className='mb-30 max-w-[50rem] text-center scroll-mt-28 sm:mb-0' id='home'>
      <div className="flex items-center justify-center">
        <div className='relative w-[200px] h-[200px]'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className='w-full h-full mt-5 rounded-full overflow-hidden border-[0.3rem] border-white dark:border-gray-300 shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem]'
          >
            <Image
              src={profileUrl}
              alt="Shivang Tripathi"
              width={300}
              height={300}
              quality="100"
              priority={true}
              className='object-contain '
            />
          </motion.div>
          <motion.span
            className='absolute right-2 bottom-1 text-3xl font-bold'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 125, duration: 0.7, delay: 0.1 }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-11 mt-14 px-4 font-medium text-3xl sm:text-3xl leading-snug text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Shivang Tripathi.</span> A{' '}
        <span className="font-bold">full-stack developer</span> and a{' '}
        <span className="font-bold">cloud native enthusiast.</span> I enjoy building{' '}
        <span className="italic">software products and services.</span>
        <span className=""> My focus is on </span>
        <span className="underline">React (Next.js), Cloud (AWS)</span>{' '}
        <span>and</span>{' '}
        <span className="underline">DevOps.</span>
      </motion.h1>

      <div className='flex flex-col sm:flex-row gap-4 mb-10 items-center justify-center'>
        <Link
          href="#contact"
          className='group bg-gray-900 text-white items-center justify-center gap-2 px-7 py-3 flex rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-110 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className='opacity-80 group-hover:translate-x-1 transition mt-1' />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black dark:bg-white/10"
          href="/shivang-tripathi-cv.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/shivang-tripathi-4294ab26b/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          href="https://github.com/shivang-tripati"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
