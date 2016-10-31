---

title: Text
longtitle: WHS.Text
category: Meshes
icon: text_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/text.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Text.js

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - text

---


`WHS.Text` class is made for creating 3D text objects.

Physics text object can be convex or concave. By default it's `convex` but you can also switch to concave.

```javascript
const text = new WHS.Text({
  geometry: {
    text: 'hello world',
    parameters: {
      font: 'assets/fonts/gentilis_bold.typeface.js',
      size: 20,
      height: 5,
      curveSegments: 6
    }
  },

  mass: 10,

  material: {
    color: 0x00ff00,
    kind: "lambert"
  },

  position: {
    x: -40,
    y: 20,
    z: 0
  }
});

text.addTo(world);
```

## Parameters
### Geometry defaults

```javascript
{
  // ...

  geometry: {
    text: 'Hello World!', // String.

    parameters: { // Object.
      size: 12,
      height: 50,
      curveSegments: 12,
      font: new THREE.Font(),
      bevelEnabled: false,
      bevelThickness: 10,
      bevelSize: 8
    }
  }
}
```

> These defaults are additional, there are also defaults filled by MeshComponent, etc.

### Instructions

```javascript
{
  // ...

  geometry: ['text', 'parameters']
}
```
