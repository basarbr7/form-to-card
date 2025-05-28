import React from 'react'
import Card from '../component/Card'

const CardPage = ({data}) => {
  return (
    <div className='max-w-[1200px] mx-auto flex gap-5 flex-wrap mt-10'>
        <Card data={data}/>
    </div>
  )
}

export default CardPage