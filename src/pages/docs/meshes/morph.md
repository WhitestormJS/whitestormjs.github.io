---

title: Morph
longtitle: WHS.Morph
category: Meshes

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - morph

---

`WHS.Morph` is a class for loading animated models or meshes.

`WHS.Morph` is used for creating animated object's that doesn't support physics. Off course you can make your own class, based on `WHS.MeshComponent` that will run animation and support physics. But you will need to update your geometry in Physi.js each time you update anmation. Physi.js currently provides physic only for static geometries.

```javascript
const morph = new WHS.Morph( {
  geometry: {
    path: "assets/models/morph/parrot.js"
  },

  material: {
    kind: 'basic',
    useVertexColors: true
  },

  scale: {
    x: 0.1,
    y: 0.1,
    z: 0.1
  },

  morph: {
    duration: 0.5,
    speed: 250
  }
});

morph.addTo(world);
```