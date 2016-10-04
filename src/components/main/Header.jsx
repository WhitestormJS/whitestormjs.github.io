import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link style={{padding: 0}} to="/"><img src={require('../../images/logo.png')} style={{height: 50}}></img></Link>
        <div>
          {/*<span style={{color:'red', fontWeight: 'bolder', fontSize: 18, margin: '0 40px'}}>
            -
            /
            <span style={{color: '#800'}}>\</span>
            /
            <span style={{color: '#800'}}>\</span>
            -
          </span>*/}
          <Link to="https://whslack.herokuapp.com/" style={{padding:'0 20px'}}><img src={require('../../images/slack.png')} style={{height: 25, position:'relative', top: 7}}></img></Link>
          <Link to="https://github.com/WhitestormJS/whitestorm.js" className="inverted">GitHub</Link>
          <Link to="/api">API</Link>
          <Link to="/contributors">Contribute</Link>
          <Link to="/team">Developers</Link>
        </div>
      </header>
    );
  }
}
