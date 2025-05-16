import React from 'react'
import Link from 'next/link';

export default function Topbanner() {
  return (
   <>
   <div className='bg-[#03363e] text-white p-5 text-center'>
    <ul className='flex justify-center text-sm gap-3 '>
        <li>CX Trends 2024</li>
        <li>Unlock growth with costumer service</li>
        <li><Link href={'#'} className='underline'>Get the report</Link></li>
    </ul>
    </div>
   </>
  )
}
