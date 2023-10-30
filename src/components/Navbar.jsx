"use client";

import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <div className='bg-blue-600 h-16 text-xl text-white py-2 px-3 flex justify-between items-center'>
      <div className='brand'>
        <h1>
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className='flex space-x-7 text-white'>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href="/add-task">Add Task</Link></li>
          <li><Link href="/show-task">Show Tasks</Link></li>
        </ul>
      </div>
      <div>
      <ul className='flex space-x-3 text-white'>
          <li><a href="#!">Login</a></li>
          <li><a href="#!">Signup</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
