import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={require('../../images/logo.png')} style={{height: 50}}></img>
        <div>
          {/*<span style={{color:'red', fontWeight: 'bolder', fontSize: 18, margin: '0 40px'}}>
            -
            /
            <span style={{color: '#800'}}>\</span>
            /
            <span style={{color: '#800'}}>\</span>
            -
          </span>*/}
          <a href="#" className="inverted">GitHub</a>
          <a href="#">API</a>
          <a href="#">Contribute</a>
          <a href="#">Developers</a>
        </div>
      </header>
    );
  }
}
