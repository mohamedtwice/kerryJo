// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import Layout from "./Layout"
// import Seo from "./Seo"
// import FeaturedMedia from "./FeaturedMedia"
// import Slider from "./Slider"

// export default function Home() {
//   return (
//     <StaticQuery
//       query={graphql`
//         query HomeQuery {
//           Wp {
//             themeGeneralSettings {
//               homePage {
//                 buttonLink {
//                   target
//                   title
//                   url
//                 }
//                 buttonText
//                 heroImage {
//                   id
//                 }
//                 heroTitle
//                 heroText
//               }
//             }
//           }
//         }
//       `}
//       render={(data) => (
//         <Layout>
//           {/*<Seo title={title} description={excerpt} />*/}

//           <h1>{data.Wp.themeGeneralSettings.homePage.heroTitle}</h1>

//           <Slider />
//           <article>
//             <div className="post-inner thin"></div>
//           </article>
//         </Layout>
//       )}
//     />
//   )
// }
