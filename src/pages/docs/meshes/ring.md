---

title: Ring
longtitle: WHS.Ring
category: Meshes
icon: ring_class.png
wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 2d
 - component
 - MeshComponent
 - polyhedron

---


`WHS.Ring` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

`WHS.Ring` class makes a circle or just 2D <a href="#torus">`WHS.Torus`</a> that doesn't support physics.

```javascript
const ring = new WHS.Ring({
  geometry: {
    innerRadius: 5,
    outerRadius: 2
  },

  mass: 0,

  material: {
    kind: 'basic',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  position: {
    x: 0,
    y: 8,
    z: 0
  },

  rotation: {
    x: Math.PI/4
  }
});

ring.addTo(world);
```
