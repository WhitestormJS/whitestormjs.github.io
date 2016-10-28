---

title: Line
longtitle: WHS.Line
category: Meshes

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/line.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Line.js

wip: 
 - Add a properties table
 - Add more information

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - line

---

Usage as a rope (`softbody:true`):

```javascript
const rope1 = new WHS.Line({
  geometry: {
    curve: new THREE.LineCurve3(sphereStart.position.clone(), new THREE.Vector3(10, 30, 0))
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
