---

title: Lathe
longtitle: WHS.Lathe
category: Meshes
icon: lathe_class.png
wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - lathe

---

A **LatheGeometry** allows you to create shapes from a smooth curve. This curve is defined by a number of points (also called knots) and is most often called a spline. This spline is rotated around a fixed point and results in vase- and bell-like shapes.

In 3D computer graphics, a lathed object is a 3D model whose vertex geometry is produced by rotating the points of a spline or other point set around a fixed axis. The lathing may be partial; the amount of rotation is not necessarily a full 360 degrees. The point set providing the initial source data can be thought of as a cross section through the object along a plane containing its axis of radial symmetry.

The [following example](http://threejs.org/docs/scenes/geometry-browser.html#LatheGeometry) shows a geometry which can be generated using `WHS.Lathe` class.


```javascript
const points = [];

for (let i = 0; i < 10; i++) {
  points.push(
    new THREE.Vector2(
      (Math.sin(i * 0.7) * 15 + 50) / 10,
      (i - 5) * 0.2
    )
  );
}

const lathe = new WHS.Lathe({
  geometry: {
    points: points
  },

  mass: 10,

  material: {
    kind: 'lambert',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  position: {
    x: 0,
    y: 50,
    z: 10
  }
});

lathe.addTo(world);
```
