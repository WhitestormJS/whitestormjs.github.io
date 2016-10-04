import Granim from 'granim';
import React, {Component} from 'react';

export default class Background extends Component {
  static defaultProps = {
    color: '#29acff'
  };

  state = {
    granimInstance: null
  };

  componentDidMount() {
    this.setState({granimInstance: new Granim({
        element: '#background',
        name: 'granim',
        opacity: [1, 0.2, 1],
        direction: 'diagonal',
        states : {
          'default-state': {
            gradients: [
              // ['#262c38', '#262c38', '#b8e361'], // Green
              ['#262c38', '#262c38', this.props.color] // Blue
            ]
          }
        }
      })
    });
  }

  render() {
    return (<canvas id="background" style={{position: 'absolute', zIndex: -1, top: 0}}></canvas>)
  }
}
