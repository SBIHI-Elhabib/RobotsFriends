import React from "react";
import './Card.css'

const Card = ({name,id,email,backgroundImage})=>{
    return(
        <div className="Card" style={{ backgroundImage: `url(${backgroundImage})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize:'cover'}}>
            <div className="image">
                <img src={`https://robohash.org/${id}?200x200`} alt="robot iamge"></img>
            </div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;