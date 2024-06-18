"use client"
import React, {useRef} from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import SubmitBtn from './submit-btn'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import {sendEmail} from '@/actions/sendEmail'
import toast from 'react-hot-toast'

export default function Contact() {

    const ref = useRef(null);
    useSectionInView(ref, "Contact", 0.5); // custom hook
    
    const formRef = useRef<HTMLFormElement | null>(null);
  return (
    
    <motion.section
         ref={ref}
        id='contact'
        className='mb-20 sm:mb-28  w-[min(100%, 42rem)]'
    >
        <SectionHeading>Contact</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
            Please contact me directly at{" "}
            <a 
            href='mailto:shivangtripathi101@gmail.com'
            className='underline'
            >
                shivangtripathi101@gmail.com{" "}
            </a>    
            or through this from.
        </p>

            <form 
            ref={formRef}
            onSubmit={async (e) => {
              e.preventDefault();
              if (formRef.current) {
                const formData = new FormData(formRef.current);
                const { data, error } = await sendEmail(formData);
    
                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("Email sent successfully!");
                formRef.current.reset();
              }
            }}
                className='mt-10 flex flex-col'>
                    
                <input
                className="h-14 px-4 rounded-lg borderBlack  dark:text-black dark:bg-white dark:bg-opacity-95 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
                />
                <input
                className="h-14 px-4 mt-3 rounded-lg dark:text-black borderBlack dark:bg-white dark:bg-opacity-95 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="senderName"
                type="text"
                required
                maxLength={500}
                placeholder="Your Name"
                />
                <textarea typeof='text'
                className='h-52 my-3 rounded-lg border dark:text-black dark:bg-white dark:bg-opacity-100 border-black/10 p-4'
                required
                name='message'
                maxLength={5000}
                placeholder='Your message'
                />
                <SubmitBtn/>

            </form>
        
    </motion.section>
  )
}
