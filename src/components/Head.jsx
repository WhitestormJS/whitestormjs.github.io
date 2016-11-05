import React from 'react';
import {HashRouter, Match, Miss} from 'react-router';
import Helmet from 'react-helmet';
import PAGES, {categories} from '../pages/docs/index';

class Head extends React.Component {
  render() {
    const realTitle = this.props.params ?
      PAGES.docs[this.props.params.name.replace(/.*\//, '')][1].title
      : this.props.title;

    const realTags = this.props.params ?
      PAGES.docs[this.props.params.name.replace(/.*\//, '')][1].tags.join(', ')
      : 'three.js, physics, whitestorm.js, framework, 3d, library, github, webgl'

    const defaultDesc = `WhitestormJS framework provides a component wrapper
    for Three.js rendering technology and AmmoNext physics engine.`;

    return (
      <Helmet
        htmlAttributes={{'lang': 'en', 'amp': undefined}} // amp takes no value
        title={realTitle}
        titleTemplate='WhitestormJS - %s'
        defaultTitle='WhitestormJS 3D framework'
        meta={[
          {name: 'description', content: this.props.desc || defaultDesc},
          {name: 'keywords', content: realTags},
          {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
          {name: 'ROBOTS', content: 'NOARCHIVE'},
          {name: 'googlebot', content: 'noodp'},
          {name: 'copyright', content: 'Alexander Buzin 2015-2016'},
          {name: 'language', content: 'english'},
          {property: 'og:description', content: this.props.desc || defaultDesc},
          {property: 'og:url', content: window.location.href},
          {property: 'og:image', content: '/images/favicon.png'},
          {property: 'og:type', content: 'article'},
          {property: 'fb:admins', content: 'alexbuzin88'},
          {property: 'twitter:title', content: realTitle},
          {property: 'twitter:site', content: '@whitestormjs'},
          {property: 'twitter:description', content: this.props.desc || defaultDesc},
          {property: 'twitter:url', content: window.location.href},
          {property: 'twitter:image', content: '/images/favicon.png'},
          {property: 'twitter:card', content: 'summary'},
        ]}
       />
    );
  }
}

class HeadHandler extends React.Component {
  render() {
    return (
      <div>
        <Match exactly pattern='/' render={() => (<Head title='Home' />)} />
        <Match pattern='/api' render={() => (<Head title='API' />)} />
        <Match exactly pattern='/api/:cat/:name' component={Head} />
        <Match exactly pattern='/api/:name' component={Head} />
        <Match exactly pattern='/contribute' render={() => (<Head
          title='Contribute'
          desc='Feel free to contribute to WhitestormJS framework. It is non-profit open source project developed by people around the world.'
        />)} />
        <Match exactly pattern='/team' render={() => (<Head title='Developers' />)} />
      </div>
    );
  }
}

export default HeadHandler;
