import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const FormPage = ({ handleFormData }) => {
    const [title, setTitle]= useState('')
    const [desc, setDesc]= useState('')

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(title && desc){
            handleFormData({title, desc})
            setTitle('')
            setDesc('')
            toast("Added todo...",{
                pauseOnHover: false,
                theme: "dark"
            })
        }
    };
  return (
    <div className='flex flex-col max-w-sm mx-auto justify-center items-center mt-10'>
        <h2 className='text-3xl mb-5 '>Collect data from a Form</h2>
        <div className='w-full p-5 bg-green-500 '>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label>Title:</label>
                    <input type="text" name='title' value={title} className=' bg-white outline-none px-3 py-1' required onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Description:</label>
                    <textarea type="text" name='desc' value={desc} className=' bg-white outline-none px-3 py-1 min-h-[100px]' required onChange={(e)=>setDesc(e.target.value)} />
                </div>
                <button type='submit' className='bg-black text-white px-4 py-2 mt-3 cursor-pointer'>Send</button>
            </form>
            
        <ToastContainer />
        </div>
    </div>
  )
}

export default FormPage