---

title: Text
longtitle: WHS.Text
category: Meshes
icon: text_class.png
wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - text

---

`WHS.Text` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

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
