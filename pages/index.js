import Head from 'next/head'
import styles from "./style.module.css"
// import RowsColumnGrid from '../components/Layout/Grids/RowsColumn'
import Header from '../components/Layout/Header'
import background from "../public/headerBackground.jpg"
// import Tabs from '../components/Layout/Filters/Tabs'
import {useState} from 'react'
import SearchBar from '../components/Layout/Inputs/SearchBar'
import { useRouter } from 'next/router'
// import SecondayCTA from '../components/Layout/Buttons/Secondary'
// import product from '../assets/data/products'
// import HomeProductCard from '../components/product/Cards/HomeProductCard'

export default function Home() {

  const [keyword, setKeyword] = useState("");

  const router = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      router.push(`/product?keyword=${keyword}`);
    }
  };


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

      <Header background={background}>
        <div className={styles.Welcome_main}>
          <div className={styles.Welcome_searchbar}>
            <SearchBar onSubmit={searchHandler} placeholder="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
            <p>Look up what you want to wear today</p>
          </div>
        </div>
      </Header>

    </div>
  )
}
