import React, {Component} from 'react';
import {Link} from 'react-router';

const linkEvents = fromTo => {
  return {
    onMouseOver: () => window.granimInstance.changeState(fromTo),
    onMouseOut: () => window.granimInstance.changeState('default-state')
  }
}

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link {...linkEvents('main')} style={{padding: 0}} to="/"><img src={require('../../images/logo.png')} style={{height: 50}}></img></Link>
        <div>
          {/*<span style={{color:'red', fontWeight: 'bolder', fontSize: 18, margin: '0 40px'}}>
            -
            /
            <span style={{color: '#800'}}>\</span>
            /
            <span style={{color: '#800'}}>\</span>
            -
          </span>*/}
          <a target="_blank" href="https://discord.gg/5yNCvC4" style={{padding:'0 20px'}}><img src={require('../../images/discord.png')} style={{height: 25, position:'relative', top: 7}}></img></a>
          <a target="_blank" href="https://github.com/WhitestormJS/whitestorm.js" className="inverted">GitHub</a>
          <Link to="/api" {...linkEvents('api')}>API</Link>
          <Link to="/contributors" {...linkEvents('contrib')}>Contribute</Link>
          <Link to="/team" {...linkEvents('team')}>Developers</Link>
        </div>
      </header>
    );
  }
}
