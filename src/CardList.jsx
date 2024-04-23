import React from "react";

import Card from "./Card";

const CardList= ({robots})=>{

const CardArray = robots.map((user,i)=> {

return <Card id={robots[i].id} email={robots[i].email} name={robots[i].name}/>

}
)
    return(
        CardArray
    )
}

export default CardList;