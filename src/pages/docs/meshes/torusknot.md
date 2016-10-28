---

title: Torusknot
longtitle: WHS.Torusknot
category: Meshes

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/torusknot.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Torusknot.js

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
