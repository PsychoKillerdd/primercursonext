import React from 'react'
import { Metadata } from 'next';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "Esta es solo una pagina de prueba con next",
    
  };
export default function About() {
  return (
    <>
    <Navigation />
    <Header title='About' backgroundColor='bg-green-400' />
    </>
  )
}
