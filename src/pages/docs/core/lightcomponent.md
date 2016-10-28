---

title: LightComponent
longtitle: WHS.LightComponent
category: Core

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/core/lightcomponent.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/core/LightComponent.js

tags:
 - three.js
 - 3d
 - core
 - decorators
 - light

---

**LightComponent** is used to wrap classes based on `THREE.Light` (it can be `THREE.PointLight`, `THREE.DirectionalLight` and other). **LightComponent** offers main functionality for working with lights and extends properties that you can define before executing light.

## Usage with existing Three.js light.

That's how you can make a `WHS.Element` from a three.js light:

```javascript
const ball = new WHS.Element(
  new THREE.PointLight(),
  [WHS.LightComponent]
);
```

## 3D Transforms

See [3D transforms](/api/3d-transforms) page for more details about **LightComponent** 3d transform methods/attributes.

## Making a Light Component

```javascript

import * as THREE from 'three';

// Basic component class.
import {Component} from 'whitestormjs/core/Component';
// Decorator for THREE.Mesh for component class.
import LightComponent from 'whitestormjs/core/LightComponent';
// Some utils that should help.
import {extend, loadMaterial} from 'whitestormjs/utils/index';

@LightComponent
class BasicLight extends Component {
  constructor(params = {}) {
    super(params, BasicLight.defaults);

    // Defaults.
    extend(params, {
      color: 0xffffff
      intensity: 10
    });

    if (params.build) { // params.build is "true" by default. (@LightComponent)
      this.build(params);
      // Apply position & rotation, scale ...
      super.wrap();
    }
  }

  build(params = {}) {
    return new Promise((resolve) => {
      this.native = new THREE.PointLight(
        params.color
        params.intensity
      );

      resolve();
    });
  }

  clone() {
    return new BasicLight({build: false}).copy(this);
  }
}

export {
  BasicLight
};

```
