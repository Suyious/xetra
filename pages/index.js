import Head from 'next/head'
import styles from "./style.module.css"
import RowsColumnGrid from '../components/Layout/Grids/RowsColumn'
import Header from '../components/Layout/Header'
import background from "../public/headerBackground.jpg"
import Tabs from '../components/Layout/Filters/Tabs'
import {useState} from 'react'
import SecondayCTA from '../components/Layout/Buttons/Secondary'

export default function Home() {

  const [tabSelected, setTabSelected] = useState(0);

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

      </Header>

      <div className={styles.Home_section}>
        <Tabs selected={tabSelected} setSelected={setTabSelected}>
          { ["Men", "Women", "Children", "Otters"] }
        </Tabs>
        <RowsColumnGrid gap={"1em 1.5em"}>
          { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
              <div key={i} style={{ background: "#fff1", height: "15em" }}>{num}</div>
          )) }
        </RowsColumnGrid>
        <div className={styles.centerInside}>
          <SecondayCTA padding={"0.3em 5em"}>See more</SecondayCTA>
        </div>
      </div>

    </div>
  )
}
