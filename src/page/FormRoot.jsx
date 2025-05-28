
import React, { useState } from 'react'
import FormPage from './FormPage'
import CardPage from './CardPage'

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

const FormRoot= () => {

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

export default FormRoot