---

title: Ring
longtitle: WHS.Ring
category: Meshes
icon: ring_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/ring.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Ring.js

tags:
 - three.js
 - webgl
 - 2d
 - component
 - MeshComponent
 - polyhedron

---

`WHS.Ring` class makes a circle or just 2D <a href="#torus">`WHS.Torus`</a> that doesn't support physics.

```javascript
const ring = new WHS.Ring({
  geometry: {
    innerRadius: 5,
    outerRadius: 2
  },

  mass: 0,

  material: {
    kind: 'basic',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  position: [0, 8, 0],

  rotation: {
    x: Math.PI/4
  }
});

ring.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    innerRadius: 0, // Number.
    outerRadius: 50, // Number.
    thetaSegments: 8, // Number.
    phiSegments: 8, // Number.
    thetaStart: 0, // Number.
    thetaLength: Math.PI * 2 // Number.
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: [
    'innerRadius', 
    'outerRadius', 
    'thetaSegments', 
    'phiSegments', 
    'thetaStart', 
    'thetaLength'
  ]
}
```
