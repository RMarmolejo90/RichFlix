import Link from 'next/link'
import React from 'react'
import { UserButton, SignInButton, SignUpButton, auth } from "@clerk/nextjs";
import { Bebas_Neue } from "next/font/google";


const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ["latin"], 
  variable: '--font-bebas', 
});



export default function Navbar() {
  const { userId }: {userId: string | null} = auth();
  return (
    <div className='flex flex-row w-full align-top content-between p-2 z-50 bg-gradient-to-b from-[#09090bCC] absolute top-0'>
      <Link href="/">
        <h1 className={`${bebas.className} mr-auto text-red-600 p-2 text-4xl tracking-wider`}>
            RICHFLIX
        </h1>
      </Link>    
      <div className='ml-auto lg:my-8 font-semibold rounded-md tracking-widest text-lg'>
        
        {// if not logged in, display signin/signup buttons
        !userId ?
          <div className='flex flex-row'>
            <div className='m-2 hover:border-b-2 hover:cursor-pointer'>
              <SignInButton afterSignInUrl='/'/>
            </div>
            <div className='m-2 hover:border-b-2 hover:cursor-pointer'>
              <SignUpButton />
            </div>
          </div>
            :   // if logged in, display user button       
          <div>
            <UserButton 
              afterSignOutUrl="/"
            />
          </div> 
        }
      </div>
    </div>
  )
}
