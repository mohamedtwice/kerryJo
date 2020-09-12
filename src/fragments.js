import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }

  fragment AvatarImage on File {
    childImageSharp {
      fixed(width: 80, height: 80) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }

  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }

  fragment PostPreviewContent on WpPost {
    uri
    title
    databaseId
    excerpt
    date
    featuredImage {
      remoteFile {
        ...Thumbnail
      }
    }
    author {
      name
      firstName
      lastName
      uri
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }

  fragment PostContent on WpPost {
    title
    content
    date
    excerpt
    featuredImage {
      remoteFile {
        publicURL
        ...HeroImage
      }
    }
    author {
      name
      firstName
      lastName
      uri
      description
      avatar {
        url
        width
        height
        imageFile {
          ...AvatarImage
        }
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }

  fragment PageContent on WpPage {
    title
    content
    databaseId
    pageHeaderImages {
        pageheaderOption
        pgBackgroundColor
        textColor
        primaryImage {
          altText
          remoteFile {
            id
            publicURL
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                srcSet
              }
            }
          }
          title
        }
        secondaryImage {
          altText
          remoteFile {
            id
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                srcSet
              }
            }
          }
          title
        }
      }
    featuredImage {
      remoteFile {
        ...HeroImage
      }
    }
  }
`
