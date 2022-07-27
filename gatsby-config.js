/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-vanilla-extract`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: `https://backus.co.jp/graphql`,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     password: process.env.GATSBY_SHOPIFY_ADMIN_PASSWORD,
    //     storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "Menu",
    //     fieldName: "AWSMenu",
    //     url: process.env.GATSBY_AWS_URL,
    //     headers: {
    //       'X-api-key': process.env.GATSBY_AWS_API_KEY,
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: "ShopifyAdmin",
    //     // This is field under which it's accessible
    //     fieldName: "AllShopifyAdmin",
    //     // Url to query from
    //     url: `https://${process.env.GATSBY_SHOP_NAME}.myshopify.com/admin/api/graphql.json`,
    //     headers: {
    //       // Learn about environment variables: https://gatsby.dev/env-vars
    //       'X-Shopify-Access-Token': `${process.env.SHOPIFY_ADMIN_PASSWORD}`,
    //       // 'Content-Type': 'application/graphql'
    //     },
    //     fetchOptions: {
    //       method: 'POST'
    //     },
    //     refetchInterval: 60
    //   },
    // },
    // resolve: 'gatsby-source-shopify-admin',
    // options: {
    //   storeName: process.env.GATSBY_SHOP_NAME,
    //   apiKey: process.env.SHOPIFY_ADMIN_PASSWORD,
    //   storefrontApiKey: process.env.SHOPIFY_APIKEY,
    //   onlyPublished: false, // only show products that are currently published on the 'publication' aka the private app
    //   pollInterval: 1000 * 10,
    //   //   imagesMetafields: {
    //   //     product: null,
    //   //     collection: null
    //   //   },
    //   //   relatedCollectionMetafields: null,
    //   //   verbose: false,
    //   //   restrictQueries: false, // Adds "(first: 1)" to collections query (then ONLY creates nodes for that collections product). Probably avoid using 'onlyPublished' at the same time, incase the 'first' collection returned isn't published on your sales channel (private app). This setting aims to help when builds are slow due to lots of images but you are happy to development with limited data; be warned this may create issues with data parity to Shopify (i.e. relatedCollectionMetafields would not have data if the selected collection isn't the 1 collection we have queried)
    // },

  ],
  // entry: {
  //   'index': [
  //     path.resolve(__dirname, 'src/index.js')
  //   ]
  // },
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'public'),
  //   publicPath: '/',
  // },
}
