import React from 'react'
import Nabvar from './components/Nabvar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Nabvar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero/>
        <Feature/>
        <Workflow/>
        <Pricing/>
        <Footer/>
      </div>
    </>
  )
}

export default App
