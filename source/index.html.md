---
title: WhitestormJS Documentation (API Reference)

language_tabs:
  - javascript
  - coffeescript

toc_footers:
  - <a href='http://threejs.org/'><b>Three.js <i>r75</i></b></a>
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

> Examples:
>
> * [FPS](http://192.241.128.187/current/examples/fps.html)  (First person example with Wagner effects and terrain.)
> * [Basic](http://192.241.128.187/current/examples/basic.html)  (Basic "Hello world!" example.)
> * [Material](http://192.241.128.187/current/examples/basic_material.html)  (Basic example with material.)
> * [Object/Model](http://192.241.128.187/current/examples/basic_model.html)  (Teapot model with *Three.js* JSONLoader.)
> * [Object/Wall](http://192.241.128.187/current/examples/stone_wall.html)  (Stone wall (basic).)
> * [Plugin/Color](http://192.241.128.187/current/examples/plugin_example.html)  (Basic plugin example.)
> * [Skybox](http://192.241.128.187/current/examples/skybox.html) (Skybox example)

**Whiestorm.js** is a _framework_ for 3D web apps built with Three.js technology.

It implements a _core_ with component system and plugin support for fast development of 3D scene with physics.

Automizing your web app with **whitestorm.js** is fast and comfortable. You can use whitestorm's API for creating different shapes instead of writing common functions each time. This engine has physics support implemented by [custom Physi.js](https://github.com/WhitestormJS/Physijs) library, which is much faster than others. Framework provides extended component control and high frame rate, because it uses [**WebWorkers** technology](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) for multithreading.

**Framework's goal is to simplify coding workflow and add plugin's feature to 3D part of the web.**

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

Whitestorm.js uses Three.js for rendering your scene and objects and Physi.js for simulating physics. Both those libraries must work properly. 
`WHS.World` initializes 3D world with parameters.

<aside class="notice">It is advised to download your own copies of the following libraries, as large changes can break backwards compatibility.</aside>

Include Three.js, Wagner, and Physi.js libraries. Include a script tag linking the WhitestormJS library in your head or after your body:

Also you need to put pathes to `physijs_worker.js` file and `ammo.js`. It will cause some errors, if you forget to do so.

# Core






