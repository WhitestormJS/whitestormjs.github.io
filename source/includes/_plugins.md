# Adding Plugins & Components

## Making your own component

```javascript
import THREE from 'three';
import Physijs from 'whitestormjs-physijs';

import {Shape, extend} from 'whitestormjs';

class MyCustomMesh extends Shape {
  constructor(params = {}) {
    super(params, 'type');

    extend(params.geometry, { // Use extend to check additional parameters
      radius: 1,
      segmentA: 32,
      segmentB: 32
    });

    this.build(params);
    super.wrap();
  }

  build(params = {}) {
    const _scope = this,
      Mesh = this.physics ? Physijs.SphereMesh : THREE.Mesh,
      material = new THREE.MeshLambertMaterial({color: 0x00ff00}),
      geometry = new THREE.SphereGeometry(
        params.geometry.radius,
        params.geometry.segmentA * 2,
        params.geometry.segmentB * 2
      ),
      gShape = geometry.clone();

    return new Promise((resolve) => {
      _scope.setNative(new Mesh(
        geometry,
        material,
        params.mass
      ));

      resolve();
    });
  }

  clone() {
    return new MyCustomMesh(this.getParams(), this._type).copy(this);
  }
}

export {
  MyCustomMesh as default
};

```

```coffeescript

No analog yet :(
You can fix it by contributing to docs:
https://github.com/WhitestormJS/whitestormjs.github.io/blob/editing/source/includes/_plugins.md

```

First of all you need to understand how WhitestormJS works. There are two basic
classes called [`WHS.Shape`](#whs-shape-super-class) and [`WHS.Light`](#whs-light-super-class)

If you are going to write a new shape or replace existing, `WHS.Shape` will help you.
As you know, `whitestorm.js` uses `es6 classes` to define new shapes, lights and other objects

After you call a `super` which is a `WHS.Shape` object in your class, you need to define a `Three.js mesh` in `this.mesh`.

You can also use `super._initMaterial()` for initializing you Physi.js material object.

Then use `super.wrap()` to apply your position and rotation to your `Three.js mesh`.

<aside class="notice">You also can specify your <code>tags</code> when you are going to build your shape. If you need to load a file, it is better to put a <code>wait</code> tag. So your build method will look like <code>super.build("wait")</code>. And don't forget about <code>this._loading</code> promise, or your obect will throw errors.</aside>

<aside class="warning yellow">It is adviced to compile them with <a href="https://babeljs.io/">Babel</a> because of their usage of es6/es7 features. You can also check compatibility at <a href="https://kangax.github.io/compat-table/es6/">ECMAscript 6 compatibility table</a></aside>