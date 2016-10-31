---

title: Morph
longtitle: WHS.Morph
category: Meshes

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/morph.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Morph.js

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

  scale: [0.1, 0.1, 0.1],

  morph: {
    duration: 0.5,
    speed: 250
  }
});

morph.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    path: '', // String. (Url)
    loader: JSONLoader // Three.js loader.
  },

  morph: {
    duration: 1, // Number. (Time in seconds)
    speed: 100 // Number
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: ['path', 'loader'],
  morph: ['duration', 'speed']
}
```
