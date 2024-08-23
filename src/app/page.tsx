import Footer from '@/components/Footer';
import InputForm from '@/components/InputForm';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Home | Todo Application",
  description: "A todo app for learning purpose",
};




const HomePage = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-slate-100 via-slate-300 to slate-400 flex flex-col py-6 items-center px-2 md:p-4'>
       <div className=' w-full max-w-screen-md bg-bodyColor p-4 md:p-2 lg:p-10 rounded-md flex flex-col gap-5'>
        <InputForm />
        <Footer />
       </div>
    </div>
  )
}

export default HomePage;
