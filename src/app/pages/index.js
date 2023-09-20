// // This appears to do nothing - instead, change app/page.js
// having issues deploying to Vercel...... commenting out this code in hopes it will work 




// // import Head from 'next/head';
// // import Layout, { siteTitle } from '../components/layout';
// // import utilStyles from '../styles/utils.module.css';
// // import { getSortedPostsData } from '../lib/posts';

// // export async function getStaticProps() {
// //   const allPostsData = getSortedPostsData();
// //   return {
// //     props: {
// //       allPostsData,
// //     },
// //   };
// // }
// // export default function Home() {
// //   return (
// //     <Layout home>
// //       <Head>
// //         <title>{siteTitle}</title>
// //       </Head>
// //       <section className={utilStyles.headingMd}>
// //         <p>Hi is this actually going to work?</p>
// //         <p>
// //           (This is a sample website - you’ll be building a site like this on{' '}
// //           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
// //         </p>
// //       </section>
// //     </Layout>
// //   );
// // }








// import Head from "next/head";
// import Layout, { siteTitle } from "./components/layout";
// import utilStyles from "./utils.module.css";
// import { getSortedPostsData } from "../lib/posts";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Wow this is kind of working!</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{" "}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>

//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               {title}
//               <br />
//               {id}
//               <br />
//               {date}
//             </li>
//           ))}
//         </ul>
//       </section>
      
//     </Layout>
//   );
// }
