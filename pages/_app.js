import "../styles/globals.css"
import Layout from "../components/Layout"

import SSRProvider from 'react-bootstrap/SSRProvider';
import { FaWhatsapp } from "react-icons/fa"
import styles from "../styles/Whatsapp.module.scss"

function MyApp({ Component, pageProps }) {
  return (
   <SSRProvider>
      
      <div className={ styles.Whatsapp1 }>
    <Layout>
          <Component {...pageProps} />
          <a href="http://wa.me/+2347063033152" target="_blank" className={ styles.chat} >
            <FaWhatsapp color="darkblue" size="60px"/>
            </a>
          </Layout>
          
        </ div>
      </SSRProvider>
  ) 
 }
   
export default MyApp
