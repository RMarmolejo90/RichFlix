import Link from 'next/link'
import React from 'react'
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Bebas_Neue } from 'next/font/google'

export default function Navbar() {
  return (
    <div className='flex flex-row content-between p-2'>
        <h1 className='mr-auto font-[Bebas_Neue] text-red-600 p-4 text-lg'>
            RICHFLIX
        </h1>
        <SignedIn>
          <UserButton afterSignOutUrl="/"/>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
    </div>
  )
}
