import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Container} from "semantic-ui-react";

import './style.css';
import Header from "portfolio/app/common/header";
import Blog from "./blog";
import Contact from "./contact";
import Projects from "./projects";
import Home from "./home";

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
