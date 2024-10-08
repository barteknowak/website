import React, { useState } from 'react'
import ContactModal from './ContactModal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Innovative Software Solutions</h1>
        <p className="text-xl mb-8">We deliver high-quality software that drives your business forward</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300"
        >
          Contact Us
        </button>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Hero