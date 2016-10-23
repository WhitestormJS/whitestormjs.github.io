---

title: Icosahderon
longtitle: WHS.Icosahderon
category: Meshes
icon: icosahedron_class.png
wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - icosahedron

---

`WHS.Icosahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, an **icosahedron** is a polyhedron with 20 faces.
There are many kinds of icosahedra, with some being more symmetrical than others. The most well known is the Platonic, convex regular icosahedron.

`WHS.Icosahedron` creates Icosahedron object by it's `radius` and `detail`.


```javascript

const icosahedron = new WHS.Icosahedron({
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

icosahedron.addTo(world);

```
