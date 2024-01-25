import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <nav className='flex flex-row content-between'>
        <p className='mr-auto'>
            RichFlix
        </p>
        <ul className='ml-auto'>
            <li>
                <Link href={}></Link>
            </li>
        </ul>
    </nav>
  )
}
