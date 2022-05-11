import React from "react"
import Image from "next/image"
import styles from "../styles/Properties.module.scss"
import Link from "next/link"
function Properties({ url, details, link }){
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.text}>
       
              <div className={styles.pic}>
                <Image
                src={ url }
                alt="Property for Sale"
            layout="fill"
            priority={ true }
          />
        <span>for sale</span>
              </div>
              <p>
                  { details }
              </p>
              <button>
              <Link href={ link }>
                      <a>
                         View Property
                      </a>
    
                  </Link>
          </button>
          </div>
            
          </div>
       
  )
}

export default Properties