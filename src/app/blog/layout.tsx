import React from 'react'

export default function Bloglayout({children} : Readonly<{children: React.ReactNode}>) {
  return (
    <>
    <div className='bg-amber-300'>hola</div>
    {children}
    </>
  )
}
