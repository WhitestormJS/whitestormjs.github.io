---
title: WhitestormJS Documentation (API Reference)

language_tabs:
  - javascript
  - html

toc_footers:
  - <a href='http://threejs.org/'><b>Three.js <i>r75</i></b></a>
  - <a href='https://github.com/WhitestormJS/Physijs'>Get custom <b>Physijs</b></a>
  - <a href='https://plus.google.com/113564780584588197070?rel=author'>Google</a>

includes:
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

  - fpscontrols
  - orbitcontrols

  - components

  - plugins
  - scripts

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

> Include Three.js and Physi.js to your document. Then include Whitestorm.js
> Define your world with parameters:

```javascript
var GAME = new WHS.init({
    // Type parameters here.

    path_worker: 'physijs_worker.js', // Path to Physijs worker here.
    path_ammo: 'ammo.js' // Path to Ammo.js.
});

// Define your scene objects here.

GAME.start(); // Start animations and physics simulation.
```


```html
<script src="three.js"></script>
<script src="physi.js"></script>
<!-- WhitestormJS library -->
<script src="whitestorm.js"></script>
```

Whitestorm.js uses Three.js for rendering your scene and objects and Physi.js for simulating physics. Both those libraries must work properly. 
`WHS.World` initializes 3D world with parameters.

<aside class="notice">It is advised to download your own copies of the following libraries, as large changes can break backwards compatibility.</aside>

Include Three.js, Wagner, and Physi.js libraries. Include a script tag linking the WhitestormJS library in your head or after your body:

Also you need to put pathes to `physijs_worker.js` file and `ammo.js`. It will cause some errors, if you forget to do so.

# Core

## WHS.World [Super Class]

<div class="blockTitle h3">Defaults for <code>WHS.World</code> Class:</div>

```json
{
    "anaglyph": false,
    "helper": false,
    "stats": false,
    "autoresize": false,

    "shadowmap": {
        "enabled": true,
        "type": THREE.PCFSoftShadowMap
    },

    "gravity": {
        "x": 0,
        "y": 0,
        "z": 0
    },

    "camera": {
        "aspect": 75,
        "near": 1,
        "far": 1000,

        "x": 0,
        "y": 0,
        "z": 0
    },

    "rWidth": 1,
    "rHeight": 1,
    "width": window.innerWidth,
    "height": window.innerHeight,

    "physics": {
        "quatNormalizeSkip": 0,
        "quatNormalizeFast": false,

        "solver": {
            "iterations": 20,
            "tolerance": 0
        },

        "defMaterial": {
            "contactEquationStiffness": 1e8,
            "contactEquationRegularizationTime": 3
        }
    },

    "background": 0x000000,
    "assets": "./assets",
    "container": document.body,

    "path_worker": "../libs/physijs_worker.js",
    "path_ammo": "../libs/ammo.js"
}

```

World is an object that contains all other objects. (TODO)

<div class="params" id="world-properties">
  <h5>Properties <a href="#world-properties" class="anchor"></a></h5>
  <ul>
    <li id="world-properties-stats">
      <h3><a href="#world-properties-stats" class="anchor"></a> stats
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Stats.js extension for three.js and physi.js frame rate/miliseconds or megabytes calculation.</p>
    </li>
    <li id="world-properties-autoresize">
      <h3><a href="#world-properties-autoresize" class="anchor"></a> autoresize
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Turn on if you want to have your app resized with window or it's container width and height properties.</p>
    </li>
    <li id="world-properties-softbody">
      <h3><a href="#world-properties-softbody" class="anchor"></a> softbody
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Should be turned on if you are going to use softbodies in your world. That will force physi.js to use <code>btSoftRigidDynamicsWorld</code></p>
    </li>
    <li id="world-properties-shadowmap" class="nested">
      <h3><a href="#world-properties-shadowmap" class="anchor"></a> shadowmap
        <span class="type">Object</span>
      </h3>
      <p>Shadowmap propertis for Three.js scene</p>
      <ul>
        <li>
          <h3>enabled
            <span class="type">Boolean</span>
            <span class="default">true</span>
          </h3>
          <p>Shadowmap enabled state. If <code>false</code> - scene will receive no shadow</p>
        </li>
        <li>
          <h3>type
            <span class="type">Number</span>
            <span class="default">THREE.PCFSoftShadowMap</span>
          </h3>
          <p>Shadowmap type number</p>
        </li>
      </ul>
    </li>
    <li id="world-properties-helpers" class="nested">
      <h3><a href="#world-properties-helpers" class="anchor"></a> helpers
        <span class="type">Object</span>
      </h3>
      <p>World helpers (TODO)</p>
      <ul>
        <li>
          <h3>grid
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>Grid helper for world</p>
        </li>
        <li>
          <h3>axis
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>Axis helper for world</p>
        </li>
      </ul>
    </li>
    <li id="world-properties-gravity" class="nested">
      <h3><a href="#world-properties-gravity" class="anchor"></a> gravity
        <span class="type">Object</span>
      </h3>
      <p>Gravity direction</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Gravity direction x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Gravity direction y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Gravity direction z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="world-properties-camera">
      <h3><a href="#world-properties-camera" class="anchor"></a> camera
        <span class="type">Object</span>
      </h3>
      <p><a href="#world-camera">Camera object</a></p>
    </li>
    <li id="world-properties-rWidth">
      <h3><a href="#world-properties-rWidth" class="anchor"></a> rWidth
        <span class="type">Number (0 - 1)</span>
        <span class="default">1</span>
      </h3>
      <p>Width resolution ratio</p>
    </li>
    <li id="world-properties-rHeight">
      <h3><a href="#world-properties-rHeight" class="anchor"></a> rHeight
        <span class="type">Number (0 - 1)</span>
        <span class="default">1</span>
      </h3>
      <p>Height resolution ratio</p>
    </li>
    <li id="world-properties-width">
      <h3><a href="#world-properties-width" class="anchor"></a> width
        <span class="type">Number</span>
        <span class="default">window.innerWidth</span>
      </h3>
      <p>Width of canvas for the world</p>
    </li>
    <li id="world-properties-height">
      <h3><a href="#world-properties-height" class="anchor"></a> height
        <span class="type">Number</span>
        <span class="default">window.innerHeight</span>
      </h3>
      <p>Height of canvas for the world</p>
    </li>
    <li id="world-properties-physics">
      <h3><a href="#world-properties-physics" class="anchor"></a> physics
        <span class="type">Object</span>
      </h3>
      <p><a href="#world-physics">Physics object</a></p>
    </li>
    <li id="world-properties-fog">
      <h3><a href="#world-properties-fog" class="anchor"></a> fog
        <span class="type">Object</span>
      </h3>
      <p><a href="#world-fog">Fog object</a></p>
    </li>
    <li id="world-properties-background" class="nested">
      <h3><a href="#world-properties-background" class="anchor"></a> background
        <span class="type">Object</span>
      </h3>
      <p>Canvas/world background color and opacity</p>
      <ul>
        <li>
          <h3>color
            <span class="type">HEX</span>
            <span class="default">0x000000</span>
          </h3>
          <p>World background color</p>
        </li>
        <li>
          <h3>opacity
            <span class="type">Number (0 - 1)</span>
            <span class="default">1</span>
          </h3>
          <p>World background opacity</p>
        </li>
      </ul>
    </li>
    <li id="world-properties-container">
      <h3><a href="#world-properties-container" class="anchor"></a> container
        <span class="type">DOM Object</span>
        <span class="default">document.body</span>
      </h3>
      <p>DOM Object that world canvas will be appended to</p>
    </li>
  </ul>
</div>

<div class="params" id="world-camera">
  <h5>Camera object <a href="#world-camera" class="anchor"></a></h5>
  <ul>
    <li id="world-camera-xyz">
      <h3><a href="#world-camera-xyz" class="anchor"></a> x, y, z
        <span class="type">Numbers</span>
        <span class="default">0, 0, 0</span>
      </h3>
      <p>Camera position x, y, z properties</p>
    </li>
    <li id="world-camera-aspect">
      <h3><a href="#world-camera-aspect" class="anchor"></a> aspect
        <span class="type">Number</span>
        <span class="default">75</span>
      </h3>
      <p>Camera aspect</p>
    </li>
    <li id="world-camera-near">
      <h3><a href="#world-camera-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Camera near</p>
    </li>
    <li id="world-camera-far">
      <h3><a href="#world-camera-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">1000</span>
      </h3>
      <p>Camera far</p>
    </li>
  </ul>
</div>

<div class="params" id="world-physics">
  <h5>Physics object <a href="#world-physics" class="anchor"></a></h5>
  <ul>
    <li id="world-camera-fixedTimeStep">
      <h3><a href="#world-physics-fixedTimeStep" class="anchor"></a> fixedTimeStep
        <span class="type">Numbers</span>
        <span class="default">1 / 60</span>
      </h3>
      <p>Fixed time step for physics simulation</p>
    </li>
  </ul>
</div>

<div class="params" id="world-fog">
  <h5>Fog object <a href="#world-fog" class="anchor"></a></h5>
  <ul>
    <li id="world-fog-enabled">
      <h3><a href="#world-fog-enabled" class="anchor"></a> enabled
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Fog enabled state</p>
    </li>
    <li id="world-fog-type">
      <h3><a href="#world-fog-type" class="anchor"></a> type
        <span class="type">String</span>
        <span class="default">regular</span>
      </h3>
      <p>Fog type. Can be <code>regular</code> or <code>expodential</code></p>
    </li>
    <li id="world-fog-hex">
      <h3><a href="#world-fog-hex" class="anchor"></a> hex
        <span class="type">HEX</span>
        <span class="default">0x000000</span>
      </h3>
      <p>Fog color</p>
    </li>
    <li id="world-fog-density">
      <h3><a href="#world-fog-density" class="anchor"></a> density
        <span class="type">Number</span>
        <span class="default">0.00025</span>
      </h3>
      <p>Fog density. Will be applied if fog type is <code>expodential</code></p>
    </li>
    <li id="world-fog-near">
      <h3><a href="#world-fog-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Fog near. Will be applied if fog type is <code>regular</code></p>
    </li>
    <li id="world-fog-far">
      <h3><a href="#world-fog-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">1000</span>
      </h3>
      <p>Fog far. Will be applied if fog type is <code>regular</code></p>
    </li>
  </ul>
</div>

## Enable debugging.
Debugging is the process of finding and resolving of defects that prevent correct operation of computer software or a system.

For debugging simulation proccess set `WHS.debug = true;` at the begining of your application.
All proccesses, such as *creating, building, adding to world or removing* will be described in the console.



<h1 class="big" id="API">API</h1>

## WHS.Shape [Super Class]

<div class="blockTitle h2">Structure.</div>

```javascript

const shape = new WHS.Shape({
  geometry: {
    // Shape geometry options here.
  },

  material: {
    color: 0xffffff, // White color.
    kind: "basic"
  },

  pos: {
    x: 0,
    y: 0,
    z: 0
  }
});

shape.addTo(world);

```

<blockquote class="section">
  <header>Methods:</header>
  <table>
    <tr>
      <th>.build(...tags)</th><td>Aplly position and rotation to mesh, returning `Promise` when ready.</td>
    </tr>
    <tr>
      <th>.addTo(root, ...tags)</th><td>Adds WHS.Light object to scene (WHS.World). Returns Promise object.</td>
    </tr>
    <tr>
      <th>.copy(source)</th><td>Copy source object data to this object. Returns new WHS object.</td>
    </tr>
    <tr>
      <th>.clone()</th><td>Clone object and it’s parameters including latest position/rotation. Returns new WHS object.</td>
    </tr>
    <tr>
      <th>.remove()</th><td>Remove object from scene. Returns removed WHS object.</td>
    </tr>
  </table>
</blockquote>


<blockquote class="section">
  <header>Material types comrehantion:</header>
  <table>
    <tr>
      <th>basic</th><td>THREE.MeshBasicMaterial</td>
    </tr>
    <tr>
      <th>linebasic</th><td>THREE.MeshLineBasicMaterial</td>
    </tr>
    <tr>
      <th>linedashed</th><td>THREE.MeshLineDashedMaterial</td>
    </tr>
    <tr>
      <th>material</th><td>THREE.Material</td>
    </tr>
    <tr>
      <th>depth</th><td>THREE.MeshDepthMaterial</td>
    </tr>
    <tr>
      <th>face</th><td>THREE.MultiMaterial</td>
    </tr>
    <tr>
      <th>lambert</th><td>THREE.MeshLambertMaterial</td>
    </tr>
    <tr>
      <th>normal</th><td>THREE.MeshNormalMaterial</td>
    </tr>
    <tr>
      <th>phong</th><td>THREE.MeshPhongMaterial</td>
    </tr>
    <tr>
      <th>pointcloud</th><td>THREE.MeshPointsMaterial</td>
    </tr>
    <tr>
      <th>rawshader</th><td>THREE.MeshRawShaderMaterial</td>
    </tr>
    <tr>
      <th>shader</th><td>THREE.MeshShaderMaterial</td>
    </tr>
    <tr>
      <th>sprite</th><td>THREE.MeshSpriteMaterial</td>
    </tr>
  </table>
</blockquote>

WHS.Shape is a default class for all object's (except lights and cameras).
It consist of Three.js mesh, Physi.js mesh and whs parameters such as geometry or material.

**geometry** is an object that contains shape's options for generating vertices and faces.

**material** is an object that contains material properties of Three.js + friction and restitution for physics material in Physi.js.

<div class="params" id="shape-params">
  <h5>Shape parameters <a href="#shape-params" class="anchor"></a></h5>
  <ul>
    <li id="shape-params-mass">
      <h3><a href="#shape-params-mass" class="anchor"></a> mass
        <span class="type">Number</span>
        <span class="default">10</span>
      </h3>
      <p>Physics object mass. Should be applied only to objects with <a href="#">physics parameter</a> turned on.</p>
    </li>
    <li id="shape-params-build">
      <h3><a href="#shape-params-build" class="anchor"></a> build
        <span class="type">Boolean</span>
        <span class="default">true</span>
      </h3>
      <p>Parameter which defines whether to build shape (generate geometry, material and set native[TODO: describe native])</p>
    </li>
    <li id="shape-params-softbody">
      <h3><a href="#shape-params-softbody" class="anchor"></a> softbody
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Defines object's physics state. Default state is RigidBody which means that object is not solid. Can be also SoftBody if turned on. See <a href="#">shapes that support softbody</a>[TODO: Make softbody shapes list]</p>
    </li>
    <li id="shape-params-geometry">
      <h3><a href="#shape-params-geometry" class="anchor"></a> geometry
        <span class="type">Object</span>
      </h3>
      <p>Geometry object is specific for each shape type. For example <code>WHS.Sphere</code> will have it's own object that contain only <code>radius</code> property.</p>
    </li>
    <li id="shape-params-material" class="nested">
      <h3><a href="#shape-params-material" class="anchor"></a> material
        <span class="type">Object</span>
      </h3>
      <p>Fog type. Can be <code>regular</code> or <code>expodential</code></p>
      <ul>
        <li>
          <h3>kind
            <span class="type">String</span>
            <span class="default">"basic"</span>
          </h3>
          <p>This property defines material type. (TODO: Make list)</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-helpers" class="nested">
      <h3><a href="#shape-params-helpers" class="anchor"></a> helpers
        <span class="type">Object</span>
      </h3>
      <p>Shape helpers that help in development (TODO: Describe info from three.js)</p>
      <ul>
        <li>
          <h3>box
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>Box helper</p>
        </li>
        <li>
          <h3>boundingBox
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>BoundingBox helper</p>
        </li>
        <li>
          <h3>edges
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>Edges helper</p>
        </li>
        <li>
          <h3>faceNormals
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>FaceNormals helper</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-pos" class="nested">
      <h3><a href="#shape-params-pos" class="anchor"></a> pos
        <span class="type">Object</span>
      </h3>
      <p>Object position</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object position x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object position y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object position z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-rot" class="nested">
      <h3><a href="#shape-params-rot" class="anchor"></a> rot
        <span class="type">Object</span>
      </h3>
      <p>Object rotation</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object rotation x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object rotation y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object rotation z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-scale" class="nested">
      <h3><a href="#shape-params-scale" class="anchor"></a> scale
        <span class="type">Object</span>
      </h3>
      <p>Object scale</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object scale x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object scale y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object scale z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-target" class="nested">
      <h3><a href="#shape-params-target" class="anchor"></a> target
        <span class="type">Object</span>
      </h3>
      <p>Object target</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object target x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object target y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object target z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-morph" class="nested">
      <h3><a href="#shape-params-morph" class="anchor"></a> morph
        <span class="type">Object</span>
      </h3>
      <p>Only for <code>WHS.Morph</code> object</p>
      <ul>
        <li>
          <h3>speed
            <span class="type">Number</span>
            <span class="default">1</span>
          </h3>
          <p>Object animation speed</p>
        </li>
        <li>
          <h3>duration
            <span class="type">Number</span>
            <span class="default">1</span>
          </h3>
          <p>Object animation duration</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-physics">
      <h3><a href="#shape-params-physics" class="anchor"></a> physics
        <span class="type">Boolean</span>
        <span class="default">(regular): true / (light): false</span>
      </h3>
      <p>Defines if object is a physics object</p>
    </li>
  </ul>
</div>

To choose material setup `kind` property with name of Three.js material type. For example *THREE.MeshLambertMaterial*
 will be "lambert".
<script src="https://gist.github.com/sasha240100/51180537efcdacb005a3.js"></script>

<aside class="success">
<b>WhitestormJS material support this types</b>: 
</aside>

## WHS.Light [Super Class]

> Light Example. WHS.SpotLight is an instance of WHS.Light.

```javascript

var light = GAME.SpotLight( {
    light: {
        color: 0xffffff, //0x00ff00,
        intensity: 0.3,
        distance: 500,
    },

    shadowmap: {
        width: 2048,
        height: 2048,
        top: 0,
        fov: 90
    },

    pos: {
        x: 160, // 100,
        y: 120, // 30,
        z: 160, // 100
    },

    target: {
        x: 0,
        y: 10,
        z: 0
    }
} );

```

> <h4>Methods:</h4>
>
> **.build( ...tags )** - aplly position and rotation to mesh, returning `Promise` when ready.
>
> **.addTo( root, ...tags )** - adds WHS.Light object to scene (WHS.World). Returns `Promise` object.
>
> **.clone()** - clone object and it's parameters including latest position/rotation. Returns new `WHS object`.
>
> **.setPosition( x, y, z )** - set object's position by x, y, z. Returns new `WHS object`.
>
> **.setRotation( x, y, z )** - set object's rotation by x, y, z. Returns new `WHS object`.
>
> **.copy( source )** - assign object to this object. Returns new `WHS object`.
>
> **.clone()** - clone object and it's parameters including latest position/rotation. Returns new `WHS object`.
>
> **.remove()** - remove object from scene. Returns `WHS object`.
>
> **.retrieve()** - add object to scene after it was removed. Returns `WHS object`.
>
> **.buildShadow()** - apply shadowmap parameters to light.

<aside class="notice"> Almost similar to <a href="#whs-shape-class"><code>WHS.Shape</code></a></aside>

WHS.Light class is very similar to WHS.Shape, but it is optimized for lights, because WHS.Shape doesn't support processing properties like `light` or `shadowmap`. It doesn't have `geometry`, `mass`, and `material`.

Parameter     |       Default        | Type      | Description |
------------- | -------------------- | --------- | ----------- |
**light**     | Light object         | `Object`  | Light object.
**shadowmap** | Shadowmap object     | `Object`  | Shadowmap object.
**mass**      | 10                   | `Number`  | Physics object.
**pos**       | `{x: 0, y: 0, z: 0}` | `Vector3` | Position Vector.
**rot**       | `{x: 0, y: 0, z: 0}` | `Euler3`  | Rotation Euler.
**target**    | `{x: 0, y: 0, z: 0}` | `Vector3` | Target Vector.

### Light object.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**color**      | 0xffffff             | `Color`   | Light color.
**skyColor**   | 0xffffff             | `Color`   | Sky color.
**groundColor**| 0xffffff             | `Color`   | Ground color.
**intensity**  | 1                    | `Number`  | Shine intensity.
**distance**   | 100                  | `Number`  | Light cast distance.
**angle**      | Math.PI/3            | `Number`  | Light cast angle.

### Shadowmap object.

TODO.

## WHS.API.extend( object, ...extensions ); [API]

`WHS.API.extend()` or just `WHS.API.extend()` is made to simplify defining defaults process. We use it to check object for undefined parameters and fill them with our defaults.

That's how you can use it:
<script src="https://gist.github.com/sasha240100/cf1af9b43d06a1d2756d.js"></script>

Will return:

<script src="https://gist.github.com/sasha240100/8af05b677037ff4efb90.js"></script>

<aside class="warning yellow">This function is used in WhitestormJS Core!</aside>


## WHS.API.loadMaterial( material ); [API]

Turns your material parameter and returns whs material object.
This function checks for `kind` property and turns it into `THREE.Material` object.

Returns object that consist of `_material`, `_restitution` and `_friction`, where `_material` is a PhysiJS material object.

<aside class="warning yellow">This function is used in WhitestormJS Core!</aside>

## WHS.API.merge( box, rabbits ); [API]

Merge is a simple function that adds Objects to another objects(with .add() function). Use it if you need to add multiple objects to scene for example.

Add rabbits to box!

<aside class="warning">Need to be rewritten [TODO]</aside>

## WHS.API.texture( url, options  ); [API]

```javascript

var cube = GAME.Cube({

    geometry: {
        width: 2,
        height: 2,
        depth: 2
    },

    mass: 1,

    material: {
        kind: "lambert",
        map: WHS.API.texture( 'assets/textures/box.jpg' )
    },

    pos: {
        x: 50,
        y: 70,
        z: 60
    }

);

```

`WHS.API.texture()` wraps whs texture object to Three.js texture.

### Options.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**offset**     | `{ x: 0, y: 0 }`     | `Vector2` | Texture offset.
**repeat**     | `{ x: 0, y: 0 }`     | `Vector2` | Texture repeat.

<aside class="notice"><code>options</code> parameter is optional.</aside>

<aside class="warning yellow">This function is used in WhitestormJS Core!</aside>



