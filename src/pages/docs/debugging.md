---

title: Debugging

tags:
 - three.js
 - webgl
 - 3d

---

Debugging components in Whitestorm.js is easy. You can use as much tools as you want. Here you can find some information about them.

<div class="midimg">
  <img src="../../images/docs/debugging/debugging.png" />
</div>

## Satistics

> This option should be used only in development or beta mode.

To enable it - simply add `stats: true` in your WHS.World:

```javascript
const world = new WHS.World({
  stats: "fps",

  // ...
})
```

There are three types of default stats type:

  - `"fps"` - Frames per second.
  - `"ms"` - Milliseconds per second.
  - `"mb"` - Megabytes.

## World (Scene)

For `WHS.World` object we have it's own helpers that you can enable with params. 

Those helpers are disabled by default. `WHS.World` supports two helpers:

  - `grid` - set _size, step, color1, color2_
  - `axis` - set _size_ of axises.

**For example:**

```javascript
const world = new WHS.World({
  // ...
  
  helpers: {
    grid: {
      size: 100,
      step: 100,
      color1: 0xff0000
    },

    axis: {
      size: 100
    }
  }
})
```

## Components (meshes)

There are 4 types of helpers for meshes:

  - `box`
  - `faceNormals`
  - `vertexNormals`
  - `boundingBox`

You can add them in two ways:

### Adding helpers using params

```javascript
const sphere = new WHS.Sphere({
  // ...

  helpers: {
    box: true
  }
})
```

If you need to change helper's default parameters - replace `true` with custom params object. 

### Adding helpers using .addHelper() method

```javascript
const sphere = new WHS.Sphere();
sphere.position.x = 10;
sphere.addTo(world);
sphere.addHelper('faceNormals', {color: 0x0000ff, size: 0.5});
```

#### `.updateHelper()`

If your object isn't static (can be physics object or just moves with animation), so your position is changing.

You can use the following hack to update your helper's position:

```javascript
new WHS.Loop(() =>
  sphere.updateHelper('boundingBox')
).start(world);
```

## Components (lights, cameras, ...)

For them it is adviced to enable helper through params:

```javascript
const light = new WHS.PointLight({
  // ...

  helper: true
});
```
