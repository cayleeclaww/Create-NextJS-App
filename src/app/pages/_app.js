//This doesn't appear to affect anything, so I commented it out 
// import '../global.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


// import Script from "next/script";
// import Head from "next/head";
// import "../global.css";
// export default function MyApp({ Component, pageProps }) {
// return (
// <> 
//      <Head> 
//         <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
// crossOrigin="anonymous"
//         />
//     </Head>
//     <Script
//       id="bootstrap-cdn"
// src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
//      <Component {...pageProps} />
// </> );
// }

import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;