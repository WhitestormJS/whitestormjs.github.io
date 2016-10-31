---

title: Torusknot
longtitle: WHS.Torusknot
category: Meshes

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/torusknot.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Torusknot.js

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - torusknot

---


`WHS.Torusknot` class makes a torusknot figure. It's like crooked donut, very crooked.

```javascript
const torusknot = new WHS.Torusknot({
  geometry: {
    radius:5,
    tube: 2
  },

  mass: 10,

  material: {
    kind: "phong",
    color: 0xffffff
  },

  pos: {
    y: 100
  }
});

torusknot.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    radius: 100, // Number.
    tube: 40, // Number.
    radialSegments: 64, // Number.
    tubularSegments: 8, // Number.
    p: 2, // Number.
    q: 3 // Number.
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
    'p',
    'q'
  ]
}
```
