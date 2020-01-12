import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const Layout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
