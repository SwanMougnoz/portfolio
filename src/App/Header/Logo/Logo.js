import React, { Component } from 'react'
import './Logo.css'
import {Header} from "semantic-ui-react";

export default class Logo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Header as="h1" href="#">Swan Mougnoz</Header>
        )
    }
}