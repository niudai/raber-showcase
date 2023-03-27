import Head from 'next/head';
import '../global.css';
import { initializeApp } from '@raber/react';
import '../comps';


initializeApp({
	publicKey: 'ZXrA6EruQkdOmZXryEymXDihtSR2'
})



// @ts-ignore
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Raber Showcases</title>

        <meta name="description" content="Make Your React App Visually Editable." />
      </Head>
      <Component {...pageProps} />
      </>
  )
}
