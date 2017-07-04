import React, {Component} from 'react'
import {Container, Grid} from "semantic-ui-react";

import './style.css'
import Logo from "./logo";
import SiteMenu from "./sitemenu";
import LoadingProgress from "./loadingProgress";

export default class Header extends Component {
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