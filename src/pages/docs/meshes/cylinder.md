---

title: Cylinder
longtitle: WHS.Cylinder
category: Meshes

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/cylinder.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Cylinder.js

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - cylinder

---

A **cylinder** is one of the most basic curvilinear geometric shapes, the surface *formed by the points at a fixed distance from a given straight line, the axis of the cylinder.* The solid enclosed by this surface and by two planes perpendicular to the axis is also called a cylinder. The surface area and the volume of a cylinder have been known since deep antiquity.

```javascript
const cylinder = new WHS.Cylinder({
  geometry: {
    radiusTop: 2,
    radiusBottom: 4,
    height: 5
  },

  mass: 10,

  material: {
    color: 0xffffff,
    kind: 'basic'
  },

  pos: [0, 100, 0]
});

cylinder.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    radiusTop: 0, // Number
    radiusBottom: 1, // Number
    height: 1, // Number
    radiusSegments: 32, // Number
    heightSegments: 1, // Number
    openEnded: false, // Boolean
    thetaStart: 0, // Number
    thetaLength: Math.PI * 2 // Number
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: [
    'radiusTop',
    'radiusBottom',
    'height',
    'radiusSegments',
    'heightSegments',
    'openEnded',
    'thetaStart',
    'thetaLength'
  ]
}
```
