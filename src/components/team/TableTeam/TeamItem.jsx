import React, {Component} from 'react';

export default class TableItem extends Component {
  state = {
    active: false
  }

  toggleInfo() {
    this.setState({active: !this.state.active});
  }

  render() {
    const data = this.props.data;
    const role = data.role.toLowerCase();

    return (
      <div className={'developer ' + role + (this.state.active ? ' active' : '')}>
        <img src={require('../../../images/team/' + data.avatar)} />
        <div onClick={this.toggleInfo.bind(this)} className="splasher">
          <span>{role}</span>
        </div>
        <div className="info">
          <span>{data.name}</span>
          <div className="contacts">
            {data.twitter ?
              (<a href={'http://twitter.com/' + data.twitter} target="_blank">
                <img src={require('../../../images/twitter.png')} style={{height:15, width:18}} />
              </a>)
              : null
            }
            {data.linkedin ?
              (<a href={data.linkedin} target="_blank">
                <img src={require('../../../images/linkedin.png')} style={{height:15, width:15}} />
              </a>)
              : null
            }
            {data.email ?
              (<a href={'mailto:' + data.email} target="_blank">
                <img src={require('../../../images/email.png')} style={{height:11, width:15, marginTop: 2}} />
              </a>)
              : null
            }{data.github ?
              (<a href={'https://github.com/' + data.github} target="_blank">
                <img src={require('../../../images/github.png')} style={{height:15, width:15}} />
              </a>)
              : null
            }

          </div>
        </div>
      </div>
    )
  }
}
