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

## Parameters

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

    x: 0,
    y: 0,
    z: 0
  },

  rWidth: 1, // Resolution(width).
  rHeight: 1, // Resolution(height).

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

  init: {
    scene: true,
    stats: true,
    camera: true,
    helpers: true,
    rendering: true
  }
}
```
