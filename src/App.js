
import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
     <div>
      
        <Navbar/>
        <h2 className="text-center">Welcome to NewsMonkey</h2>
       
       <Switch>
         <Route exact path="/"> <News key="general" category="general"/></Route>
         <Route exact path="/health"> <News key="health" category="health"/></Route>
         <Route exact path="/science"> <News key="science" category="science"/></Route>
         <Route exact path="/buisness"> <News key="buisness" category="buisness"/></Route>
         <Route exact path="/technology"> <News key="technology" category="technology"/></Route>
         <Route exact path="/sports"> <News key="sports" category="sports"/></Route>
         <Route exact path="/entertainment"> <News key="entertainment" category="entertainment"/></Route>
       </Switch>
      </div>
      </Router>
    )
  }
}

