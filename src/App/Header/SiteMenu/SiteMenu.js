import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import Item from "./Item";

export default class SiteMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };

    this.setActiveItem = this.setActiveItem.bind(this);
  }

  setActiveItem = (item) => this.setState({ activeItem: item});

  render() {
    const { activeItem } = this.state;

    //noinspection HtmlDeprecatedTag
    return (
      <Menu secondary>
        <Menu.Menu position='right'>
          <Item linkto="/home" label="Accueil" activeItem={activeItem} setActive={this.setActiveItem}/>
          <Item linkto="/blog" label="Blog" activeItem={activeItem} setActive={this.setActiveItem}/>
          <Item linkto="/projects" label="Projets" activeItem={activeItem} setActive={this.setActiveItem}/>
          <Item linkto="/contact" label="Contact" activeItem={activeItem} setActive={this.setActiveItem}/>
        </Menu.Menu>
      </Menu>
    )
  }
}