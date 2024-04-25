import React from "react";
import Card from "./Card";
import './CardList.css'
import background from './cardBackground.jpg'
const CardList= ({robots})=>{

const CardArray = robots.map((user,i)=> {

    
return <Card id={
        robots[i].id} 
        email={robots[i].email}
        name={robots[i].name} 
        backgroundImage={background}
        />

}
)
    return(
        <div>
            {CardArray}
            </div>
        
    )
}

export default CardList;