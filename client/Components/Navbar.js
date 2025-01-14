import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className=" text-xl flex gap-6 py-2 justify-between bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
        <ul>
            <button className='ml-7'> <Link href="/">To-DO List</Link></button>
        </ul>

        <ul className='text-xl flex gap-6 mr-[2vw]'>
            <li><Link href="/">Home</Link> </li>
            <li><Link href="/about">About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
