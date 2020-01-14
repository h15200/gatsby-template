import React from 'react'

import Nav from './nav'

import headerStyles from '../styles/Modules/header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.headerSection}>
      <h1 className={headerStyles.headerPrimary}>H1 Header</h1>
      <Nav />
    </header>
  )
}

export default Header
