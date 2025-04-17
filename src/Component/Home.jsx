import React, { useState } from 'react'
import './home.css'
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { LuPen } from "react-icons/lu";
import Data from './Data';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { useContext } from 'react';
import newPostContext from './useContext';
import { Link } from 'react-router-dom';



const Home = () => {

    // const {newPost}= useContext(newPostContext)
    const {allPost}= useContext(newPostContext)
    

    const[data, setData]=useState(allPost);
      

  return (
    <>
    
        <NavBar/>
        <SideBar/>


        <div className="main-container">
            <div className="top-container">
                <div className="search-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/640px-Smiley.svg.png" className='userProfile' id='userProfile' alt="userprofileimage" />

                    <input type="search" placeholder='What do you want to ask or share?' />

                </div>
                
                <div className="post-container">
                    <Link to="/AskQuestion" className='ask-content'>
                    <RiQuestionnaireLine className='askIcon'/>
                    <p className='ask'>Ask</p>
                    </Link>

                    <div className='answer-content'>
                    <FaPenToSquare />
                    <p>Answer</p>
                    </div>

                    <Link to="/CreatePost" className="post-content">
                    <LuPen/>
                    <p>Post</p>
                    </Link>
                </div>
            </div>
        </div>

        {data.filter(item=> item.name || item.heading || item.imageUrl || item.description)        
        .map((item, index) => (
            <Data
                key={index}
                userimg={item.userimg}
                name={item.name}
                heading={item.heading}
                imageUrl={item.imageUrl}
                description={item.description}
           />
        ))}
    

    </>
  )
}

export default Home
