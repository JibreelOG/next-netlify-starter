import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jaffa Coin!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Jaffa coin" />
        <p className="description">
         
          0x53efc5b94b4ce81eae13fb7af13634794ddc2f73 <code>"Less value as shiba, but 0.0001 of it circulation% nothing more to say:)"</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
