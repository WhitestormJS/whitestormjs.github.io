---

title: Line
longtitle: WHS.Line
category: Meshes

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/line.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Line.js

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - line

---

Line component is generated from a curve/line and amount of vectors that should be used (points).

```javascript
const line = new WHS.Line({
  geometry: {
    curve: new THREE.LineCurve3(new THREE.Vector3(10, 10, 0), new THREE.Vector3(10, 30, 0))
  },

  softbody: true
});

line.addTo(GAME);
```

Usage as a rope (`softbody:true`):

```javascript
const rope1 = new WHS.Line({
  geometry: {
    curve: new THREE.LineCurve3(new THREE.Vector3(10, 10, 0), new THREE.Vector3(10, 30, 0))
  },

  physics: {
    piterations: 10,
    viterations: 10
  },

  mass: 1,

  softbody: true
});

rope1.addTo(GAME);

rope1.appendAnchor(GAME, toptube, 50, 1);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    curve: false, // Boolean
    points: 50 // Number
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: ['curve', 'points']
}
```
