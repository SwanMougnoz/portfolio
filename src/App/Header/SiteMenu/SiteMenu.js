import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'

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
          <Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick}>
            Accueil
          </Menu.Item>
          <Menu.Item name="projects" active={activeItem === "projects"} onClick={this.handleItemClick}>
            Projets
          </Menu.Item>
          <Menu.Item name="blog" active={activeItem === "blog"} onClick={this.handleItemClick}>
            Blog
          </Menu.Item>
          <Menu.Item name="contact" active={activeItem === "contact"} onClick={this.handleItemClick}>
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}