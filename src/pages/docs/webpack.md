---

title: Usage with webpack
icon: webpack.png

tags:
 - three.js
 - whitestorm.js
 - webpack

---

It is possible to use Whitestorm.js with webpack. To do this you should add some lines in your [webpack](https://webpack.github.io/) config:

### Usage with physics (see <a href="#variations">variations</a>):

```javascript

plugins: [
  new webpack.NormalModuleReplacementPlugin(/inline\-worker/, 'webworkify-webpack')
  // ...
],

```

Add `new webpack.NormalModuleReplacementPlugin(/inline\-worker/, 'webworkify-webpack')` to plugins section in webpack config. 

#### EXPLANATION
Currently we use [InlineWorker](https://www.npmjs.com/package/inline-worker) to maintain Web Workers in node environment. Same thing with InlineWorker is possible in webpack too, but dependencies wouldn't be accessible from `worker.js` file. To solve this problem we use special plugin: [webworkify-webpack](https://www.npmjs.com/package/webworkify-webpack). This plugin is already included to whitestorm's `package.json` so there is no need to install it again.

### Light version (see <a href="#variations">variations</a>):

```javascript

externals: {
  '../physics/index.js': 'var false',
  './physics/index.js': 'var false'
},

```

To use whitestorm.js without including Physi.js you should add it's paths as externals in webpack config (look to the right for code). It will remove all Physi.js files and Ammo.js and will let you use a more lightweight bundle.

### Source code on GitHub

You may also check implementation of Whitestorm.js with webpack at **[GitHub]** [WhitestormJS/test-whitestorm-webpack](https://github.com/WhitestormJS/test-whitestorm-webpack) for more details. You will find also notes about compressing bundle there.

- **webpack.config.js** - this one is configuration for bundle with physics support.
- **webpack.light.config.js** - this one is configuration for bundle without physics support and ammo.js included.

