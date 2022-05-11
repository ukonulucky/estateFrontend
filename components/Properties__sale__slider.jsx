import React from "react"
import Image from "next/image"
import styles from "../styles/properties__sale__slider.module.scss"
import Link from "next/link"
import { HiLocationMarker,HiPhone, HiMail  } from "react-icons/hi"
import { Carousel, CarouselItem} from "react-bootstrap"
function Properties__sale__slider({ picArray, link, details}) {
  const carouselArray = picArray.map((i, j) => {
      return  <CarouselItem key={ j }>
      <img
      className="d-block w-100"
        src={ i }
          alt="slider"
    />
   </CarouselItem>
 
  })
  return (
    <div className={styles.wrapper}>
              <div className={styles.wrapper__slider}>
              <Carousel>
          {carouselArray}
         
             </Carousel>
      </div>
      <div className={ styles.wrapper__description}>
        <h2>{ link }</h2>
        <div className={styles.contact}>
        <HiLocationMarker color="darkblue" />
       
          <small>{details}</small>
        </div>
          <div className={ styles.contact}>
            <HiPhone  color="darkblue" />
          <small>
          +2349028506555,
          +2349038760160
            </small>
        </div>
        
        <div className={styles.contact}>
        <HiMail color="darkblue" />
            <small>vickshomess@gmail.com</small>
        </div>
      </div>
        </div>
       
  )
}

export default Properties__sale__slider
