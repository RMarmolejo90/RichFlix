import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='bg-gradient-to-b from-transparent via-slate-900 to-transparent font-semibold py-10 mt-10 mb-20 p-10 flex flex-col justify-center text-center w-full h-[100vh] text-slate-50'>
      <h2 className='text-2xl p-10'>Not Found</h2>
      <p className='p-4 text-xl'>Could not find requested resource</p>
      <Link className='text-red-600 hover:font-bold text-4xl' href="/">Return Home</Link>
    </div>
  )
}