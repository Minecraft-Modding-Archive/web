import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

export default function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Minecraft Modding Archive</title>
        <meta name="description" content="Minecraft Modding Archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
