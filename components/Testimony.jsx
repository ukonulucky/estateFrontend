import styles from "../styles/Testimony.module.scss"
import React from 'react'
import Image from "next/image"
import StarIcon from '@mui/icons-material/Star';
function Testimony({ image, details, id, index }) {
    const startRating = Array(5).fill().map((_,i) =>
                     { return (<span key={ i } ><StarIcon  /> </span>)})
  return (
      <div>
          <div className={ id == index + 1 ? styles.wrapper2 : styles.wrapper  }>
              <div className={styles.container}> 
                  <div className={styles.svg}>
                  <div className={styles.star}>
                      {
                      startRating
                    }
                  </div>
                 </div>
                  <div className={styles.comment}>
                      <p>
                          { details }
                      </p>

                  </div>
                  <div className={styles.pic}>
                      <Image src={ image } alt="user" layout="fill" priority={ true } />
                </div> 
                
                </div> 
          </div>
    </div>
  )
}

export default Testimony