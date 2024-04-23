import React from "react";
import './Card.css'
import robot from './robots.js'
const Card = ({name,id,email})=>{
    return(
        <div className="Card">
            <div className="image">
                <img src={`https://robohash.org/${id}?200x200`} alt="robot iamge"></img>
            </div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;