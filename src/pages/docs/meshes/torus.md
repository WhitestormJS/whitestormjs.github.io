---

title: Torus
longtitle: WHS.Torus
category: Meshes
icon: torus_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/torus.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Torus.js

wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - torus

---


`WHS.Torus` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

`WHS.Torus` class makes a torus figure. Torus is a donut. Donut is a torus.


```javascript
const torus = new WHS.Torus({
  geometry: {
    radius: 5,
    tube: 2
  },

  mass: 10,

  material: {
    kind: 'lambert',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  position: {
    y: 35
  }
});

torus.addTo(world);
```
