import Link from 'next/link';
import React, { FC } from 'react'

interface Props{
  links: { text: string; url: string; id: number}[]
}

export const Links:FC<Props> = ({links}) => {
  return (
    <div className='flex gap-2'>
      {links.map((link) => {
        return <Link href={link.url} key={link.id}>{link.text}</Link>
      })}
    </div>
  )
}
