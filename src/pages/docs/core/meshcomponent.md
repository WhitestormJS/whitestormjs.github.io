---

title: MeshComponent [WIP]
longtitle: WHS.MeshComponent
category: Core

tags:
 - three.js
 - webgl
 - 3d
 - core
 - decorators

---

MeshComponent used to work with `THREE.Mesh` obects. It wraps `WHS.Component` with common methods and properties used to work with Three.js meshes. 

It defines _position, rotation, quaternion and scale_ properties that are used to transform 3D objects.

## Usage with existing Three.js mesh

That's how you can make a `WHS.Component` from a three.js mesh:

```javascript
const ball = MeshComponent(new WHS.Component(
  new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    new THREE.MeshBasicMaterial({color: 0xffffff})
  )
));
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
