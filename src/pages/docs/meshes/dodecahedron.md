---

title: Dodecahedron
longtitle: WHS.Dodecahedron
category: Meshes

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - dodecahedron

---

`WHS.Dodecahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, a **dodecahedron** is any *polyhedron with twelve flat faces*. The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. There are also three regular star dodecahedra, which are constructed as stellations of the convex form. All of these have icosahedral symmetry, order 120.

`WHS.Dodecahedron` creates Dodecahedron object by it's `radius` and `detail`.

```javascript
const dodecahedron = new WHS.Dodecahedron({
  geometry: {
    radius: 2
  },

  mass: 10,

  material: {
    color: 0xffffff,
    kind: 'basic'
  },

  position: {
    x: 0,
    y: 10,
    z: 0
  }
});

dodecahedron.addTo(world);
```
