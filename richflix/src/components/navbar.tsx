import Link from 'next/link'
import React from 'react'
import { UserButton } from "@clerk/nextjs";

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
        <UserButton afterSignOutUrl="/"/>
    </nav>
  )
}
