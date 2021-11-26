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
          Im good at writing code but bad at writing websites <code>"https://tinyurl.com/FridgeCoin"</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
