import React from "react"
import Image from "next/image"
import styles from "../styles/Home_section.module.scss"
import Link from "next/link"
function Home_section({ title, button, url, details, leftStyles}) {

  return (
      <div className={styles.wrapper}>
      <div className={ leftStyles ==  "item_left" ? styles.item_left  : styles.item_order}>
        <div className={styles.pic2}>
        <Image
          className={styles.pic}
            src={ url }
          alt="Second slide"
            layout="fill"
            priority={ true }
          />
            <span>for let</span>
          
         </div>
                  
          </div>
        
      <div className={styles.item_right}>
        <h2>{ title }</h2>
        <p>{ details }</p>
              <button>
                  <Link href="/tolet">
                      <a>
                          { button }
                      </a>
    
                  </Link>
              </button>
              
          </div>
          
    </div>
  )
}

export default Home_section