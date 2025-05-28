import React, { useState } from 'react'

const Form = () => {
    const [title, setTitle]= useState('')
    const [desc, setDesc]= useState('')

    const handleSubmit= (e)=>{
        e.preventDefault();
    };

  return (
    <div className='flex flex-col max-w-sm mx-auto justify-center items-center mt-10'>
        <h2>Collect data from a Form</h2>
        <div className='w-full p-5 bg-green-500 flex flex-col gap-5'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <label>Title:</label>
                    <input type="text" name='title' value={title} className=' bg-white outline-none px-3 py-1' onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Description:</label>
                    <textarea type="text" name='desc' value={desc} className=' bg-white outline-none px-3 py-1 min-h-[100px] ' onChange={(e)=>setDesc(e.target.value)} />
                </div>
                <button type='submit' className='bg-black text-white px-4 py-2 mt-3 cursor-pointer'>Send</button>
            </form>
            
        </div>
    </div>
  )
}

export default Form