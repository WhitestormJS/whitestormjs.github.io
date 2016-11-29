---

title: World
longtitle: WHS.World
category: Core

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/core/world.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/core/World.js

tags:
 - three.js
 - webgl
 - 3d

---

> `WHS.World` class is based on `WHS.Component`

This component is used to prepare scene, setup physics, camera, renderer and all other things that you usually do before making meshes.

## METHODS

### `.start()`

Start rendering loop and physics simulation (if you use version with physics).

### `.importScene(scene, nested = true)`

This method is used to apply `THREE.Scene` to existing world. It can be useful when you want to import scene after loading it from separate file or config.

"nested" option defines whether children are converted to components and added to world's children. It is `true` by default.

### `.setControls(controls)`

Applies controls object to current world. For example if you want to use WHS.OrbitControls, do this:

```javascript
world.setControls(new WHS.OrbitControls());
```

### `.addLoop(loop) & .removeLoop(loop)`

Adds loop to this world.

```javascript
const loop = new WHS.Loop(() => {
  // ...
});

world.addLoop(loop);
loop.start();
```

> You can add loop to world and start it in one line.
>
> To do this - pass world as argument to start: `loop.start(world);`


## PARAMETERS

```javascript
{
  stats: false,
  autoresize: false,
  softbody: false,

  helpers: {
    grid: false,
    axis: false
  },

  gravity: {
    x: 0,
    y: 0,
    z: 0
  },

  rendering: {
    shadowmap: {
      enabled: true,
      type: THREE.PCFSoftShadowMap
    },

    background: {
      color: 0x000000,
      opacity: 1
    },

    renderer: {}
  },

  camera: {
    aspect: 75,
    near: 1,
    far: 1000,

    position: {
      x: 0,
      y: 0,
      z: 0
    }
  },

  resolution: {
    width: 1,
    height: 1
  },

  physics: {
    fixedTimeStep: 1 / 60,
    broadphase: {type: 'dynamic'}
  },

  fog: {
    type: false,

    density: 0.00025,
    hex: 0x000000,
    near: 1,
    far: 1000
  },

  modules: {
    element: true,
    scene: true,
    stats: true,
    camera: true,
    helpers: true,
    rendering: true
  }
}
```

## MODULES

**Modules** are parts of world that are used in miscellaneous tasks like "renderig of 3d scene", "applying to DOM"...
Module as a property of component is named as `.$[module name]`.

### `.$scene` (module)

Three.js scene used to handle objects (`.native` of components). Can be also a Physi.js scene if physics is used (Same as Three.js scene but with physics additions).

### `.$camera` (module)

Three.js camera used to render objects in 2D canvas. (Used in `renderer.render(scene, camera)` part)

### `.$rendering` (module)

Rendering plugin used to wrap Three.js rendering part. (`WHS.BasicRendering` by default)

### `.$element` (module)

DOM element (`<div class="whs">...</div>`) that handles app canvas and is appended to **container object**.

## Module makers (Methods to create modules)

These functions are executed by default, but you can turn them off like that:

```javascript
const world = new WHS.World({
  modules: {
    camera: false // ".$camera" won't be created.
  }
});
```

### `.make$scene()`

Makes _$scene_ module (Three.js scene).

### `.make$camera()`

Makes _$camera_ module (`WHS.PerspectiveCamera` instance).

### `.make$rendering()`

Makes _$scene_ module (`WHS.BasicRendering` instance).

### `.make$element()`

Makes _$element_ module (Makes div with canvas and appends it to **container object**).

## PROPERTIES

### `.render` (boolean)

Defines if scene is rendered each frame or not. The following script will disable rendering:

```javascript
world.render = false;
```

### `.simulate` (boolean)

Same as `.render`, but for physics. Defines if physics is simulated each frame.

### `.loops` (array)

Array of loops that are executed by this world object.

