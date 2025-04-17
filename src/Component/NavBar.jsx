import React from 'react'
import { IoMdHome } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import './navbar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navbar">

      <div className="navbar-top">

          <h1 className='logo'>Quora</h1>

          <Link to = "/" className='homeIcon'> <IoMdHome/></Link>

          <Link to = "/AskQuestion"><RiPagesLine className='navbar-icons' id='navbar-icons1'/></Link>

          <Link to = "/CreatePost" ><FaPenToSquare className='navbar-icons' id='navbar-icons2'/></Link>

          <LuUsers className='navbar-icons' id='navbar-icons3'/>

          <IoNotificationsOutline className='navbar-icons' id='navbar-icons4'/>

      </div>

      <div className="navbar-bottom">

          <input type="search" placeholder='Search Quora' />

          <IoIosSearch className='searchIcon'/>

          <button className='tryQuora'>Try Quora+</button>

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/640px-Smiley.svg.png" className='userProfile' id='nav-userprofile' alt="userprofile" />
      
          <CiGlobe className='globIcon'/>

          <Link to= "AskQuestion" className='addquestion'>Add question</Link>

          <IoIosArrowDown className='downArrow'/>

      </div>

    </div>
  )
}

export default NavBar

