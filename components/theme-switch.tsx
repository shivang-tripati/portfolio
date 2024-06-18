"use client"
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = 'light' | 'dark';

export default function ThemeSwitcher() {

    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        if (theme === "light") {
          setTheme("dark");
          window.localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
        } else {
          setTheme("light");
          window.localStorage.setItem("theme", "light");
          document.documentElement.classList.remove("dark");
        }
      };
    
      useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
    
        if (localTheme) {
          setTheme(localTheme);
    
          if (localTheme === "dark") {
            document.documentElement.classList.add("dark");
          }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark");
          document.documentElement.classList.add("dark");
        }
      }, []);

  return (
    <button className='fixed bottom-5 right-5 bg-white bg-opacity-80 p-2
    h-[2.5rem] w-[2.5rem] rounded-full border border-black  dark:border-gray-500 backdrop-blur-[0.5rem]
    border-opacity-30 shadow-2xl flex items-center justify-center 
    hove:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 opacity-90 '
    
    onClick={toggleTheme}
    >
    
    {theme === "light" ? <BsSun size={22} /> : <BsMoon size={22}/> }
    </button>
  )
}
