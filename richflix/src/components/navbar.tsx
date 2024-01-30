import Link from 'next/link'
import React from 'react'
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className='flex flex-row content-between'>
        <p className='mr-auto'>
            RichFlix
        </p>
        <SignedIn>
          <UserButton afterSignOutUrl="/"/>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
    </div>
  )
}
