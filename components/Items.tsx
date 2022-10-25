import React from 'react'
import { Item } from './Item'
import { HiAcademicCap } from "react-icons/hi2";


export const Items = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      <Item description='ad' image={<HiAcademicCap />} name="aa" price='19'/>
      <Item description='ad' image={<HiAcademicCap />} name="aa" price='19'/>
      <Item description='ad' image={<HiAcademicCap />} name="aa" price='19'/>
      <Item description='ad' image={<HiAcademicCap />} name="aa" price='19'/>
    </div>
  )
}
