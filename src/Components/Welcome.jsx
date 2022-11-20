import React, { Component } from 'react';

class Welcome extends Component {
   
  constructor() {
    super()
    this.state = {
      message: 'Welcome to React'
    }
  }

  changeMessage(){
  this.setState({
    message:'Thanks for subscribing'
  })
  }

 
    
  render() { 
    const {react} = this.props

    return ( 
      <div>
        <h1>{ react}component base</h1>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click  here to subscribe</button>
        <button>click here</button>
      </div>
     );
  }
}
 
export default Welcome;