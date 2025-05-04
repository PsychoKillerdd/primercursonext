import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "Esta es solo una pagina de prueba con next",
    
  };
export default function Contact() {
  return (
    <>
    <h1 className='bg-green-700 text-white text-center p-28'>Contacto</h1>
    </>
  )
}
