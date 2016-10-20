---

title: LightComponent [WIP]
longtitle: WHS.LightComponent
category: Core

tags:
 - three.js
 - webgl
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

### `.position`

**position** is a 3D vector ([`THREE.Vector3`](https://threejs.org/docs/index.html#Reference/Math/Vector3)) object that defines where mesh is located in space.

```javascript
ball.position.set(10, 20, 45);

ball.position.x // -> 10
ball.position.y // -> 20
ball.position.z // -> 45

```

#### Modifying `.position`

That's several examples of how you can modify positon:

  - `ball.position.set( x, y, z )`
  - `ball.position.setX( x )`, (`.setX()`, `.setY()`, `.setZ()` methods).
  - `ball.position = new THREE.Vector3( x, y, z )`

There are a lot of other methods that `.position` handles as a `THREE.Vector3`. You may see the [list of methods](https://threejs.org/docs/index.html#Reference/Math/Vector3.set) at Three.js documentation.

> `.position` is automatically applied to physics object if you use a Physics version [Todo: add link].

### `.rotation`

**rotation** is a [`THREE.Euler`](https://threejs.org/docs/index.html#Reference/Math/Euler) with _x, y and z_ values and has almost same methods as a `.position`. It defines a rotation regarding object position.

```javascript
ball.rotation.set(10, 20, 45);

ball.rotation.x // -> 10
ball.rotation.y // -> 20
ball.rotation.z // -> 45

```

#### Modifying `.rotation`

  - `ball.rotation.set( x, y, z )`
  - `ball.rotation.setX( x )`, (`.setX()`, `.setY()`, `.setZ()` methods).
  - `ball.rotation = new THREE.Euler( x, y, z )`

[list of THREE.Euler methods](https://threejs.org/docs/index.html#Reference/Math/Euler.set) at Three.js documentation.

> `.rotation` will be converted to a _quaternion_ and applied to it's physics object linked to the component. (Only if you use a Physics version [Todo: add link]).

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
    super(params, BasicSphere.defaults);

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
    // Load THREE.Material from properties.
    const material = loadMaterial(params.material);

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
