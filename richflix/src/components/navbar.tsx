import Link from 'next/link'
import React from 'react'
import { UserButton, SignInButton, SignUpButton, auth } from "@clerk/nextjs";
import { Bebas_Neue } from "next/font/google";

const { userId }: {userId: string | null} = auth();

const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ["latin"], 
  variable: '--font-bebas', 
});



export default function Navbar() {
  return (
    <div className='flex flex-row w-full content-between p-2 z-50 bg-transparent absolute top-0'>
        <h1 className={`${bebas.className} mr-auto text-red-600 p-6 text-5xl tracking-wider`}>
            RICHFLIX
        </h1>
        <div className='ml-auto my-6 mr-8 font-semibold rounded-md tracking-widest text-lg'>
          
          {// if not logged in, display signin/signup buttons
          !userId ?
            <div>
              <SignInButton afterSignInUrl='/'/>
              <SignUpButton />
            </div>
              :   // if logged in, display user button       
            <div>
              <UserButton afterSignOutUrl="/"/>
            </div> 
          }
        </div>
    </div>
  )
}
