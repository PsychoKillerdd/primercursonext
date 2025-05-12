import Navigation from '@/components/Navigation';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Contacto",
    description: "Esta es solo una pagina de prueba con next",
    
  };

export default function Contact() {
  return (
    <>
    <Navigation />
    <h1 className='bg-blue-700 text-white text-center p-28'>Contacto</h1>
    </>
  )
}
