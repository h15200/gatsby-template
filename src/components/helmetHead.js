import { Helmet } from "react-helmet"
import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>{`${props.title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="author" content="Hideaki Aomori" />
      <meta name="description" content="###" />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
