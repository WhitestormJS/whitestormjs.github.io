---

title: Box
longtitle: WHS.Box
category: Meshes
icon: box_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/box.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Box.js

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
    width: 2, 
    height: 2,
    depth: 2
  },

  mass: 1,

  material: {
    kind: 'basic',
    color: 0xffffff
  },

  position: [50, 60, 70]
});

box.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    width: 1, // Number
    height: 1, // Number
    depth: 1 // Number
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: ['width', 'height', 'depth']
}
```
