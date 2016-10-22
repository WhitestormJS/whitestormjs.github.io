import React, {Component} from 'react';
import cookie from 'react-cookie';

export class Item extends Component {
  render() {
    return (
      <a href={this.props.link ? this.props.link : '#'}>
        <li className={this.props.active ? 'active' : ''}>
          {this.props.title}
          {
            this.props.icon ?
            (<img src={require('../../../../images/docs/icons/' + this.props.icon)}></img>) : null
          }
        </li>
      </a>
    )
  }
}

export class Category extends Component {
  state = {};

  constructor(...props) {
    super(...props);

    if (this.props.isActive) {
      this.state[`folded-${this.props.id}`] = false;
    } else {
      this.state[`folded-${this.props.id}`] =
        typeof cookie.load(`folded-${this.props.id}`) !== undefined
          ? cookie.load(`folded-${this.props.id}`)
          : false;
    }
  }

  triggerFold() {
    const newState = {};
    newState[`folded-${this.props.id}`] = !this.state[`folded-${this.props.id}`];

    this.setState(newState);
    cookie.save(`folded-${this.props.id}`, !this.state[`folded-${this.props.id}`]);
  }

  render() {
    return (
      <div>
      <span className={this.props.isActive ? 'category-title active' : 'category-title'} onClick={this.triggerFold.bind(this)}>
        {
          this.props.icon ?
          (<img src={require('../../../../images/docs/icons/' + this.props.icon)} />)
          : null
        }
        {this.props.title}
        <div className={`category-fold ${this.state['folded-' + this.props.id] ? 'folded' : ''}`}
        style={{transition: `all ${0.15 + 0.01 * this.props.children.length}s linear`}}></div>
      </span>
      <ul className={`category ${this.state['folded-' + this.props.id] ? 'folded' : ''}`} style={{
        maxHeight: `calc(${this.props.children.length} * (20pt + 22px)`,
        transition: `all ${0.15 + 0.01 * this.props.children.length}s linear`
      }}>
        {this.props.children}
      </ul>
      </div>
    )
  }
}
