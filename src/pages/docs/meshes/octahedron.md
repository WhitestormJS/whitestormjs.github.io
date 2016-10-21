---

title: Octahedron
longtitle: WHS.Octahedron
category: Meshes

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - octahedron

---

`WHS.Octahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, an **octahedron** is *a polyhedron with eight faces*. A regular octahedron is a Platonic solid composed of eight equilateral triangles, four of which meet at each vertex.

`WHS.Octahedron` creates Octahedron object by it's `radius` and `detail`.


```javascript
const octahedron = new WHS.Octahedron({
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

octahedron.addTo(world);
```
