import React from 'react'
import { Link } from 'react-router-dom'
import man from '../assets/faces/OIG1.jpeg'
import man2 from '../assets/faces/OIG2.jpeg'
import man3 from '../assets/faces/OIG3.jpeg'
import man4 from '../assets/faces/OIG4.jpeg'

const index = () => {
  return (
    <div className="min-h-screen bg-white-900 text-black">
    <header className="text-center py-16">
      <h1 className="text-5xl font-bold mb-4">Design your ideal test now!</h1>
      <p className="text-lg mb-8">
        Explore innovative test designs that transform your ideas into reality.
      </p>
      <div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full mr-4">
        <Link to='/test'>Get Started</Link>  
        </button>
      </div>
    </header>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-16">
        <img src={man} alt="Placeholder" className="rounded-lg" />
        <img src={man2} alt="Placeholder" className="rounded-lg" />
        <img src={man3} alt="Placeholder" className="rounded-lg" />
        <img src={man4} alt="Placeholder" className="rounded-lg" />
      </section>

    <section className="bg-cream-300 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4 text-teal-900">Our Vision</h2>
      <p className="text-xl text-teal-800">
        Dedicated to crafting exceptional test designs for every need.
      </p>
    </section>

    <section className="py-16 px-4 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Featured Designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white text-teal-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Creative Solutions</h3>
          <p>Discover creative test solutions tailored for you.</p>
        </div>
        <div className="bg-white text-teal-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Innovative Ideas</h3>
          <p>Transform your innovative ideas into reality.</p>
        </div>
        <div className="bg-white text-teal-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Tailored Designs</h3>
          <p>Get tailored test designs for every requirement.</p>
        </div>
      </div>
    </section>
  </div>  )
}

export default index