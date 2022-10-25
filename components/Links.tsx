import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props{
  links: { text: string; url: string; id: number}[]
}

export const Links:FC<Props> = ({links}) => {
  const router = useRouter()
  return (
    <div className='flex gap-2 text-white'>
      {links.map((link) => {
        if(link.url == router.pathname){
          return <Link href={link.url} key={link.id}><a className='text-black underline'>{link.text}</a></Link>
        } else{
          return <Link href={link.url} key={link.id}>{link.text}</Link>
        }
        
      })}
    </div>
  )
}
