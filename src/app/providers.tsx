'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

interface Props {
  children: React.ReactNode
  poppins: any
}

const Providers = ({ children, poppins }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
    <body
      className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}
    >
      {/* <body className='bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden'> */}
      {children}
      <Analytics />
      <SpeedInsights />
    </body>
  </ThemeProvider>
  )
}

export default Providers