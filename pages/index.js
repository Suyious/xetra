import Head from 'next/head'
import Collections from '../components/Collections'
import Header from '../components/Header'
// import ScrollTabs from '../components/ScrollTabs'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.Home_body}>
      <Head>
        <title>Xetra | Your Fashion One Stop</title>
        <meta name="description" content="Shop for the best fashion deal. Choose from several categories. Have what you deserve. At Xetra" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:title" content="Xetra | Your Fashion One Stop"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://xetra.netlify.app/OG-IMAGE.jpg"/>
        <meta property="og:url" content="http://xetra.netlify.app"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content="Shop for the best fashion deal. Choose from several categories. Have what you deserve. At Xetra"/>
        <meta property="og:site_name" content="Xetra | E-Commerce"/>
        <meta name="twitter:image:alt" content="Xetra | Fashion One Stop"/>
        <meta property="fb:app_id" content="suyashk" />
        <meta name="twitter:site" content="@suyashk"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {/* <ScrollTabs/> */}
      <Collections/>
    </div>
  )
}
