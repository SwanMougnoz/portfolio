import React, {Component} from 'react'
import {Container, Grid} from "semantic-ui-react";

import './Header.css'
import Logo from "./Logo/Logo";
import SiteMenu from "./SiteMenu/SiteMenu";
import LoadingProgress from "./LoadingProgress/LoadingProgress";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column><Logo/></Grid.Column>
              <Grid.Column><SiteMenu/></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <LoadingProgress/>
      </div>
    )
  }
}