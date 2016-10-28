---

title: MeshComponent
longtitle: WHS.MeshComponent
category: Core

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/core/mehscomponent.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/core/MeshComponent.js

tags:
 - three.js
 - 3d
 - core
 - decorators
 - mesh

---

MeshComponent used to work with `THREE.Mesh` obects. It wraps `WHS.Component` with common methods and properties used to work with Three.js meshes. 

It defines _position, rotation, quaternion and scale_ properties that are used to transform 3D objects.

## Usage with existing Three.js mesh

That's how you can make a `WHS.Element` from a three.js mesh:

```javascript
const ball = new WHS.Element(
  new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    new THREE.MeshBasicMaterial({color: 0xffffff})
  ),
  [WHS.MeshComponent]
);
```

## 3D Transforms

See [3D transforms](/api/3d-transforms) page for more details about **MeshComponent** 3d transform methods/attributes.

## Making a Mesh Component

```javascript

import * as THREE from 'three';

// Basic component class.
import {Component} from 'whitestormjs/core/Component';
// Decorator for THREE.Mesh for component class.
import MeshComponent from 'whitestormjs/core/MeshComponent';
// Some utils that should help.
import {extend, loadMaterial} from 'whitestormjs/utils/index';

@MeshComponent
class BasicSphere extends Component {
  constructor(params = {}) {
    super(params, BasicSphere.defaults);

    extend(params, {
      myParameter: 10 // Default for myParameter. (Sphere radius)
    });

    if (params.build) { // params.build is "true" by default. (@MeshComponent)
      this.build(params);
      // Apply position & rotation, scale ...
      super.wrap();
    }
  }

  build(params = {}) {
    // Load THREE.Material from properties.
    const material = loadMaterial(params.material);

    return new Promise((resolve) => {
      this.native = new THREE.Mesh(
        new THREE.SphereGeometry(params.myParameter, 16, 16),
        material
      );

      resolve();
    });
  }

  clone() {
    return new BasicSphere({build: false}).copy(this);
  }
}

export {
  BasicSphere
};

```
