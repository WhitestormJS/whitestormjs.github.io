---

title: Octahedron
longtitle: WHS.Octahedron
category: Meshes
icon: octahedron_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/Octahedron.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Octahedron.js

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - octahedron

---


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

  position: [0, 100, 0]
});

octahedron.addTo(world);
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
