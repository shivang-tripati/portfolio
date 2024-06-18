"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { projectsData } from "@/lib/data";
import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  url,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8 , 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  useSectionInView(ref, "Projects", 0.8); // custom hook

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section
        className="bg-gray-100 p-4 sm:p-6 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden relative transition-all hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/70"
      >
        <div className='flex flex-col sm:flex-row sm:h-auto'>
          <div className='pt-4 pb-7 px-5 flex flex-col sm:flex-1'>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70 flex-grow'>{description}</p>
            <div className='mt-2'>
            <Link 
              className="bg-black/[0.9] px-3 py-2 w-full text-[0.8rem] text-center font-semibold
               text-white rounded-lg dark:text-white/70 hover:underline"
                href={url}>
                  Explore {title} 🚀
            </Link>
            </div>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  key={`${index}`}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] font-uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className='relative mt-6 sm:mt-0 sm:w-[50%] sm:max-w-[22rem] sm:order-first group-even:sm:order-last'>
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className='w-full h-auto max-w-full rounded-t-lg shadow-2xl duration-300 transform group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 sm:group-hover:group-even:translate-x-3 sm:group-hover:group-even:rotate-2'
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
