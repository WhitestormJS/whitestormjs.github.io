---

title: Model
longtitle: WHS.Model
category: Meshes
icon: model_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/model.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Model.js

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - MeshComponent
 - model

---

Model class loads geometry from `JSON` file by url as it's material, but material you can replace with your own. Just add `useCustomMaterial` property with `true` value in `material` parameter object. This class should be used if none of other simple classes can generate such geometry or you basically need to load your custom geometry, that can be for example car or teapot model. 

- [Basic Model example](https:/whs-dev.surge.sh/#basic/model/)
- [Example with several models of different types](https:/whs-dev.surge.sh/#design/easter/)

```javascript
const teapot = new WHS.Model({
  geometry: {
    path: "assets/models/utah-teapot-large.json",
    physics: "assets/models/utah-teapot-light.json"
  },

  mass: 10,

  material: {
    vertexColors: THREE.VertexColors,
    shading: THREE.SmoothShading,
    map: WHS.texture('assets/textures/teapot.jpg', {repeat:{x: 2, y:2}}),
    kind: 'phong',
    side: THREE.DoubleSide,
    useCustomMaterial: true,
    rest: 0,
    fri: 1
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  },

  scale: {
    x: 4,
    y: 4,
    z: 4
  }
});

teapot.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    path: '', // String. Url to model file.
    physics: '', // String. Url of physics model. (opional)
    loader: JSONLoader // Three.js loader.
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: ['path', 'physics', 'loader']
}
```
