import React, {Component} from 'react'
import {LinkMenu, LinkMenuItem} from "../../Common/Lib/LinkMenu/LinkMenu";

export default class SiteMenu extends Component {
  render() {
    return (
      <LinkMenu>
        <LinkMenuItem linkto="/home" label="Accueil" />
        <LinkMenuItem linkto="/blog" label="Blog" />
        <LinkMenuItem linkto="/projects" label="Projets" />
        <LinkMenuItem linkto="/contact" label="Contact" />
      </LinkMenu>
    )
  }
}