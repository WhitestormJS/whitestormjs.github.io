---

title: Plane
longtitle: WHS.Plane
category: Meshes
icon: plane_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/plane.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Plane.js

tags:
 - three.js
 - webgl
 - core
 - component
 - MeshComponent
 - plane

---


`WHS.Plane` class is used for creating planes by it's `width` and `height`.


```javascript
const plane = new WHS.Plane({
  geometry: {
    width: 20,
    height: 30
  },

  mass: 0,

  material: {
    color: 0xff0000,
    kind: 'basic'
  }
});

plane.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    width: 10, // Number
    height: 10, // Number
    wSegments: 32, // Number
    hSegments: 32 // Number
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: ['width', 'height', 'wSegments', 'hSegments']
}
```
