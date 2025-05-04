import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Blog",
    description: "Esta es solo una pagina de prueba con next",
    
  };
export default function page() {
  return (
    <div className="bg-red-500 text-white text-center p-28 ">
        Blog
        </div>
  )
}
