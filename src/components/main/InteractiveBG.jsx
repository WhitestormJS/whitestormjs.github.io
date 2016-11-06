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
            ['#262c38', '#262c38', '#9b61e3'] // Purple
          ]
        },
        'team': {
          gradients: [
            ['#262c38', '#262c38', '#ffae54'] // Orange
          ]
        }
      }
    })
  }

  render() {
    return (
      <div>
        <canvas id="background"></canvas>
        <div id="preview"
          className={this.props.previewActive ? 'active' : ''}
          style={{backgroundImage: 'url(' + this.props.previewBG + ')'}}
        ></div>
      </div>
    )
  }
}
