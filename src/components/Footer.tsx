'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa6'
import {FaInstagram } from 'react-icons/fa6'
import {FaXTwitter} from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { FiSend  } from 'react-icons/fi'


const Footer = () => {
     const footerArray = [
          {
               icon: <FaGithub />,
               href: "https://github.com/nazmulcst",
          },
          {
               icon: <FaYoutube />,
               href: "https://www.youtube.com/",
          },
          {
               icon: <FaLinkedin />,
               href: "https://www.linkedin.com/",
          },
          {
               icon: <FaFacebookF />,
               href: "https://www.facebook.com/",
          },
          {
               icon: <FaInstagram />,
               href: "https://www.instagram.com/?hl=en",
          },
          {
               icon: <FaXTwitter/>,
               href: "https://x.com/?lang=en",
          },
          {
               icon: <FiMail />,
               href: "https://www.gmail.com/",
          },
          {
               icon: <FiSend />,
               href: "https://github.com/nazmulcst",
          },
     ];
     const pathName = usePathname()
     return (
          <footer className='w-full text-gray-400'>
               <p className='text-sm text-center'>
               A well-organized to-do list is your secret weapon for productivity. Break down tasks into manageable chunks, prioritize them, and check them off as you go. Watch your efficiency soar as you stay focused and in control of your day.
               </p>
               <div className='flex items-center justify-center gap-5 mt-4'>
               {footerArray?.map((item,index)=>(
                    <Link key={index} href={item?.href} target='blank'
                     className='w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-900 cursor-pointer
                     duration-500 hover:text-white border border-transparent
                     hover:border-gray-500 flex justify-center items-center '>
                    {item?.icon}
                    </Link>
               ))}
               </div>
               <Link href={pathName === "/" ?"/todo" : "/"} className='text-center text-sm flex
               items-center justify-center mt-2 underline underline-offset-4 decoration-[1px]
               hover:text-white duration-300'>
                    
                    {pathName === '/' ? 'todo page':'back to home'}
                    </Link>
          </footer>
     )
}

export default Footer
