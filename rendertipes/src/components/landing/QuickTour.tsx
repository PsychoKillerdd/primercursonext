import React from 'react'
import Image from 'next/image'
import maisan from '@/assets/images/maisan.jpg'

export default function QuickTour() {
  return (
    <>
    <div className="bg-[#e4f0d3] h-[100dvh]">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-[#17494c] mx-auto text-center mb-5 ">Quick Tour</h3>
            <p className='text-[rgb(23,73,76)] text-sm max-w-2xl text-center  mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <Image
        className='mx-auto my-16
        '
          src={maisan}
          alt="Descripción de la imagen"
          width={500}
          height={500}
        />


    </div>
    </>
  )
}
