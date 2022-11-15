import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Name from './Components/Name';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="className">
        <Name name="wale" />
        <Name name="deji"/>
      </div>
    );
  }
}
 
export default App;