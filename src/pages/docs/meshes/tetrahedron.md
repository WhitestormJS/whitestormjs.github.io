---

title: Tetrahedron
longtitle: WHS.Tetrahedron
category: Meshes
icon: tetrahedron_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/tetrahedron.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Tetrahedron.js

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - tetrahedron

---


In geometry, a **tetrahedron** is *a polyhedron composed of four triangular faces, six straight edges, and four vertex corners*. The tetrahedron is the simplest of all the ordinary convex polyhedra and the only one that has fewer than 5 faces.

`WHS.Tetrahedron` creates Tetrahedron object by it's `radius` and `detail`.

```javascript
const tetrahedron = new WHS.Tetrahedron({
  geometry: {
    radius: 2,
    detail: 1
  },

  mass: 10,

  material: {
    color: 0xffffff,
    kind: 'basic'
  },

  position: {
    x: 0,
    y: 100,
    z: 0
  }
});

tetrahedron.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    radius: 1, // Number
    detail: 0 // Number
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: ['radius', 'detail']
}
```
