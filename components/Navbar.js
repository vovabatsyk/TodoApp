import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center py-4'>
           <p className='text-2xl font-bold text-gray-800'>My Todos</p>
            <div className="flex">
                <a href="/api/logout" className='bg-blue-500 rounded hover:bg-blue-600 p-1 text-white'>Logout</a>
                <a href="/api/login" className='bg-blue-500 rounded hover:bg-blue-600 p-1 text-white'>Login</a>
            </div>
        </nav>
    )
}
