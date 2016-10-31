---

title: Dodecahedron
longtitle: WHS.Dodecahedron
category: Meshes
icon: dodecahedron_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/dodecahedron.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Dodecahedron.js

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - dodecahedron

---


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
    y: 10
  }
});

dodecahedron.addTo(world);
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
