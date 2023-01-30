import Head from 'next/head'
import { MoralisProvider } from "react-moralis"

function App({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} >
      <Head>
        <title>React Metaverse</title>
      </Head>
    
      <Component {...pageProps} />
    </MoralisProvider>
    
  )
}

export default App