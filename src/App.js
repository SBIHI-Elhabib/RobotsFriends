import React, { Component } from "react";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx";
import Scroll from "./Scroll.jsx";

class App extends Component{

    constructor(){
        super()
        this.state={
            robots: [], 
            searchfield: ""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}))
        this.setState()
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
            <h1>RoboFriends</h1>
            
            <SearchBox searchChange={this.OnSearchEvent} />
            <Scroll>
                <CardList robots={FiltredArray} />
            </Scroll>
            
            </>
            
        )
}
    

}

export default App;