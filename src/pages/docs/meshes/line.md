---

title: Line
longtitle: WHS.Line
category: Meshes
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
