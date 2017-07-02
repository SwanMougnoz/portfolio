import React, {Component} from 'react'
import {Grid} from "semantic-ui-react";

import './LoadingProgress.css'

export default class LoadingProgress extends Component {
  render() {
    return (
      <Grid.Row>
        <div className="loading-progress"/>
      </Grid.Row>
    )
  }
}