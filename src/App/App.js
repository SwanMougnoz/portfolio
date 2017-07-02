import React, {Component} from 'react';
import './Counter/Counter';
import './App.css';
import Header from "./Header/Header";
import {Container, Grid} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Grid columns={12}>
            <Grid.Row>
              <Grid.Column>Bla bla bla</Grid.Column>
              <Grid.Column>Bla bla bla</Grid.Column>
              <Grid.Column>Bla bla bla</Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
