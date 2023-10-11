import Link from "next/link";
// import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout"; //Using CSS Modules like this creates unique container names, so there are never any naming conflicts
import "bootstrap/dist/css/bootstrap.css";

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

      {/* <div class="card" style={{width: '18rem'}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-footer">
    Card footer
  </div>
</div> */}

<div className="cardContainers" style={{display: "flex"}}>
<div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

      {/* Below no longer needed, as utils.module.css now contains this code  */}
      {/* <h2>
        <Link href="/">← Back to home</Link>
      </h2> */}
    </Layout>
  );
}
