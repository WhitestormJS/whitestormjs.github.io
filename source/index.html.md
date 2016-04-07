---
title: API Reference

language_tabs:
  - javascript
  - html
  - output

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - cube_class
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
  - smooth_class
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

It implements a _core_ with cmponent system and plugin support for fast development of 3D scene with physics.

Automizing your web app with whitestorm.js is fast and comfortable. You can use whitestorm's API for creating different shapes instead of writing simple functionality each time.


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

> Defaults for `WHS.World` Class:

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

Parameter     |       Default        | Type      | Description |
------------- | -------------------- | --------- | ----------- |
**gravity**   | `{x: 0, y: 0, z: 0}` | `Vector3` | Gravity vector.
**camera**    | Camera object        | `Object`  | Camera object.
**physics**   | Physics object       | `Object`  | Physics object.
**shadowmap** | true                 | `Boolean` | Shadows support.
**autoresize**| true                 | `Boolean` | Autoresize function.
**width**     | window.innerWidth    | `Number`  | Canvas width.
**height**    | window.innerHeight   | `Number`  | Canvas height.
**rWidth**    | 1                    | `Number`  | Resolution width ratio.
**rHeight**   | 1                    | `Number`  | Resolution height ratio.
**background**| 0x000000             | `Color`   | Color of background.
**assets**    | "./assets"           | `String`  | Assets folder.
**container** | document.body        | `Object`  | Where to put whs canvas.

<aside class="warning yellow">
You must include <code>path_worker</code> and <code>path_ammo</code> parameters with pathes to Physi.js worker script and Ammo.js.
</aside>

### Camera object.

Parameter     |       Default        | Type      | Description |
------------- | -------------------- | --------- | ----------- |
  x, y, z   | `x: 0, y: 0, z: 0`   | `Vector3` | Camera pozition.
  aspect    | 75                   | `Number`  | Camera aspect.
  near      | 1                    | `Number`  | Camera near.
  far       | 1000                 | `Number`  | Camera far.

### Physics object. (PhysiJS settings)

Parameter               |       Default                                | Type      | Description |
----------------------- | -------------------------------------------- | --------- | ----------- |
  quatNormalizeSkip     | 0                                            | `Number`  | TODO.
  quatNormalizeFast     | false                                        | `Boolean` | TODO.
  solver                |  **{**                                       | `Object`  | TODO.
                        |    &nbsp;&nbsp;&nbsp;&nbsp;iterations: 20,   | `Number`  | TODO.
                        |    &nbsp;&nbsp;&nbsp;&nbsp;tolerance: 20     | `Number`  | TODO.
                        |  **}**                                       |           | TODO.
  defMaterial           |  **{**                                       | `Object`  | TODO.
                        |    &nbsp;&nbsp;&nbsp;&nbsp;cEqStiffness: 1e8,| `Number`  | TODO.
                        |    &nbsp;&nbsp;&nbsp;&nbsp;cEqRegTime: 3     | `Number`  | TODO.
                        |  **}**                                       |           | TODO.

<aside class="notice">
More information about Physijs properties you can find [here](https://github.com/chandlerprall/Physijs/wiki)
</aside>

## Enable debugging.
Debugging is the process of finding and resolving of defects that prevent correct operation of computer software or a system.

For debugging simulating proccess set `WHS.debug = true;` at the begining of your application.
All proccesses, such as *creating, building, adding to world or removing* will be described in the console.



<h1 class="big" id="API">API</h1>

## WHS.Shape [Super Class]

> WHS.Shape structure.

```javascript

var shape = GAME.Shape({
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

```

> <h4>Methods:</h4>
>
> **.build( ...tags )** - aplly position and rotation to mesh, returning `Promise` when ready.
>
> **.addTo( root, ...tags )** - add WHS.Shape object to scene (WHS.World). Returns `Promise` object.
>
> **.remove()** - remove object from scene. Returns `WHS object`.
>
> **.retrieve()** - add object to scene after it was removed. Returns `WHS object`.
>
> <div class="tip-right"> <b>...tags</b> is a list of tags that inform core how to make changes to <code>WHS objects</code>.</div>

WHS.Shape is a default class for all object's (except lights and cameras).
It consist of Three.js mesh, Physi.js mesh and whs parameters such as geometry or material.

**geometry** is an object that contains shape's options for generating vertices and faces.

**material** is an object that contains material properties of Three.js + friction and restitution for physics material in Physi.js.

Parameter     |       Default        | Type      | Description |
------------- | -------------------- | --------- | ----------- |
**geometry**  | Geometry object      | `Object`  | Geometry object.
**material**  | Material object      | `Object`  | Material object.
**mass**      | 10                   | `Number`  | Physics object.
**pos**       | `{x: 0, y: 0, z: 0}` | `Vector3` | Position Vector.
**rot**       | `{x: 0, y: 0, z: 0}` | `Euler3`  | Rotation Euler.
**target**    | `{x: 0, y: 0, z: 0}` | `Vector3` | Target Vector.

To choose material setup `kind` property with name of Three.js material type. For example *THREE.MeshLambertMaterial*
 will be "lambert".
<script src="https://gist.github.com/sasha240100/51180537efcdacb005a3.js"></script>

<aside class="success">
<b>WhitestormJS material support this types</b>: 
</aside>
  <ul>
    <li><b>basic</b> - THREE.MeshBasicMaterial</li>
    <li><b>linebasic</b> - THREE.MeshLineBasicMaterial </li>
    <li><b>linedashed</b> - THREE.MeshLineDashedMaterial </li>
    <li><b>material</b> - THREE.Material </li>
    <li><b>depth</b> - THREE.MeshDepthMaterial </li>
    <li><b>face</b> - THREE.MultiMaterial </li>
    <li><b>lambert</b> - THREE.MeshLambertMaterial </li>
    <li><b>normal</b> - THREE.MeshNormalMaterial </li>
    <li><b>phong</b> - THREE.MeshPhongMaterial </li>
    <li><b>pointcloud</b> - THREE.MeshPointsMaterial </li>
    <li><b>rawshader</b> - THREE.MeshRawShaderMaterial </li>
    <li><b>shader</b> - THREE.MeshShaderMaterial </li>
    <li><b>sprite</b> - THREE.MeshSpriteMaterial</li>
  </ul>

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
> **All that WHS.Shape has +**
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



