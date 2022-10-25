import React from 'react'
import { Links } from './Links'
import { Logo } from './Logo'
import { HiChip } from "react-icons/hi";
import {links} from "../data/links"

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-blue-400'>
      <Logo icon={<HiChip className='text-red-700'/>} text="Andrew's epic store"/>
      <Links links={links}/>
    </div>
  )
}
