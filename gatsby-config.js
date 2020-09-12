require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `South Dallas Smiles Dental Clinic`,
    description: `South Dallas Smiles Dental is committed to "Making Dentistry Personal Again."`,
    author: `@mohknowsreal`,
  },
  plugins: [
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
          id: "pvc6kng",
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
          url: "https://www.saintpaulpromiseneighborhood.org/",
          site_name: "Saint Paul Promise Neighborhood",
          title: "Saint Paul Promise Neighborhood",
          titleTemplate: "%s | Saint Paul Promise Neighborhood",
          description:
            "The Saint Paul Promise Neighborhood is an education partnership that puts children in the Frogtown, Rondo, and Summit-University neighborhoods of Saint Paul on the pathway to college and career success.",
          images: [
            {
              url:
                "https://res.cloudinary.com/afrodeli/image/upload/v1598909776/sppn-videodocs-1536x864_qmhtpk.png",
              width: 1536,
              height: 864,
              alt: "Saint Paul Promise Neighborhood",
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
