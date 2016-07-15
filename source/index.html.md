---
title: WhitestormJS Documentation (API Reference)

language_tabs:
  - javascript
  - coffeescript

toc_footers:
  - <a href='http://threejs.org/'><b>Three.js <i>r79</i></b></a>
  - <a href='https://github.com/WhitestormJS/Physijs'>Get custom <b>Physijs</b></a>
  - <a href='https://plus.google.com/113564780584588197070?rel=author'>Google</a>

includes:
  - object_class
  - world_class
  - shape_class
  - light_class
  - camera_class
  - curve_class
  - enable_debug

  - api

  - box_class
  - sphere_class
  - plane_class
  - cylinder_class
  - dodecahedron_class
  - polyhedron_class
  - icosahedron_class
  - octahedron_class
  - tetrahedron_class
  - extrude_class
  - lathe_class
  - model_class
  - morph_class
  - parametric_class
  - ring_class
  - shape2d_class
  - text_class
  - torus_class
  - torusknot_class
  - tube_class

  - ambient_class
  - directional_class
  - hemisphere_class
  - normal_class
  - point_class
  - spot_class

  - perspectivecamera
  - ortographiccamera
  - cubecamera

  - fpscontrols
  - orbitcontrols

  - components

  - plugins

  - info

search: true
---


<h1 class="bigline">Introduction</h1>

<div class="blockTitle h3">EXAMPLES</div>
> BASIC:
>
> * [Basic / Hello world](http://192.241.128.187/current/examples/basic/helloworld/)  (Basic "Hello world!" example.)
> * [Basic / Model](http://192.241.128.187/current/examples/basic/model/)  (Basic model example.)
> * [Basic / Debugging](http://192.241.128.187/current/examples/basic/debugging/)  (Object's debug example.)
> * [Basic / Extending API](http://192.241.128.187/current/examples/basic/extending/)  (Extending api example.)
> * [Basic / Softbody](http://192.241.128.187/current/examples/basic/softbody/)  (Basic softbody implementation.)
> * [Basic / Three.js](http://192.241.128.187/current/examples/basic/threejs/)  (Importing three.js scene to whitestormjs core.)
>
> DESIGN:
>
> * [Design / Saturn](http://192.241.128.187/current/examples/design/saturn/)  (Saturn planet example from [codepen](http://codepen.io/Yakudoo/pen/qbygaJ))
> * [Design / Easter](http://192.241.128.187/current/examples/design/easter/)  (Easter rabbit with easter eggs.)
>
> FIRST-PERSON:
>
> * [FPS / Shooter](http://192.241.128.187/current/examples/fps/shooter/)  (First person game with animated objects) 
> * [FPS / Fog](http://192.241.128.187/current/examples/fps/fog/)  (First person example with Wagner effects and terrain. + fog)
>
> PHYSICS:
>
> * [Physics / Dominos](http://192.241.128.187/current/examples/physics/domino/)  (Physics example with dominos.)
>
> PERFORMANCE:
>
> * [Performance / Sticks](http://192.241.128.187/current/examples/performance/sticks/)  (Collisions performance of 320 basic box objects.)
> * [Performance / Softbodies](http://192.241.128.187/current/examples/performance/softbodies/)  (Collisions performance of 10 softbodies.)

**Whiestorm.js** is a framework for 3D web apps built with Three.js technology.

It implements a core with component system and plugin support for fast development of 3D scene with physics.

Automizing your web app with whitestorm is fast and comfortable. This engine has physics support implemented by custom Physi.js library, which is much faster than others. Framework provides extended component control and high frame rate, because it uses [WebWorkers technology](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) for multithreading.

#### FRAMEWORKS GOAL

We want simplify your coding workflow and add plugin's feature to 3D part of the web.

<img src="images/intro.png">

#### SIMPLE IS BETTER

Each time you want to develop even a basic application - you need to describe every 3D part of it, such as renderer, frame updating, include external physics, write autoresize if needed. This time we want you to make all it much easier with best performance and functionality. You still can manage all of them, but if you forgot to do that, or just don't need it - whitestorm.js will do all it for you.

# Getting started

<div class="blockTitle h2">HTML</div>
```html
<!-- WhitestormJS library -->
<script src="whitestorm.js"></script>
<!-- My app written in WhitestormJS -->
<script src="app.js"></script>
```

<div class="blockTitle h2">JAVASCRIPT (app.js)</div>
```javascript

const world = new WHS.World({
  stats: "fps", // fps, ms, mb or false if not need.
  autoresize: true,

  gravity: { // Physic gravity.
    x: 0,
    y: -100,
    z: 0
  }
});

const sphere = new WHS.Sphere({ // Create sphere object.
  geometry: {
    radius: 3
  },

  mass: 10, // Mass of physics object.

  material: {
    color: 0xffffff,
    kind: 'basic'
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  }
});

sphere.addTo(GAME);
sphere.getNative(); // Returns THREE.Mesh of this object.

world.start(); // Start animations and physics simulation.

```

```coffeescript

world = new (WHS.World)(
  stats: 'fps'
  autoresize: true
  gravity:
    x: 0
    y: -100
    z: 0)

sphere = new (WHS.Sphere)(
  geometry: radius: 3
  mass: 10
  material:
    color: 0xffffff
    kind: 'basic'
  pos:
    x: 0
    y: 100
    z: 0)

sphere.addTo GAME
sphere.getNative()
# Returns THREE.Mesh of this object.

world.start()
# Start animations and physics simulation.

```

> It's better to inlude whitestorm.js file before the end of body tag. It will force page to load content first. Your code should come after whitestorm.js included.

Whitestorm.js uses Three.js for rendering your scene and objects and Physi.js for simulating physics. Both those libraries are already included in build and should work properly. You can also make your own build that will satisfy your needs by playing with whitestorm.js [build configuration file](https://github.com/WhitestormJS/whitestorm.js/blob/master/webpack.config.babel.js) and [CLI commands](https://github.com/WhitestormJS/whitestorm.js/blob/master/.github/CONTRIBUTING.md#cli)

<aside class="notice">It is advised to <b>download your own copies of the following libraries</b>, as large changes can break backwards compatibility.</aside>

<aside class="notice">You may <b>run latest versions</b> of whitestorm.js and your browser or other environment where you are going to use your application to achieve best performance results. </aside>

To create whitestorm.js app you should make a basic HTML document with `html`, `head` and `body` tags. Next step is to include Whitestorm.js to the document and main app script file. You can do it simply using `script` tag (see right side) for more details. 

We love to create awesome things and we noticed that we can reduce code for setting up basic things like world or box. That's why we developed API that powers your development proccess by wrapping existing three.js API.

#### WHITESTORM.JS CODE VS THREE.JS NATIVE CODE

<figure class="cd-image-container is-visible">
    <img src="images/code_three_retro.png" alt="Three.js">
    <span class="cd-image-label" data-type="original">Three.js</span>
    <div class="cd-resize-img" style="width: 47.916665%;">
      <img src="images/code_whs.png" alt="Whitestorm.js">
      <span class="cd-image-label" id="whslabel" data-type="modified">Whitestorm.js</span>
    </div>
    <span class="cd-handle" style="left: 47.916665%;"></span>
</figure> 

# Core






