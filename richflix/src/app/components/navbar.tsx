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
    <div className='w-full flex flex-row align-top content-between p-2 z-50 bg-gradient-to-b from-[#09090bCC] absolute top-0'>
      <Link href="/">
        <h1 className={`${bebas.className} mr-auto m-2 text-red-600 text-xl lg:text-4xl tracking-wider`}>
            RICHFLIX
        </h1>
      </Link>    
      <div className='ml-auto lg:my-6 font-semibold rounded-md tracking-widest text-lg'>

        {// if not logged in, display signin/signup buttons
        !userId ?
        <div className='flex flex-row'>
            <Link className='lg:text-md text-sm m-2 hover:border-b-2 border-red-600 hover:cursor-pointer' href={'/search'}>Search</Link>
            <div className='lg:text-md text-sm m-2 hover:border-b-2 border-red-600 hover:cursor-pointer'>
              <SignInButton afterSignInUrl='/'/>
            </div>
            <div className='lg:text-md text-sm m-2 hover:border-b-2 border-red-600 hover:cursor-pointer'>
              <SignUpButton />
            </div>
          </div>
            :   // if logged in, display user button       
          <div className='w-full flex flex-row items-center justify-between'>
            <Link className='lg:text-md text-sm m-2 hover:border-b-2 border-red-600 hover:cursor-pointer' href={'/search'}>Search</Link>
            <Link className='lg:text-md text-sm mx-6 tracking-wider hover:border-b-2 border-red-600' href='/dashboard'>Dashboard</Link>
            <UserButton 
              afterSignOutUrl="/"
            />
          </div> 
        }
      </div>
    </div>
  )
}
