import Footer from '../components/Layout/Footer'
import Navigation from '../components/Layout/Navigation'
import {Provider} from "react-redux"
import store from "../redux/store"
import '../styles/globals.css'
import { useEffect } from 'react'
import { loadUser } from '../redux/actions/userAction'

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);

    store.dispatch(loadUser());

  },[])

  return(
    <div>
      <Provider store={store}>
        <Navigation/>
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    </div>
  )

}

export default MyApp
