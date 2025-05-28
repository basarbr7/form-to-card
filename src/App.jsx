import React, { useState } from 'react'
import CardPage from './page/CardPage'
import FormPage from './page/FormPage'


const data=[
    {
        title: "title1",
        desc: "Lorem ipsum dolor sit amet consectetur"
    },
    {
        title: "title2",
        desc: "Lorem ipsum dolor sit amet consectetur"
    }
]

const App = () => {

  const [formData, setFormData]= useState(data)

  const handleFormData =(data)=>{
    setFormData(prevData=>[...prevData, data])
  }

  return (
    <>
      <FormPage handleFormData={handleFormData}/>
      <CardPage data={formData}/>
    </>
  )
}

export default App