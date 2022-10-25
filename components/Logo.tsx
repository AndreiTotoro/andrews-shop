import React, { FC, ReactNode } from 'react'

interface Props{
  text: string
  icon: ReactNode
}

export const Logo:FC<Props> = ({text, icon}) => {
  return (
    <div className='flex items-center gap-1 text-white text-3xl'>
      {icon}
      <p>{text}</p>
      </div>
  )
}
