---

title: Tetrahedron
longtitle: WHS.Tetrahedron
category: Meshes
icon: tetrahedron_class.png
wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - tetrahedron

---

`WHS.Tetrahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

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
