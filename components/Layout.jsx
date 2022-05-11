import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/head"



import { useEffect } from "react"
function Layout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');
  }, []);

 
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/js/dist/dropdown.js") : null
  }, [])
  return (
    <div>
         <Navbar /> 
      {children}
        <Footer /> 
    </div>
  )
}

export default Layout