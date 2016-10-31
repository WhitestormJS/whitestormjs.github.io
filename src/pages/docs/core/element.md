---

title: Element
longtitle: WHS.Element
category: Core

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/core/element.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/core/Element.js

tags:
 - three.js
 - webgl
 - 3d

---

Element is a wrapper around `WHS.Component` for use with Three.js meshes. If you want to make a component from Three.js light, mesh, camera or something else - use `WHS.Element`.

```javascript
const sphere = new WHS.Element(
  new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshBasicMaterial({color: 0xff0000})
  ),
  [WHS.MeshComponent]
);
```

### Structure

```javascript
new WHS.Element(
  // [Object3D],
  // [Array of Component-decorators in the right order]
)
```
