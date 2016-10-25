---

title: Box
longtitle: WHS.Box
category: Meshes
icon: box_class.png

featured:
  title: Box
  describe: How to use a basic element
  image: box.png

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - box

---

As told on `WHS.Component` definition, while you can pass any of the inherited params for this component construction, you will need to
pass specific parameters to build this mesh as a __geometry__ object.

This shape can be set as a **softbody** object.

```javascript
const box = new WHS.Box({
  geometry: {
    width: 2, // Number
    height: 2, // Number
    depth: 2 // Number
  },

  mass: 1,

  material: {
    kind: 'basic',
    color: 0xffffff
  },

  position: {
    x: 50,
    y: 70,
    z: 60
  }
});

box.addTo(world);
```
