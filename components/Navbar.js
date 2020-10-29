import React from 'react'

export default function Navbar({ user }) {
  return (
    <nav className='flex justify-between items-center py-4'>
      <p className='text-2xl font-bold text-gray-800'>My Todos</p>
      <div className='flex'>
        {user && (
          <a
            href='/api/logout'
            className='bg-blue-500 rounded hover:bg-blue-700 p-1 text-white'
          >
            Logout
          </a>
        )}
        {!user && (
          <a
            href='/api/login'
            className='bg-blue-500 rounded hover:bg-blue-700 p-1 text-white'
          >
            Login
          </a>
        )}
      </div>
    </nav>
  )
}
