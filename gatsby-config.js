require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `KerryJo Felder 4 Minneapolis School Board: District 2`,
    siteUrl: 'https://www.kerryjo4schoolboard.com/',
    description: `Kerry Jo is a MPS parent who believes the district belongs to its parents and students.`,
    author: `@mohknowsreal`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-180639079-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    'gatsby-plugin-sitemap',
    `gatsby-plugin-notifications`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "tnh3qtn",
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        verbose: true,
        schema: {
          queryDepth: 5,
          typePrefix: `Wp`,
          timeout: 30000,
        },
        develop: {
          nodeUpdateInterval: 3000,
          hardCacheMediaFiles: false,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          // these settings are all the defaults,
          // remove them if you'd like
          graphql: {
            showQueryOnError: false,
            showQueryVarsOnError: true,
            copyQueryOnError: false,
            panicOnError: true,
            // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
            onlyReportCriticalErrors: true,
          },
        },
        plugins: [
          {
            resolve: `gatsby-wordpress-experimental-inline-images`,
            options: {
              baseUrl: process.env.WP_BASE_URL,
              protocol: `https`,
            },
          },
        ],
        // fields can be excluded globally.
        // this example is for wp-graphql-gutenberg.
        // since we can get block data on the `block` field
        // we don't need these fields
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  35
                : // and we don't actually need more than 5000 in production
                  5000,
          },
          User: {
            excludeFieldNames: [
              `extraCapabilities`,
              `capKey`,
              `email`,
              `registeredDate`,
            ],
          },
          // this shows how to exclude entire types from the schema
          // these examples are for wp-graphql-gutenberg
          CoreParagraphBlockAttributes: {
            exclude: true,
          },
          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },
          CorePullquoteBlockAttributes: {
            exclude: true,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          locale: "en_US",
          language: "en",
          url: "https://www.kerryjo4schoolboard.com/",
          site_name: "KerryJo Felder 4 Minneapolis School Board: District 2",
          title: "KerryJo Felder 4 Minneapolis School Board: District 2",
          titleTemplate: "%s | KerryJo Felder 4 Minneapolis School Board: District 2",
          description:
            "Kerry Jo is a MPS parent who believes the district belongs to its parents and students. She will work hard to lift your voice in creating solutions that address local disparities and make schools you are proud to call your own.",
          images: [
            {
              url:
                "https://res.cloudinary.com/bsmg/image/upload/v1602794017/KerryJo/kj-homeimage_drjskt.png",
              width: 1200,
              height: 600,
              alt: "KerryJo Felder 4 Minneapolis School Board: District 2",
            },
          ],
        },
        twitter: {
          cardType: "summary_large_image",
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
  ],
}
