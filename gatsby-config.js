if (process.env.DEV) {
  require("dotenv").config({
    path: `.env.development`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const appName = process.env.GATSBY_APP_NAME;
const appUrl = process.env.GATSBY_APP_URL;
const awsS3Bucket = process.env.AWS_S3_BUCKET;

const siteAddress = new URL(appUrl);

module.exports = {
  siteMetadata: {
    title: appName,
    siteUrl: appUrl
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-env-variables",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: awsS3Bucket,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: appUrl,
        sitemap: appUrl+'/sitemap/sitemap-index.xml',
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    }
  ]
};
