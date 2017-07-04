import React, { Component } from 'react'
import './style.css'
import {Header} from "semantic-ui-react";

export default class Logo extends Component {
    render() {
        return (
            <Header as="h1" href="#">Swan Mougnoz</Header>
        )
    }
}