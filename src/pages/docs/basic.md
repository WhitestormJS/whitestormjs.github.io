---

title: Basic sphere («Hello World» example)
longtitle: Creating a basic sphere that falls down on the plane.

tags:
 - three.js
 - webgl
 - 3d

---

To create whitestorm.js app you should make a basic HTML document with `html`, `head` and `body` tags. Next step is to include Whitestorm.js to the document and main app script file. You can do it simply using `script` tag.

<img src="../../images/docs/basic/helloworld.png" width="100%" />

Try this [helloworld demo online](https://whs-dev.surge.sh/examples/#basic/helloworld).

First thing you should setup is the World object. **When you do this, you do multiple things at once:** 
 - Setup `THREE.Scene` (or `Physijs.Scene`)
 - Make perspective camera and add it scene.
 - Set gravity (if physics is on)
 - Apply background and other renderer options.
 - Set autoresize/stats (in addition).

```javascript
const world = new WHS.World({
  autoresize: "window",
  stats: 'fps', // Statistics tool for developers.

  rendering: {
    background: {
      color: 0x162129
    }
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

```

Next thing is our sphere. By default if you use a physics version of whitestorm.js all objects are created as physics objects. If you don't want to have a physics object - simply add `physics: false` line to sphere config.

```javascript
// const world = ...

const sphere = new WHS.Sphere({ // Create sphere component.
  geometry: {
    radius: 3,
    widthSegments: 32,
    heightSegments: 32
  },

  mass: 10, // Mass of physics object.

  material: {
    color: 0xF2F2F2,
    kind: 'basic'
  },

  position: [0, 100, 0]
});

sphere.addTo(world); // Add sphere to world.
```

And the last thing, add the plane and start rendering:

```javascript
// const world = ...
// const sphere = ...

new WHS.Plane({
  geometry: {
    width: size,
    height: size
  },

  mass: 0,

  material: {
    color: 0x447F8B,
    kind: 'basic'
  },

  rotation: {
    x: - Math.PI / 2
  }
}).addTo(world);

world.start(); // Start animations and physics simulation.
```

