---

title: Tetrahedron [TODO]
longtitle: WHS.Tetrahedron
category: Meshes

tags:
 - three.js
 - webgl
 - 3d
 - core
 - decorators

---

Component is a main class which is commonly used in core parts of WhitestormJS framework.

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
