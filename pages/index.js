import Head from 'next/head'
import Header from '../components/Layout/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xetra | Your Fashion One Stop</title>
        <meta name="description" content="Shop for the best fashion deal. Choose from several categories. Have what you deserve. At Xetra" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:title" content="Xetra | Your Fashion One Stop"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xetra.netlify.app/OG-IMAGE.jpg"/>
        <meta property="og:url" content="https://xetra.netlify.app"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content="Shop for the best fashion deal. Choose from several categories. Have what you deserve. At Xetra"/>
        <meta property="og:site_name" content="Xetra | E-Commerce"/>
        <meta name="twitter:image:alt" content="Xetra | Fashion One Stop"/>
        <meta property="fb:app_id" content="suyashk" />
        <meta name="twitter:site" content="@suyashk"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
    </div>
  )
}
