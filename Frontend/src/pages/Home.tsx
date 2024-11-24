// import { useState } from 'react'

import { Hero, Features, Footer, Contact, Navbar, Working } from "../components"
export default function LandingPage() {


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Navbar />

      <main>
        {/* Hero section */}
        <Hero />

        {/* Feature section */}
        <Features />

        {/* How it works section */}
        <Working />

        {/* Contact form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
