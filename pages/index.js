import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fridge coin" />
        <p className="description">
         
          0x832f266703942824316567cf6983c6adb28b6cf6 <code>"Same value as shiba, but 0.0001 of it circulation% nothing more to say:)"</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
