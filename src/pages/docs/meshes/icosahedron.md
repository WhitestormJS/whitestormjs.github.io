---

title: Icosahderon
longtitle: WHS.Icosahderon
category: Meshes
icon: icosahedron_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/icosahedron.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Icosahderon.js

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - icosahedron

---


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

  position: [0, 100, 0]
});

icosahedron.addTo(world);

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
