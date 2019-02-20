import React from 'react'
import Hero from './Hero'
import Content from './Content'

const Main = (props) => {
  return (
    <div className='main'>
      <Hero />
      {/* TODO: location dans le state redux */}
      <Content {...props} />
    </div>
  )
}

export default Main
