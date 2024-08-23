import Footer from '@/components/Footer';
import TodoList from '@/components/TodoList';
import React from 'react'

const TodoPage = () => {
  return (
     <div className='w-full min-h-screen bg-gradient-to-r from-slate-100 via-slate-300 to slate-400 flex flex-col py-6 items-center px-2 md:p-4'>
     <div className=' w-full max-w-screen-md bg-bodyColor p-4 md:p-2 lg:p-10 rounded-md flex flex-col gap-5'>
          <p className='text-xl font-semibold underline underline-offset-1 decoration-[1px]'>
               Todo Page</p>
     <TodoList/>
      <Footer />
     </div>
  </div>
  )
}

export default TodoPage;
