import React, {Component} from 'react'
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.linkto,
    };

    this.registerActive = this.registerActive.bind(this);
  }

  registerActive() {
    this.props.setActive(this.state.name);
  }

  render() {
    return (
      <div onClick={this.registerActive}>
        <Menu.Item
          as={Link}
          to={this.props.linkto}
          name={this.state.name}
          active={this.state.name === this.props.activeItem}
        >
          {this.props.label}
        </Menu.Item>
      </div>
    )
  }
}