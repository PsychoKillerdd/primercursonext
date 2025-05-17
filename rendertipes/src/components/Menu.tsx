import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <menu className='w-72 mx-auto text-center pt-10'>
          <ul>
            <li>
              <Link href="/ssr-landing" className='mb-3  block w-full bg-slate-200 hover:bg-slate-400  p-2 rounded-md'>SSR(Server Side Rendering)</Link>
            </li>
            <li>
              <Link href="/csr-password" className='mb-3  block w-full bg-slate-200 hover:bg-slate-400  p-2 rounded-md'>SSG(Static Site Generation)</Link>
            </li>
            <li>
              <Link href="/" className='mb-3 block w-full bg-slate-200 hover:bg-slate-400  p-2 rounded-md'>DR(Dynamic Rendering)</Link>
            </li>
          </ul>
        </menu>
  )
}
