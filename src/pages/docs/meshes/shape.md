---

title: Shape
longtitle: WHS.Shape
category: Meshes
icon: shape_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/shape.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Shape.js

wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 2d
 - component
 - MeshComponent
 - shape

---

`WHS.Shape` is an universal class, that allows you create different 2D shapes in 3D scene. Unfortunately, all of them don't support physics, so you can make a similar 3D obect and scale it width to be near zero.

`WHS.Shape` consist of shapes that are in `shapes` parameter.

```javascript

const rectWidth = 10,
  rectLength = 5;

const rectShape = new THREE.Shape();
rectShape.moveTo(0,0);
rectShape.lineTo(0, rectWidth);
rectShape.lineTo(rectLength, rectWidth);
rectShape.lineTo(rectLength, 0);
rectShape.lineTo(0, 0);

const plane = new WHS.Shape({
  geometry: {
    shape: rectShape
  },

  mass: 0,

  material: {
    color: 0xff0000,
    kind: 'basic'
  }
});

plane.addTo(world);

```
