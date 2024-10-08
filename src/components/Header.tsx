import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl text-gray-800">Appro.dev</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#quality" className="text-gray-600 hover:text-blue-600">Our Quality</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header