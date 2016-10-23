import 'normalize.css/normalize.css';
import 'styles/App.scss';

import React from 'react';
import {BrowserRouter, Match, Miss} from 'react-router';
// import { RouteTransition } from 'react-router-transition';
import Header from './main/Header';
import {Docs, DocsPage} from './docs/Docs';
import {Contribute} from './contribute/index';
import Background from './main/InteractiveBG';
import TableCompare from './main/TableCompare';

class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Background} />
          <Match pattern="/api" render={() => (<Background color='#B8E361'/>)} />
          <Match pattern="/contribute" render={() => (<Background color='#9b61e3'/>)} />
          <Miss component={Background} />
          <Header />

          <Match exactly pattern="/" component={TableCompare} />
          <Match exactly pattern="/api" component={Docs} />
          <Match exactly pattern="/api/:cat/:name" component={DocsPage} />
          <Match exactly pattern="/api/:name" component={DocsPage} />
          <Match exactly pattern="/contribute" component={Contribute} />

        </div>
      </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
