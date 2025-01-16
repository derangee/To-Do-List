import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className=" text-xl flex gap-6 py-2 justify-between text-gray-200 bg-gray-900 ">
        <ul>
            <button className='ml-7'> <Link href="/">To-Do List</Link></button>
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
