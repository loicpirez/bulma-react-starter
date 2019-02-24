import BulmaNavbar from 'react-bulma-components/lib/components/navbar'
import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const useOpenState = (initialOpenState = false) => {
  const [open, setOpen] = useState(initialOpenState)

  return {
    open,
    toggleOpen: _ => setOpen(!open)
  }
}

// TODO: Séparer dropdown dans un composant a part ainsi que le reste.

const Navbar = () => {
  const { open, toggleOpen } = useOpenState()
  const links = {
    '/second': 'Second',
    '/third': 'Third',
    '/fourth': 'Fourth',
    '/fifth': 'Fifth'
  }

  // const languages = {
  //   'french': 'Français',
  //   'english': 'Anglais',
  //   'chinese': 'Chinois'
  // }

  return (
    <BulmaNavbar
      active={open}
      // color='primary'
      // fixed='top'
      // Uncomment the line below and comment the lines above if you want a Navbar outside of the Bulma `hero`.
      transparent={true}
    >
      <BulmaNavbar.Brand>
        <LinkContainer to='/'>
          <BulmaNavbar.Item>
            <img
              src='https://bulma.io/images/bulma-logo-white.png'
              alt='Bulma: a modern CSS framework based on Flexbox'
            />
          </BulmaNavbar.Item>
        </LinkContainer>
        <BulmaNavbar.Burger
          active={open.toString()}
          onClick={toggleOpen}
        />
      </BulmaNavbar.Brand>
      <BulmaNavbar.Menu>
        <BulmaNavbar.Container>
          {Object.keys(links).map((name, index) => (
            <LinkContainer key={index} to={name}>
              <BulmaNavbar.Item>{links[name]}</BulmaNavbar.Item>
            </LinkContainer>
          ))}
        </BulmaNavbar.Container>
        {/* <BulmaNavbar.Container position='end'>
          <BulmaNavbar.Item dropdown hoverable>
            <a className='navbar-link'>
              Langue
            </a>
            <div className='navbar-dropdown' style={{
              backgroundColor: 'transparent'
            }}>
              <a className='navbar-item'>
                Français
              </a>
              <a className='navbar-item'>
                Anglais
              </a>
            </div>
          </BulmaNavbar.Item>
        </BulmaNavbar.Container> */}
      </BulmaNavbar.Menu>
    </BulmaNavbar>
  )
}

export default Navbar
