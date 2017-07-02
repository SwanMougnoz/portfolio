import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom";

export default class SiteMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    //noinspection HtmlDeprecatedTag
    return (
      <Menu secondary>
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/home" name="home" active={activeItem === "home"}>
            Accueil
          </Menu.Item>
          <Menu.Item as={Link} to="/projects" name="projects" active={activeItem === "projects"}>
            Projets
          </Menu.Item>
          <Menu.Item as={Link} to="/blog"  name="blog" active={activeItem === "blog"}>
            Blog
          </Menu.Item>
          <Menu.Item as={Link} to="/contact" name="contact" active={activeItem === "contact"}>
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}