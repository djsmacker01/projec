
import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import Name from './Components/Name';
import ClickEvent from './Components/ClickEvent';
import CasEvent from './Components/CasEvent';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';



class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>

        <ParentComponent/>
        
        {
        /* <NavbarComp/>
        <CasEvent/>
        <Counter />
        <Name name="success" />
        <Welcome react="React is a " /> 
        <ClickEvent/>
        <EventBind/>
        */}
        
      </div>
    );
  }
}
 
export default App;