import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center text-center w-full h-full bg-slate-900 text-slate-50'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='text-red-600 text-4xl' href="/">Return Home</Link>
    </div>
  )
}