import React, { Component } from "react";
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Parent: 'Daddy'
    }
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent() {
    alert(`hello ${this.state.Parent}`)
   }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent } />
      </div>
    )
  }
}

export default ParentComponent;
