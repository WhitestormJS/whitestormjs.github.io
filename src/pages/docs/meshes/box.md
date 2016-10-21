---

title: Box
longtitle: WHS.Box
category: Meshes

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

`WHS.Box` Creates a simple 3D Box. It extends <a href="#shape">`WHS.Shape`</a> and inherits all of its methods.

As told on <a href="#shape">`WHS.Shape`</a> definition, while you can pass any of the inherited params for this shape construction, you will need to
pass specific parameters to build this mesh as a __geometry__ object.

This shape can be set as a **softbody** object.

```javascript
const box = new WHS.Box({
  geometry: {
    width: 2,
    height: 2,
    depth: 2
  },

  mass: 1,

  softbody: false,

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
