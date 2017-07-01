import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
                <li><a href="#">Item 5</a></li>
            </ul>
        )
    }
}