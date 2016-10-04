import React, {Component} from 'react';
import {Item, Category} from './SidebarItem/index';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1>API</h1>
        <ul>
          <Item title="Getting started" active />
          <Item title="Tutorial: Hello World!" />
          <Item title="Running application" />
          <Category title="Mesh components">
            <Item title="Sphere [component]" />
            <Item title="Box [component]" />
          </Category>
          <Category title="How to make a component">
            <Item title="What is component?" />
            <Item title="First steps using Yeoman generator" />
            <Item title="Advanced tips" />
          </Category>
        </ul>
      </div>
    )
  }
}
