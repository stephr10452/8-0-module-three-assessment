import { Component } from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import  Home from "./components/Home"
import Movies from "./components/Movies"
import Locations from "./components/Locations"
import People from "./components/People";
import Nav from "./components/Nav";

class App extends Component{
  render(){
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/locations" component={Locations} />
        <Route path="/people" component={People} />
      </Switch>
    </div>
  );
}
}

export default App;