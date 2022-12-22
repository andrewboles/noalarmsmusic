import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>no alarms</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VE8yCQ" />
      </Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
