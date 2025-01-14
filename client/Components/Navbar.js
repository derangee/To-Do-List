import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-6 py-7">
        <ul>
            <button> <Link href="/">To-DO List</Link></button>
        </ul>

        <ul className='flex gap-6'>
            <li><a href="/">Home</a> </li>
            <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
