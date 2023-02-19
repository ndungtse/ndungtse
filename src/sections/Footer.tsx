import React from 'react'
import { useApp } from '../contexts/AppContext'

const Footer = () => {
  const { themeClass } = useApp()
  return (
    <div className={`w-full flex items-center ${themeClass.bg} justify-center`}>
      <p className='text-center text-md'>
        &copy; 2022 Ndungutse Charles - All rights reserved 
      </p>
    </div>
  )
}

export default Footer