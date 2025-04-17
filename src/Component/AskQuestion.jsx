import React from 'react'
import NavBar from './NavBar'
import './askQuestion.css'
import { useNavigate } from 'react-router-dom'
import { MdArrowRight } from "react-icons/md";
import { LuUsers } from "react-icons/lu";

const AskQuestion = () => {

    const navigate = useNavigate();

  return (
    <>
        <NavBar/>

        <div className="question-container">
            <form>
                <h3>Add Question</h3>
                <div className="user-input-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/640px-Smiley.svg.png" 
                        className='userProfile' alt="userprofileimage" />
                    <MdArrowRight className='rightArrowIcon' />

                    <div className="dropdown-wrapper">
                        <LuUsers className='dropdownIcon' />
                        <select name="access">
                            <option value="Public">Public</option>
                            <option value="Limited">Limited</option>
                        </select>
                    </div>
                </div>

                <input type="text" placeholder='Start your question with "What","How","Why", etc.' />
                <hr />

        
                <div className="question-containner-btn">
                    <button className='cancelbtn'>Cancel</button>
                    <button className='questionbtn'>Add question</button>
                </div>
            </form>
        </div>

      
    </>
  )
}

export default AskQuestion
