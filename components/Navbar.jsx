import Image from "next/image"
import React from "react"
import Head from "next/head";
import Dropdown from 'react-bootstrap/Dropdown';
import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import { useEffect } from "react"


function Navbar() {
 
    useEffect(() => {
      import('bootstrap/dist/css/bootstrap.min.css');
    }, [])
    useEffect(() => {
      typeof document !== undefined ? require("bootstrap/js/src/dropdown.js") : null
    }, [])
    return (
      <div className={styles.navbar}>
        
        <nav className="navbar navbar-expand-sm navbar-light ">
          <div className="container-fluid ps-2 pe-2 ms-3 me-3 ">
            <Image src="/images/logo.png" priority={ true } width="80px" height="50px" alt="logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse`}
              id="navbarSupportedContent"
            >
              <div className={styles.nav_inner2}>
             
                <ul className="navbar-nav ml-auto me-auto  mb-lg-0">
                  <li className={`nav-item`}>
                    <Link href="/">
                      <a className={styles.items}>
                        Home
                      </a>
                    </Link>
                  </li>
                  {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
                  <li className={`nav-item`}>
                    <a className={styles.items}>
                      <Dropdown className={styles.mydropdown}>
                        <Dropdown.Toggle className="my-dropdown">
                          Search For Property
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="my-dropdown">
                          {/* <Dropdown.Item href="/let">
                            Property To let
                          </Dropdown.Item> */}
                          <Dropdown.Item href="/sale">
                            Property For Sale
                          </Dropdown.Item>
                          {/* <Dropdown.Item href="/projects">
                            Off Plan Projects
                          </Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                      </a>
                  </li>
                  <li className="nav-item" >
                    <Link href="/about">
                      <a className={styles.items}>
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#info">
                      <a className={styles.items} >
                        Contact Us
                      </a>
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <Link href="/admin">
                      <a className={styles.items}>
                        Admin
                      </a>
                    </Link>
                  </li>
                </ul>

              </div>
            </div>
       
          </div>
        </nav>
      </div>
    );
  }
export default Navbar;
