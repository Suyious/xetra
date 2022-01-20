import Head from 'next/head'
import Collections from '../components/Collections'
import Header from '../components/Header'
import ScrollTabs from '../components/ScrollTabs'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.Home_body}>
      <Head>
        <title>Xetra | Your Fashion One Stop</title>
        <meta name="description" content="Shop for the best fashion deal. Choose from several categories. Have what you deserve. At Xetra" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <ScrollTabs/>
      <Collections/>
    </div>
  )
}
