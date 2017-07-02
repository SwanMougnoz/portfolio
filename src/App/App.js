import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Container} from "semantic-ui-react";

import './App.css';
import Header from "./Header/Header";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Container>
            <Route path="/blog" component={Blog}/>
            <Route path="/home" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Container>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
