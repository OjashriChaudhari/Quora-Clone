import React from 'react'
import './sidebar.css'

const SideBar = () => {
  return (
    <div className="sidebar">
      <button className='createspace-btn'>+ Create Space</button>
      <p className='spaces' id='space1'>Software and Applications</p>
      <p className='spaces' id='space2'>Mobile Devices</p>
      <p className='spaces' id='space3'>Computer Technology</p>
      <p className='spaces' id='space4'>Education</p>
      <p className='spaces' id='space5'>Music</p>
      <p className='spaces' id='space6'>Technology</p>

      <hr/>
            
      <div className='links'>
        <p className='link1'>About.</p>
        <p className='link2'>Careers.</p>
        <p className='link3'>Terms.</p>
        <p className='link4'>Privacy.</p>
        <p className='link6'>Advertise.</p>
        <p className='link7'>Press.</p>
        <p className='link8'>Your Ad Choices.</p>
        <p className='link9'>Grievance Officer.</p>
        <p className='link5'>Acceptable Use.</p>
      </div>
    </div>
  )
}

export default SideBar


