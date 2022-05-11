import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Testimony from "./Testimony";
import Home_section from "./Home_section";
import styles from "../styles/HomePage.module.scss";
import Properties from "./Properties";
import Team__members from "./Team__members";
import { Carousel } from "react-bootstrap";
import MultipleItems from "./Sliders3";
import SimpleSlider from "./Sliders2";

function HomePage() {
  const testimonyArray = [
    {
      image: "/images/clients/client6.jpeg",
      details:
        "value 1Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
    {
      image: "/images/clients/client7.jpeg",
      details:
        "value2 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
    {
      image: "/images/clients/client8.jpeg",
      details:
        "value 3Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
    {
      image: "/images/clients/client9.jpeg",
      word: "hover",
      details:
        "value 4 index 3 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
    {
      image: "/images/clients/client1.jpeg",
      details:
        "value 5 index 4 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
    {
      image: "/images/clients/client2.jpeg",
      details:
        "value 6 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
    {
      image: "/images/clients/client3.jpeg",
      details:
        "value7 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
    {
      image: "/images/clients/client4.jpeg",
      details:
        "value 8 index 4 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
    {
      image: "/images/clients/client5.jpeg",
      details:
        "value 9 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
    },
  ];
  const userArray = new Array(20).fill([...testimonyArray]);
  const testimony1 = [...userArray.flat()];

  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle.js")
      : null;
  }, []);
  const [index, setIndex] = useState(0);

  const [index2, setIndex2] = useState(0);

  const [slide, setSlide] = useState(0);

  const handleClick = (value) => {
    const result = teamMembersArray.length - 3;

    if (value === "r") {
      setSlide(slide !== result ? slide + 1 : 0);
    }
    if (value === "l") {
      setSlide(slide !== 0 ? slide - 1 : result);
    }
  };

  // const HouseArray = [
  //   {
  //     leftStyles: "item_left",
  //     button: "View Property",
  //     title: "5 BEDROOM DUPLEX",
  //     details:"LUXURY LISTING... 5 BEDROOM DETACHED DUPLEX WITH A SWIMMING POOL, AND A ROOM BQ FOR SALE. LOCATION: IKOTA, LEKKI LAGOS",
  //     image: "/images/for__sale/flat2/frontView.webp"
  //   },
  //   {
  //     leftStyles: "item_order",
  //     button: "View Property",
  //     image:"/images/for__sale/flat1/frontview.webp",
  //     title: "2 bedroom flat for Rent",
  //     details:
  //       "Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
  //   },
  //   {
  //     leftStyles: "item_left",
  //     button: "View Property",
  //     image: "/images/for__sale/flat3/flat3__frontView.webp",
  //     title: "A duplex for Sale",
  //     details:
  //       "Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
  //   },
  // ];

  const letArray = [
    {
      link: "/sale",
      details:"LUXURY LISTING ‼‼‼  5 BEDROOM DETACHED DUPLEX WITH A SWIMMING POOL,  AND A ROOM BQ FOR SALE. LOCATION: IKOTA, LEKKI LAGOS",
      image: "https://drive.google.com/uc?export=view?&id=1PD9PCAWCR1jG_pIUNo27ipeNq-gqTMl6"
    },
    {
      link: "/sale",
      details:"NEW LISTING ‼‼‼ FULLY DETACHED 6 BEDROOM DUPLEX WITH AN OPEN ROOF TERRACE, SWIMMING POOL AND BQ FOR SALE.",
      image: "https://drive.google.com/uc?export=view?&id=1jQgykGurU5kc563eE2vZyUiUIJrRZabe"
    },
    {
      link: "/sale",
      details:"NEW LISTING ‼‼‼ 6 BEDROOM DETACHED DUPLEX , AND ONE ROOM BQ FOR SALE.",
      image: "/images/for__sale/flat4/flat4__frontview.jpg",
    },
  ];

  const teamMembersArray = [
    {
      image: "/images/staffs/staff1.jpg",
      fullName: "Victoria Ogbonna",
      details: "Cheif Executive Officer",
    },
    {
      image: "/images/staffs/staff2.jpg",
      fullName: "Eddy Usong",
      details: "Brand And Digital Consultant",
    },
    {
      image: "/images/clients/client8.jpeg",
      fullName: "Benson Donald",
      details: "Sales Manager",
    },
    {
      image: "/images/clients/client9.jpeg",
      fullName: "Flem Janks",
      details: "Operational Manager",
    },
    {
      image: "/images/clients/client1.jpeg",
      fullName: "Oak Boxin",
      details: "Chief Accountant",
    },
    {
      image: "/images/clients/client2.jpeg",
      fullName: "Ben France",
      details: "Chief Adviser",
    },
    {
      image: "/images/clients/client3.jpeg",
      fullName: "Camlen Sam",
      details: "Marketer",
    },
    {
      image: "/images/clients/client4.jpeg",
      fullName: "Mikel Okon",
      details: "Digital Marketer",
    },
  ];

  const indexSeter2 = () => {
    setTimeout(() => {
      setIndex2(index2 < 176 ? index2 + 1 : 0);
    }, 4020);
  };
  indexSeter2();
  const indexSeter = () => {
    setTimeout(() => {
      setIndex(index < 176 ? index + 1 : 0);
    }, 4000);
  };
  indexSeter();

  const newTestimony = () => {
    for (let i = 0; i <= testimonyArray.length; i++) {
      if (i <= testimonyArray.lenth) {
        return (
          <Testimony
            image={item.image}
            details={item.details}
            id={i}
            index={index2}
            key={i}
          />
        );
      } else {
        i = 0;
      }
    }
  };

  const testimonyList = testimony1.map((item, i) => {
    return (
      <Testimony
        image={item.image}
        details={item.details}
        id={i}
        index={index2}
        key={i}
      />
    );
  });

  // team members section start
  const teamMembers = teamMembersArray.map((item, i) => {
    return (
      <Team__members
        image={item.image}
        id={i}
        fullName={item.fullName}
        details={item.details}
        key={i}
      />
    );
  });
  // team members section end

  const letProperty = letArray.map((item, i) => (
    <div className={styles.home} key={i} style={{display:"block"}}>
      <Properties details={item.details} url={item.image} link={item.link} />
    </div>
  ));

  // const latestProperty = HouseArray.map((item, i) => (
  //   <div className={styles.home} key={i}>
  //     <Home_section
  //       title={item.title}
  //       details={item.details}
  //       button={item.button}
  //       url={item.image}
  //       leftStyles={item.leftStyles}
  //     />
  //   </div>
  // ));

  return (

    <div className={styles.container}>
     
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <h2>About Us</h2>
          <p>
            Our company is not confined by traditional real estate boundaries
            when it comes to buying, selling and renting asset management,
            instead we are always coming up with new innovative ways to satisfy
            our client's need, and be the leading company in the real estate
            industry.
          </p>

          <div className={styles.about__search}>
            <button>
              <Link href="/let">
                <a> Search For Property To let</a>
              </Link>
            </button>
            <button>
              <Link href="/sale">
                <a> Search For Property To Buy</a>
              </Link>
            </button>
            <button>
              <Link href="/project">
                <a> Off Plan Project </a>
              </Link>
            </button>
          </div>
        </div>
        {/* {latestProperty} */} 
        <div className={styles.advert}>{letProperty}</div>
        <div className={styles.clients}>
          <h2>Testimonies</h2>
          <div className={styles.slider__container}>
            <div
              className={styles.slider__wrapper}
              style={{
                transform: `translateX(${-33 * index}vw)`,
                width: `${Number.POSITIVE_INFINITY * testimonyArray.length}vw`,
              }}
            >
              {testimonyList}
            </div>
          </div>
          <div className={styles.slider__container2}>
            <div
              className={styles.slider__wrapper2}
              style={{
                transform: `translateX(${-94.00 * index}vw)`,
                width: `${Number.POSITIVE_INFINITY * testimonyArray.length}vw`,
              }}
            >
              {testimonyList}
            </div>
          </div>
          <div className={styles.slider__container3}>
          <MultipleItems />
          </div>
        </div>
        <div className={styles.team}>
          <h2>Meet Team</h2>
          <div className={styles.slider__container}>
            <div className={styles.carousel}>
              <div
                className={styles.cursorLeft}
                onClick={() => {
                  handleClick("l");
                }}
              >
                <Image
                  src="/images/icons/navigateIcon.png"
                  alt="navigator icon"
                  width="40px"
                  height="40px"
                 
                />
              </div>
              <div
                className={styles.cursorRight}
                onClick={() => {
                  handleClick("r");
                }}
              >
                <Image
                  src="/images/icons/navigateIcon.png"
                  alt="navigator icon"
                  width="40px"
                  height="40px"
                 
                />
              </div>

              <div className={styles.slider__wrapperCursor}>
                <div
                  className={styles.slider__wrapperInner}
                  style={{
                    transform: `translateX(${-30 * slide}vw)`,
                    width: `${
                      Number.POSITIVE_INFINITY * testimonyArray.length
                    }vw`,
                  }}
                >
                  {teamMembers}
                </div>
                <div
                  className={styles.slider__wrapperInner2}
                  style={{
                    transform: `translateX(${-50 * slide}vw)`,
                    width: `${
                      Number.POSITIVE_INFINITY * testimonyArray.length
                    }vw`,
                  }}
                >
                  {teamMembers}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default HomePage;
