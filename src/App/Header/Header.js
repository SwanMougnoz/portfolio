import React, { Component } from 'react'
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //noinspection HtmlDeprecatedTag
        return (
            <div className="header">
                <Logo/>
                <Menu/>
            </div>
        )
    }
}