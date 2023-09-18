import Link from "next/link";
// import Head from "next/head";
import Script from 'next/script';
import Layout from '../../components/layout'; //Using CSS Modules like this creates unique container names, so there are never any naming conflicts 

// The <Head> </Head> tag does NOT work any longer - must be the below metadata object instead for each page
export const metadata = {
  title: "First Post",
  description: "The first post of Autoimmune Eats",
};

// The onLoad prop of Script does not work - throws following error: "Event handlers cannot be passed to Client Component props." More in notes. 
export default function FirstPost() {
  return (
    <Layout>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        // onLoad={() =>
          // console.log(`script loaded correctly, window.FB has been populated`)
        // }
      />
      {/* <Head> */}
      <title>First Post</title>
      {/* </Head> */}
      <h1>First Post</h1>
{/* Below no longer needed, as utils.module.css now contains this code  */}
      {/* <h2>
        <Link href="/">← Back to home</Link>
      </h2> */}
    </Layout>
  );
}
