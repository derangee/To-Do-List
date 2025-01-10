import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-6 py-7 justify-center">
        <ul>
            <button>To-DO List</button>
        </ul>

        <ul className='flex gap-6'>
            <li>Home</li>
            <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
