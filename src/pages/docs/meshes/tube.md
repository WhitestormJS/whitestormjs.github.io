---

title: Tube
longtitle: WHS.Tube
category: Meshes
icon: tube_class.png
wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - tube

---

`WHS.Tube` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

`WHS.Tube` class makes a tube that extrudes along a 3d curve.

```javascript
const CustomSinCurve = THREE.Curve.create(
  function (scale) { // custom curve constructor
    this.scale = (scale === undefined) ? 1 : scale;
  },

  function ( t ) { // getPoint: t is between 0-1
    const tx = t * 3 - 1.5,
        ty = Math.sin( 2 * Math.PI * t ),
        tz = 0;

    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  }
);

const path = new CustomSinCurve( 10 );

const tube = new WHS.Tube({
  geometry: {
    path: path
  },

  mass: 0,

  material: {
    color: 0x0000ff,
    kind: 'lambert'
  }
});

tube.addTo(world);
```
