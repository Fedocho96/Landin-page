import React from 'react'
import Nabvar from './components/Nabvar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'

const App = () => {
  return (
    <>
      <Nabvar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero/>
        <Feature/>
        <Workflow/>
        <Pricing/>
      </div>
    </>
  )
}

export default App
