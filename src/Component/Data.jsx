import React from 'react'
import './data.css'

const Data = ({
    userimg,
    name,
    heading,
    imageUrl,
    description,
}) => {
    
  return (
     
        <div className="card">
            <div className="card-body">
                <div className="image">
                    <img src={userimg} alt="" />
                    <div className="title">
                        <h5 className='name'>{name}</h5>
                        <p>follow</p>
                    </div>
                </div>

            </div>

            <div className="heading">
                <h3>{heading}</h3>
            </div>

            <div className="imageUrl">
                <img src={imageUrl} alt="" />
            </div>

            <div className="decription">
                <p>{description}</p>
            </div>

        </div>
    
  )
}

export default Data
