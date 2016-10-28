---

title: Parametric
longtitle: WHS.Parametric
category: Meshes
icon: parametric_class.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/meshes/parametric.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/meshes/Parametric.js

wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - component
 - MeshComponent
 - parametric

---

`WHS.Parametric` generates a geometry representing [Parametric surface](https://en.wikipedia.org/wiki/Parametric_surface)

It is usually used to develop different kinds of highfields or [visualize a math function](https://stemkoski.github.io/Three.js/Graphulus-Function.html).

 - [Parametric surface](http://math.hws.edu/graphicsbook/source/threejs/curves-and-surfaces.html)
 - ["Graphulus"](https://stemkoski.github.io/Three.js/Graphulus-Surface.html)

Example will create heightfield-like geometry. `u` and `v` are like `x` and `y` in shape, but their values are always from `0` to `1`.
We use them in `THREE.Vector3` like `x` and `z` and `Math.random() * 5` for `y`.

```javascript
const createParametric = (u, v) => {
  return new THREE.Vector3(u * 30, Math.random() * 5, v * 30);
}

const parametric = new WHS.Parametric({
  geometry: {
    func: createParametric
  },

  mass: 10,

  material: {
    kind: 'lambert',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  position: {
    x: 0,
    y: 100,
    z: -10
  }
});

parametric.addTo(world);
```
