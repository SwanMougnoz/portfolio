import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export class LinkMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };

    this.setActiveItem = this.setActiveItem.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  setActiveItem(item) {
    this.setState({ activeItem: item});
  }

  componentDidMount() {
    // TODO : This is not a good way to go,
    // MenuItem states are unavailables when executed
    // activeItem propertie should be set according to the state.name of the item
    for (let item of this.props.children) {
      if (item.props.linkto === window.location.pathname) {
        this.setState({
          activeItem: item.props.linkto
        });
        return;
      }
    }
  }

  renderItems() {
    return React.Children.map(this.props.children, (menuitem) => {
      return React.cloneElement(menuitem, {
        activeItem: this.state.activeItem,
        setActive: this.setActiveItem
      });
    });
  }

  render() {
    //noinspection HtmlDeprecatedTag
    return (
      <Menu secondary>
        <Menu.Menu position='right'>
          {this.renderItems()}
        </Menu.Menu>
      </Menu>
    )
  }
}

export class LinkMenuItem extends Component {
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