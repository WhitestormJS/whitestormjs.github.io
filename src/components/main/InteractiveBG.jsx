import Granim from 'granim';
import React, {Component} from 'react';

class Background extends Component {
  componentDidMount() {
    const granimInstance = new Granim({
      element: '#background',
      name: 'granim',
      opacity: [1, 0.2, 1],
      direction: 'diagonal',
      states : {
        'default-state': {
          gradients: [
            // ['#262c38', '#262c38', '#b8e361'], // Green
            ['#262c38', '#262c38', '#29acff'] // Blue
          ]
        }
      }
    });
  }

  render() {
    return (<canvas id="background">{this.props.children}</canvas>)
  }
}

export {
  Background
};
