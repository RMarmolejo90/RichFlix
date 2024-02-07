import Link from 'next/link'
import React from 'react'
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ["latin"], 
  variable: '--font-bebas', 
});


export default function Navbar() {
  return (
    <div className='flex flex-row w-full content-between p-2 z-20 bg-transparent absolute top-0'>
        <h1 className={`${bebas.className} mr-auto text-red-600 p-6 text-5xl`}>
            RICHFLIX
        </h1>
        <div className='ml-auto my-6 mr-8 font-semibold rounded-md tracking-widest text-lg'>
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
    </div>
  )
}
