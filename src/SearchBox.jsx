import React from "react";
import './SearchBox.css';
const SearchBox = ({searchfield,searchChange})=>{

    return(
        <div className="input">
            <input type="search" placeholder="search Robots"
            onChange={searchChange}
            ></input>
        </div>
    )
}

export default SearchBox;