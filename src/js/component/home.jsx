import React from "react";

import Light from "./js/component/Light.js";
//include images into your bundle

//create your first component
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {colors:["red","yellow","green"], activeLight: "red"};
    }
  render(){
    const handleChange = (color) => {
        this.setState({activeLight:color});
    };
    return(
        <div className='App'>
            <div className='container'>
                {this.state.colors.map((color)=>{
                    return ( 
                        <Light 
                        color={color} 
                        activeLight = {this.state.activeLight} 
                        handleChange={handleChange}
                    />
                );
                })}
              
            </div>
        </div>
    );
  }
}


export default Home;