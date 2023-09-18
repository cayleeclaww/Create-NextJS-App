import Link from 'next/link';
import Head from 'next/head';


// The <Head> </Head> tag does NOT work any longer - must be the below metadata object instead for each page
export const metadata = {
  title: 'First Post',
  description: 'The first post of Autoimmune Eats',
}

export default function FirstPost() {
  return (
    <>
      {/* <Head> */} 
        <title>First Post</title>
      {/* </Head> */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}