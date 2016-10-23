import React, {Component} from 'react';
import _ from 'lodash';
import TeamItem from './TeamItem';
const teamData = require('markdown-with-front-matter!./data.md');

export default class TableTeam extends Component {
  render() {
    return (
      <div className="team">
        <h1>Developers</h1>
        <div>
          {_.map(teamData.developers, (d, uname) => (
            <TeamItem data={d} github={uname} key={uname} />
          ))}
        </div>
      </div>
    )
  }
}
