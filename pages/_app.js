import Head from 'next/head'
import { Global } from '@emotion/react'
import xw from 'xwind'
import { MoralisProvider } from "react-moralis"

function App({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} >
      <Head>
        <title>React Metaverse</title>
      </Head>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />
      <Component {...pageProps} />
    </MoralisProvider>
    
  )
}

export default App
