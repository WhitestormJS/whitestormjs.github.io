---

title: CameraComponent
longtitle: WHS.CameraComponent
category: Core

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/core/cameraomponent.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/core/CameraComponent.js

tags:
 - three.js
 - 3d
 - core
 - decorators
 - camera

---

**CameraComponent** wraps classes based on `THREE.Camera` (such as `THREE.PerspectiveCamera`). **CameraComponent** offers main functionality for working with camera and extends properties that you can define before executing camera.

## Usage with existing Three.js camera.

That's how you can make a `WHS.Element` from a three.js light:

```javascript
const ball = new WHS.Element(
  new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  ),
  [WHS.CameraComponent]
);
```

## 3D Transforms

See [3D transforms](/api/3d-transforms) page for more details about **CameraComponent** 3d transform methods/attributes.

## Making a Light Component

```javascript

import * as THREE from 'three';

// Basic component class.
import {Component} from 'whitestormjs/core/Component';
// Decorator for THREE.Mesh for component class.
import CameraComponent from 'whitestormjs/core/CameraComponent';
// Some utils that should help.
import {extend, loadMaterial} from 'whitestormjs/utils/index';

@CameraComponent
class BasicCamera extends Component {
  constructor(params = {}) {
    super(params, BasicCamera.defaults);

    // Defaults.
    extend(params, {
      near: 1
      far: 1000
    });

    if (params.build) { // params.build is "true" by default. (@CameraComponent)
      this.build(params);
      // Apply position & rotation, scale ...
      super.wrap();
    }
  }

  build(params = {}) {
    return new Promise((resolve) => {
      this.native = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight
        params.near
        params.intensity
      );

      resolve();
    });
  }

  clone() {
    return new BasicCamera({build: false}).copy(this);
  }
}

export {
  BasicCamera
};

```
