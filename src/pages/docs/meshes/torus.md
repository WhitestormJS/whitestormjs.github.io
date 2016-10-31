---

title: Torus
longtitle: WHS.Torus
category: Meshes
icon: torus_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/torus.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Torus.js

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - torus

---



`WHS.Torus` class makes a torus figure. Torus is a donut. Donut is a torus.


```javascript
const torus = new WHS.Torus({
  geometry: {
    radius: 5,
    tube: 2
  },

  mass: 10,

  material: {
    kind: 'lambert',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  position: {
    y: 35
  }
});

torus.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    radius: 100, // Number.
    tube: 40, // Number.
    radialSegments: 8, // Number.
    tubularSegments: 6, // Number.
    arc: Math.PI * 2 // Number.
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: [
    'radius',
    'tube',
    'radialSegments',
    'tubularSegments',
    'arc'
  ]
}
```
