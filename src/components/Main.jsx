import 'normalize.css/normalize.css';
import 'styles/App.scss';

import React from 'react';
import {HashRouter, Match, Miss} from 'react-router';
import Header from './main/Header';
import {DocsMain, DocsSidebar, DocsPage} from './docs/Docs';
import {Contribute} from './contribute/index';
import {Team} from './team/index';
import Background from './main/InteractiveBG';
import TableCompare from './main/TableCompare';
import Head from './Head';



class AppComponent extends React.Component {
  state = {previewActive: false, previewBG: '/images/preview/plugins.png'};

  render() {
    return (
      <HashRouter>
        <div>
          <Head />
          <Match exactly pattern="/" render={() => <Background
            previewActive={this.state.previewActive}
            previewBG={this.state.previewBG}
          />} />
          <Match pattern="/api" render={() => (<Background color='#B8E361'/>)} />
          <Match pattern="/contribute" render={() => (<Background color='#9b61e3'/>)} />
          <Match pattern="/team" render={() => (<Background color='#ffae54'/>)} />
          <Miss render={() => <Background />} />
          <Header parentComponent={this} />

            <Match exactly pattern="/" component={TableCompare} />
            <Match pattern="/api" component={DocsSidebar} />
            <Match exactly pattern="/api" component={DocsMain} />
            <Match exactly pattern="/api/:cat/:name" component={DocsPage} />
            <Match exactly pattern="/api/:name" component={DocsPage} />
            <Match exactly pattern="/contribute" component={Contribute} />
            <Match exactly pattern="/team" component={Team} />

          <Match pattern="/*" render={() => {
            window.ga('send', 'pageview', window.location.pathname);
            return null;
          }} />
        </div>
      </HashRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
