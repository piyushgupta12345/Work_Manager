import React from 'react'

const Footer = () => {
  return (
    <footer className='h-40 bg-blue-600 mt-5'>
      <div className='flex p-5 justify-around'>
        <div className='text-center flex flex-col justify-center'>
          <h1 className='text-3xl'>Welcome to Work Manager</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, illum?</p>
        </div>
        <div>
          <h1>Important Links</h1>
          <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">Linkden</a></li>
            <li><a href="">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
