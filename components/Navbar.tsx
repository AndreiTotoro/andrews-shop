import React from 'react'
import { Links } from './Links'
import { Logo } from './Logo'
import { HiChip } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div className='flex justify-between p-3 bg-blue-400'>
      <Logo icon={<HiChip className='text-red-700'/>} text="Andrew's epic store"/>
      <Links />
    </div>
  )
}
