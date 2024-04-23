import React, { Component } from "react";
import CardList from "./CardList.jsx";
import {robots} from './robots.js'
import SearchBox from "./SearchBox.jsx";
class App extends Component{

    constructor(){
        super()
        this.state={
            robots: robots, 
            searchfield: ""
        }
    }
    
    OnSearchEvent=(event)=>{
        this.setState({searchfield: event.target.value})
        
    }


    render(){
        const FiltredArray = this.state.robots.filter((robot)=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <>
            <SearchBox searchChange={this.OnSearchEvent} />

            <CardList robots={FiltredArray} />
            </>
            
        )
}
    

}

export default App;