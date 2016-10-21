---

title: Plane
longtitle: WHS.Plane
category: Meshes
icon: plane_class.png

tags:
 - three.js
 - webgl
 - core
 - component
 - MeshComponent
 - plane

---

`WHS.Plane` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Plane` class is used for creating planes by it's `width` and `height`.


```javascript
const plane = new WHS.Plane({
  geometry: {
    width: 20,
    height: 30
  },

  mass: 0,

  material: {
    color: 0xff0000,
    kind: 'basic'
  }
});

plane.addTo(world);
```
