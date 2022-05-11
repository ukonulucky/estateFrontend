import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Sliders from '../components/Sliders'
import styles from '../styles/Home.module.css'
import HomePage from "../components/HomePage"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      
        <title>Home Page</title>
        <meta name="description" content="A real Estate Firm in Lagos for house letting and property leasing " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="index">
          <Sliders />
          <HomePage />
        </div>
</body>
     
    </div>
  )
}
