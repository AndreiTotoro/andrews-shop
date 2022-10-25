import React from 'react'
import { Item } from './Item'
import {items} from '../data/items'



export const Items = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      {items.map((item) => {
        return <Item key={item.id} image={item.image} description={item.description} name={item.name} price={item.price}/>
      })}
    </div>
  )
}
