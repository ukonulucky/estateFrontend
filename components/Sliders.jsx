import React, { useState } from 'react'
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap"
import styles from "../styles/Sliders.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"
function Sliders() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="5000" >

      <Carousel.Item className={styles.item}>
        <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view?&id=1YrVTL8BblgkeuOpN-T2jsAljC3BJUp1Q"
          alt="Second slide"
            layout="fill"
            objectFit="cover"
            priority={ true}
            
        />
        </div>
      </Carousel.Item>

    
      <Carousel.Item className={ styles.item }>
      <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view?&id=1hpZNv2Cm3tUkjFNV2phWB-bolALuUhlP"
          alt="House for sal"
          layout="fill"
            objectFit="cover"
            priority={ true}
          
          />
 
        </div>
        

      </Carousel.Item>
      <Carousel.Item className={ styles.item }>
      <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view?&id=1F30a1ATzd8xdDvauXwGf0gId3AGN-liA"
          alt="Second slide"
          layout="fill"
            objectFit="cover"
            priority={ true}
          
        />
        </div>
      </Carousel.Item>
      <Carousel.Item className={ styles.item }>
      <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view?&id=1xUBFRH4ipamOX_n_ZJ0bxhDbcSFo37E7"
          alt="Second slide"
          layout="fill"
            objectFit="cover"
            priority={ true}
          
        />
        </div>
        

      </Carousel.Item>
      <Carousel.Item className={ styles.item }>
      <div className={styles.pic}>
        <Image
            className="d-block w-100"
            src="https://drive.google.com/uc?export=view?&id=1-y0g6niNXW5broRiy-ygrBYxRzKADZPh"
            alt="Estate fro sale"
            layout="fill"
            objectFit="cover"
            priority={ true }
          
        />
        </div>
        "https://drive.google.com/uc?export=view?&id=1DQoRnFNmRfP9cZnHuZ-Y6_uhhE7lmWBI"
              
        
      </Carousel.Item>
      
    </Carousel>
  );
}




export default Sliders