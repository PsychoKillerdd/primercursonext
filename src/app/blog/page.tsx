import React from 'react'
import { Metadata } from 'next';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
export const metadata: Metadata = {
    title: "Blog",
    description: "Esta es solo una pagina de prueba con next",
    
  };
export default function page() {
  return (
    <>
    <Navigation />
    <Header title='Blog' backgroundColor='bg-red-400' />
    </>
  )
}
