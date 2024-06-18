import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {

  const {pending} = useFormStatus()

  return (
    
    <button 
                className=' group bg-black text-white rounded-lg p-3 
                flex items-center justify-center gap-3 transition-all 
                focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105
                 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-60'
                 type='submit'
                 disabled={pending}
                 >
                  {pending ? (
                    <div className='h-6 w-6 animate-spin rounded-full 
                    border-2 border-white'></div>
                  ) : (
                    <>
                    Submit{" "}
                    <FaPaperPlane
                    className="text-sm opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                     />{" "}
                    </>
                  )
                  }
                </button>
  )
}
