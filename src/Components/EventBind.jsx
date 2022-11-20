import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }

    // Third approach of event binding
    this.bindHandler = this.bindHandler.bind(this)
  }

  // bindHandler() {
  //   this.setState({
  //     message:'goodbye!!!'
  //   })
  //   // console.log(this)
  // }
  //Final approach is to use arrow function
  bindHandler = () => {
    this.setState({
      message:'goodbye!'
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        
        {/* First Approach of event binding */}
        {/* <button onClick={this.bindHandler.bind(this)}> 
          click
        </button> */}
        <button onClick={this.bindHandler}>click</button>
        
        {/* Second approach of event binding is using arrow function  */}
        {/* <button onClick={()=>this.bindHandler()}>click</button> */}
      </div>
    ) 
  }
}

export default EventBind;
