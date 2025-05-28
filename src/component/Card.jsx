import React from 'react'

const Card = ({data}) => {
  return (
  <>
      {
        data.map((item, index)=>{
            const {title, desc}=item
            return <div key={index} className='w-[280px] bg-gray-200 p-4 rounded shadow'>
                <h2>{title}</h2>
                <h2>{desc}</h2>
            </div>
        })
    }
  </>
  )
}

export default Card