import Footer from '../components/Layout/Footer'
import Navigation from '../components/Layout/Navigation'
import {Provider} from "react-redux"
import store from "../redux/store"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
