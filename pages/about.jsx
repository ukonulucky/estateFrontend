import styles from "../styles/About.module.scss";
import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import AppsIcon from "@mui/icons-material/Apps";
import ToolTipDisplay from "../components/ToolTips";
import { useEffect } from "react"

function About({ word, heading }) {
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');
  }, [])
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap.bundle.js") : null
  }, [])
    return (
      <div className={styles.container}>
        <div className={styles.wrapperOuter}>
          <div className={styles.wrapper}>
            <div className={styles.pic}>
              <Image
                src="https://drive.google.com/uc?export=view?&id=1LxHAwR_u5e91Hgdoaf8OSmGvmuilE2qO"
                layout="fill"
                quality="100"
                objectFit="cover"
                priority="true"
              />
            </div>
          </div>
          <div className={styles.content3}>
            <div className={styles.wrapper}>
              <h2>Who We Are</h2>
              <div className={styles.content4}>
                <div className={styles.item}>
                  <span>
                  </span>
                  <span>
                    <AppsIcon />
                  </span>
                  <span>
                  </span>
                </div>
            
              </div>
              <div className={styles.text}>
                <p>
                  We believe that our business is more than housing we are
                  building lives & nations in Africa.
                </p>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.text}>
                <p>
                  VicksHomes has built its reputation on the abilities to respond quickly
                  to opportunities in the market place by selling of real estate as cost
                  effective as possible while maintaining the highest level of service with a history of positive
                  performance on behalf of our clients. <br />
                  Our company is not confined by traditional real estate boundaries
                  when it comes to buying, selling, and renting asset management, instead we are always
                  coming up with new innovative ways to satisfy our client’s need and be the leading
                  company in the real estate industry.  <br />
                  Our team is hands-on when it comes to making sure
                  that all our properties are in good condition,
                  location and perfect view before showing it to the clients.
                  We also work continually to interpret and act upon economic forces in the marketplace.
                  And with every transaction, we stress on creative solving coupled with judicious
                  application of sound real estate principles.
                </p>
              </div>
              <div className={styles.carousel}>
              <iframe  src="https://www.youtube.com/embed/cCGPBTHIBEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.wrapper}>
              <div className={styles.mission}>
                <span>
                  <div className={styles.pic}>
                    <div className={styles.innerPic}>
                      <Image priority="true" src="/images/icons/diamondIcon2.png" layout="fill" alt="logo" />
                    </div>
                  </div>
                </span>
                <span>
                  <h2>Our Mission</h2>
                </span>
                <span>
                  <p>
                    "To provide comprehensive and integrated property services and solutions to landlords, buyers, developers and property investors that can favorably compete with other leading brands in the real estate industry."
                  </p>
                </span>
              </div>
              <div className={styles.vission}>
                <span>
                  <div className={styles.pic}>
                    <div className={styles.innerPic}>
                      <Image src="/images/icons/rocketIcon3.png" priority="true" layout="fill" alt="logo" />
                    </div>    
                  </div>
                </span>
                <span>
                  <h2>
                    Our Vission
                  </h2>
                </span>
                <span>
                  <p>
                    "To be an outstanding real estate property management industry with authentic level of service on the basic of our core value of integrity and professionalism."
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <h2>OUR CORE VALUES</h2>
            <span>
            </span>
            <p>
              Our corevalues are derived from the level of trust we have built over the years with our clients.
            </p>
            <div className={styles.value1}>
            <div className={styles.col1}>
              <div className={styles.list}>
                <span>
                  <div className={styles.pic}>
                    <Image src="/images/icons/bulbIcon.png" priority="true" className={styles.logo} alt="logo" layout="fill" />
                  </div>
                </span>
                <span>
                <p>
                <ToolTipDisplay heading="T-RUTHS" word={ <p> we never bend the truth for us to acheive our sales, we make sure that we always provide the truth when it comes to information of our properties.</p>} />
                  </p>
                </span>
                </div>
                <div className={styles.list}>
                <span>
                  <div className={styles.pic}>
                    <Image src="/images/icons/puzzleIcon.png" className={styles.logo} alt="logo" layout="fill" />
                  </div>
                </span>
                <span>
                <p>
                <ToolTipDisplay heading="S-KILLED" word={ <p>We make sure that our teams are well built when it comes to attitude for us woring together as a team.</p>} />
                  </p>
                </span>
              </div>
              
                </div>
             
              <div className={styles.col1}>
              <div className={styles.list}>
                <span>
                  <div className={styles.pic}>
                    <Image src="/images/icons/puzzleIcon.png" className={styles.logo} alt="logo" layout="fill" />
                  </div>
                </span>
                <span>
                <p>
                <ToolTipDisplay heading="R-ESPONSIBLE" word={ <p> We make sure that the responsibilities of each member of our team are responsible enough to respond all the needs and enquiries of our clients in a professional way.</p>} />
                  </p>
                </span>
                </div>
            <div className={styles.list}>
                <span>
                  <div className={styles.pic}>
                    <Image src="/images/icons/bulbIcon.png" priority="true" className={styles.logo} alt="logo" layout="fill" />
                  </div>
                </span>
                <span>
                  <p>
                  <ToolTipDisplay heading="T-EAMWORK" word={ <p>Our team of professional are well trained to ensure 100% satisfactions to our clients.</p>} />
                  </p>
                </span>
              </div>
   
             
              </div>
              <div className={styles.col1}>
            <div className={styles.list}>
                <span>
                  <div className={styles.pic}>
                    <Image src="/images/icons/bulbIcon.png" priority="true" className={styles.logo} alt="logo" layout="fill" />
                  </div>
                </span>
                <span>
                  <p>
                  <ToolTipDisplay heading="U-NDERSTANDING" word={ <p>understanding the client’s needs is one of the most important part of our customers service, by knowing what they need our team is always able to provide suggestions and recommendations to our clients. </p>} />
                  </p>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    );
  }

export default About;
