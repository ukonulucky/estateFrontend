import styles from "../styles/Team__members.module.scss"
import React from 'react'
import Image from "next/image"
function Team__members({ image, details, fullName }) {
    
  return (
      <div>
          <div className={ styles.wrapper }>
              <div className={styles.container}>
              <div className={styles.pic}>
                      <Image src={ image } alt="user" layout="fill" priority={ true } />
                </div> 
                      <div className="info">
                      <h3>
                          { fullName }
                     </h3>
                          <p>
                         
                          { details }
                           
                          </p>

                  </div>
                 
                
                </div> 
         
          </div>
    </div>
  )
}

export default Team__members