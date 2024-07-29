import React from 'react'
import './Menu.css'
import Link from 'next/link'

export const Menu = ({menuItems}) => {
  return (
    <ul data-testid="menu" className='menu'>
      {
        menuItems.map(({id,path,text},index)=>{
          return  <li  id={id} key={index}><Link href={`/${path}`}>{text}</Link></li>
        })
      }
    </ul>
  )
}
