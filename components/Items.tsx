import React, { FC } from 'react'
import { Item } from './Item'
import {items} from '../data/items'

interface Props{
  itemsToShow: {
    id: number;
    image: JSX.Element;
    name: string;
    price: number;
    description: string;
    category: string;
}[]
}


export const Items:FC<Props> = ({itemsToShow}) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {itemsToShow.map((item) => {
        return <Item key={item.id} image={item.image} description={item.description} name={item.name} price={item.price}/>
      })}
    </div>
  )
}
