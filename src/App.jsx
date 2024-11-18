import React from 'react'
import Nabvar from './components/Nabvar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <Nabvar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero/>
      </div>
    </>
  )
}

export default App
