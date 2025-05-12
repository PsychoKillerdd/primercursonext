import React from 'react'

type HeaderProps = {
    title: string
    backgroundColor: string
}

export default function Header({title,backgroundColor}:HeaderProps) {
  return (
    <>
    <div className={  ` bg-cyan-400 ${backgroundColor} text-white text-center p-28`}>
        <h1>{title}</h1>
    </div>
    </>
  )
}
