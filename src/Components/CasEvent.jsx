import React, { Component } from "react";

class CasEvent extends Component {
  constructor(props) {
    super(props)
  
   
  }
  clickHandler() {
    console.log('button clicked')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    ) 
  }
}

export default CasEvent;
