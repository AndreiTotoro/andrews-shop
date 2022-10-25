import React, { FC, ReactNode } from 'react'

interface Props{
  image: ReactNode
  name: string
  price: number
  description: string
}

export const Item:FC<Props> = ({image, name, price, description}) => {
  return (
    <div className='flex flex-col bg-gray-400 basis-1/5 items-center rounded-md m-4 py-4'>
      <div className='text-6xl'>{image}</div>
      <p className='text-2xl'>{name}</p>
      <p className='text-md'>${price}</p>
      <p className='text-md'>{description}</p>
      <button className='bg-green-400 border-4 border-green-600 self-end my-3'>Add to Cart</button>
    </div>
  )
}
