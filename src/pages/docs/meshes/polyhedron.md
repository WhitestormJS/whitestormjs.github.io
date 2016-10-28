---

title: Polyhedron
longtitle: WHS.Polyhedron
category: Meshes
icon: polyhedron_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/polyhedron.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Polyhedron.js

wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - polyhedron

---

`WHS.Polyhedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In elementary geometry, a **polyhedron** is *a solid in three dimensions with flat polygonal faces, straight edges and sharp corners or vertices*.

`WHS.Polyhedron` creates Polyhedron object by it's `radius` and `detail`.

```javascript
const polyhedron = new WHS.Polyhedron({
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

polyhedron.addTo(world);
```
