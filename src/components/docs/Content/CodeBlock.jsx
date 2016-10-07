import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import hljs from 'highlight.js'

export default class CodeBlock extends Component {
  static propTypes = {
    literal: React.PropTypes.string,
    language: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.highlightBlock(this.refs.code);
  }

  render() {
    return (
      <pre>
        <code ref="code" className={this.props.language}>
          {this.props.literal}
        </code>
      </pre>
    )
  }
};
