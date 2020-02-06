module.exports = {
  siteMetadata: {
    title: 'untitled',
    // siteUrl: 'https://www.Example.com',
    description: 'explain this website'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            // family: `Oswald`,
            // subsets: [`latin`],
          },
          {
            // family: `Open Sans`,
            // variants: [`400`, `700`]
          },
        ],
      }
    }
  ]
}
