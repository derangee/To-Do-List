import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-6 py-7 justify-between ">
        <ul>
            <button> <Link href="/">To-DO List</Link></button>
        </ul>

        <ul className='flex gap-6'>
            <li><Link href="/">Home</Link> </li>
            <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
