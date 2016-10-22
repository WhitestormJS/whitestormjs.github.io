import Granim from 'granim';
import React, {Component} from 'react';

export default class Background extends Component {
  static defaultProps = {
    color: '#29acff'
  };

  componentDidMount() {
    window.granimInstance = new Granim({
      element: '#background',
      name: 'granim',
      opacity: [1, 0.2, 1],
      stateTransitionSpeed: 300,
      direction: 'diagonal',
      states : {
        'default-state': {
          gradients: [
            ['#262c38', '#262c38', this.props.color]
          ]
        },
        'main': {
          gradients: [
            ['#262c38', '#262c38', '#29acff'] // Blue
          ]
        },
        'api': {
          gradients: [
            ['#262c38', '#262c38', '#b8e361'] // Green
          ]
        },
        'contrib': {
          gradients: [
            ['#262c38', '#262c38', '#9b61e3'] // Green
          ]
        },
        'team': {
          gradients: [
            ['#262c38', '#262c38', '#ffae54'] // Green
          ]
        }
      }
    })
  }

  render() {
    return (<canvas id="background" style={{position: 'fixed', zIndex: -1, top: 0}}></canvas>)
  }
}
