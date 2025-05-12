import React from 'react'

import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
export const metadata: Metadata = {
    title: "Projectos",
    description: "Esta es solo una pagina de prueba con next",
    
  };


export default function page() {
  return (
    <>
    <Navigation />
    <div className="bg-orange-500 text-white text-center p-28 ">
        Projectos

    </div>
    </>
  )
}
