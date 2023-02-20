import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react'
import { FaHome, FaTv, FaFilm, FaHistory } from 'react-icons/fa'

function Navbar() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>200){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        })
    },[])

    return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
      className='logo'
      src="http://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image"
      alt="" />
      <div className="nav__icons">
        <FaHome />
        <FaTv />
        <FaFilm />
        <FaHistory />
      </div>
    </div>
  )
}

export default Navbar
