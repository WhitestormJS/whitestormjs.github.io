---

title: Getting started

featured:
  title: Getting started
  describe: In this article you will find useful information about WhitestormJS framework and it's usage.
  image: getting-started.png

tags:
 - three.js
 - webgl
 - 3d

---

**WhitestormJS** is a framework for 3D web apps built with Three.js technology.

It implements a core with component system and plugin support for fast development of 3D scene with physics.

Automizing your web app with whitestorm is fast and comfortable. This engine has physics support implemented by custom Physi.js library, which is much faster than others. Framework provides extended component control and high frame rate, because it uses [WebWorkers technology](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) for multithreading.


## Simple is better

Each time you want to develop even a basic application - you need to describe every 3D part of it, such as _renderer, frame updating, include external physics, write autoresize if needed_. This time we want you to make all it much easier with best performance and functionality. You still can manage all of them, but if you forgot to do that, or just don't need it - whitestorm.js will do all it for you.

<img src="/images/docs/getting-started/index.png" />

## Install & usage

> It's better to inlude whitestorm.js file before the end of body tag. It will force page to load content first. Your code should come after whitestorm.js included.

```html
<!-- WhitestormJS library -->
<script src="whitestorm.js"></script>
<!-- App written in WhitestormJS -->
<script src="app.js"></script>
```

Whitestorm.js uses Three.js for rendering your scene and objects and Physi.js for simulating physics. Both those libraries are already included in build and should work properly. You can also make your own build that will satisfy your needs by playing with whitestorm.js [build configuration file](https://github.com/WhitestormJS/whitestorm.js/blob/master/webpack.config.babel.js) and [CLI commands](https://github.com/WhitestormJS/whitestorm.js/blob/master/.github/CONTRIBUTING.md#cli)

> It is advised to download your own copies of the following libraries, as large changes can break backwards compatibility.

> You may _run latest versions_ of whitestorm.js and your browser or other environment where you are going to use your application to achieve best performance results.

To create whitestorm.js app you should make a basic HTML document with `html`, `head` and `body` tags. Next step is to include Whitestorm.js to the document and main app script file. You can do it simply using `script` tag (see right side) for more details. 

We love to create awesome things and we noticed that we can reduce code for setting up basic things like world or box. That's why we developed API that powers your development proccess by wrapping existing three.js API.

```javascript
const world = new WHS.World({
  autoresize: true,

  background: {
    color: 0xffffff
  },

  gravity: { // Physic gravity.
    x: 0,
    y: -100,
    z: 0
  },

  camera: {
    z: 50
  }
});

const sphere = new WHS.Sphere({ // Create sphere object.
  geometry: {
    radius: 3
  },

  mass: 10,

  material: {
    color: 0x00ff00,
    kind: 'basic'
  }
});

sphere.addTo(world);
sphere.getNative(); // Returns THREE.Mesh of this object.

world.start(); // Start animations and physics simulation.
```
