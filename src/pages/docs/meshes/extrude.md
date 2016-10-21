---

title: Extrude
longtitle: WHS.Extrude
category: Meshes
icon: extrude_class.png

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - extrude

---

Extrude geometry means that you can create a 3D mesh from any 2D shape using three.js geometry based on `THREE.Vector2`. Such implementation will help you to make volumed shapes that have their own depth and can be seen from all angels.

You can also find some interesting examples made using three.js which is a core of Whitestorm.js, such as:

 - [Webgl geometry extrude](http://threejs.org/examples/webgl_geometry_extrude_shapes.html)
 - [Extrude shapes from geodata](http://threejs.org/examples/webgl_geometry_extrude_shapes2.html)
 - [Extrude splines](http://threejs.org/examples/webgl_geometry_extrude_splines.html)

Such examples can be easily implemented using whitestorm.js or it's plugins. Use `WHS.Extrude` class with `THREE.Shape` to get extrude effect of shape defined by 2D vectors.

This class is similar to `THREE.ExtrudeGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

```javascript
const shape = new THREE.Shape([
  new THREE.Vector2(-4,-4),
  new THREE.Vector2(-2,0),
  new THREE.Vector2(-4,4),
  new THREE.Vector2(0,2),
  new THREE.Vector2(4,4),
  new THREE.Vector2(2,0),
  new THREE.Vector2(4,-4),
  new THREE.Vector2(0,-2)
]);

const extrude = new WHS.Extrude({
  geometry: {
    shapes: shape,
    options: {
      bevelEnabled: false,
      bevelSize: 0,
      amount: 2
    }
  },

  mass: 10,

  material: {
    kind: 'basic',
    color: 0xffffff
  },

  position: {
    x: 0,
    y: 100,
    z: 0
  }
});

extrude.addTo(world);
```
