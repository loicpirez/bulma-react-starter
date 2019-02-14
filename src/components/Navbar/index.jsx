import BulmaNavbar from 'react-bulma-components/lib/components/navbar'
import React, { useState } from 'react'

const useOpenState = (initialOpenState = false) => {
  const [open, setOpen] = useState(initialOpenState)

  return {
    open,
    toggleOpen: _ => setOpen(!open)
  }
}

const Navbar = () => {
  const { open, toggleOpen } = useOpenState()

  return (
    <BulmaNavbar
      color='primary'
      fixed='top'
      active={open}
      transparent={false}
    >
      <BulmaNavbar.Brand>
        <BulmaNavbar.Item renderAs='a' href='#'>
          <img
            src='https://bulma.io/images/bulma-logo-white.png'
            alt='Bulma: a modern CSS framework based on Flexbox'
          />
        </BulmaNavbar.Item>
        <BulmaNavbar.Burger
          active={open.toString()}
          onClick={toggleOpen}
        />
      </BulmaNavbar.Brand>
      <BulmaNavbar.Menu>
        <BulmaNavbar.Container>
          <BulmaNavbar.Item href='#'>Second</BulmaNavbar.Item>
        </BulmaNavbar.Container>
        <BulmaNavbar.Container position='end'>
          <BulmaNavbar.Item href='#'>At the end</BulmaNavbar.Item>
        </BulmaNavbar.Container>
      </BulmaNavbar.Menu>
    </BulmaNavbar>
  )
}

export default Navbar
