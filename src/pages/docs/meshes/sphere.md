---

title: Sphere
longtitle: WHS.Sphere
category: Meshes
icon: sphere_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/sphere.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Sphere.js

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - sphere

---

`WHS.Sphere` class is used to create sphere objects by it's `radius` property and other values that determinates it's detality.

It is similar to `THREE.SphereGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

Then it creates an `Three.js mesh` or a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).

```javascript
const sphere = new WHS.Sphere({
  geometry: {
    radius: 2
  },

  mass: 10,

  material: {
    color: 0xffffff,
    kind: 'lambert'
  },

  position: {
    y: 100
  }
});

sphere.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    radius: 1, // Number.
    widthSegments: 8, // Number
    heightSegments: 6 // Number
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: ['radius', 'widthSegments', 'heightSegments']
}
```
