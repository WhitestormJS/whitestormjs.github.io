import React, {Component} from 'react';

export class Item extends Component {
  render() {
    return (
      <a href="#"><li className={this.props.active ? 'active' : ''}>{this.props.title}</li></a>
    )
  }
}

export class Category extends Component {
  render() {
    return (
      <ul className='category'>
        <li className='category-title'>{this.props.title}</li>
        {this.props.children}
      </ul>
    )
  }
}
