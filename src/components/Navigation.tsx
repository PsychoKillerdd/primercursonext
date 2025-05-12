import Link from 'next/link'
import React from 'react'
import pokemon from '@/assets/pokemongirls.jpg'
import Image from 'next/image'
export default function Navigation() {
  return (
<>
<ul className='flex w-full bg-slate-400 justify-between p-5 '>
  <li className='p-5'>
   <Link href="/">Home</Link>
  </li>
  <li className='p-5'>
   <Link href="/about">About</Link>
  </li>
  <li className='p-5'>
   <Link href="/blog">Blog</Link>
  </li>
 </ul>

  <Image src={pokemon} alt='pokemon' width={100} height={100} />

</>
)
}
