---

title: Torusknot
longtitle: WHS.Torusknot
category: Meshes
wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - torusknot

---

`WHS.Torusknot` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

`WHS.Torusknot` class makes a torusknot figure. It's like crooked donut, very crooked.

```javascript
const torusknot = new WHS.Torusknot({
  geometry: {
    radius:5,
    tube: 2
  },

  mass: 10,

  material: {
    kind: "phong",
    color: 0xffffff
  },

  pos: {
    y: 100
  }
});

torusknot.addTo(world);
```
