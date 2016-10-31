---

title: PhysicsComponent
longtitle: WHS.PhysicsComponent
category: Core

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/core/physicscomponent.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/core/PhysicsComponent.js

tags:
 - three.js
 - 3d
 - core
 - decorators
 - physics

---

> PhysicsComponent depends on MeshComponent (It should be set first).

PhysicsComponent overwrites some data to make it possible to use this object as physics object. It wraps 3D transforms to make object relocation while physics is simulating possible.

**It also adds all Physijs.mesh methods (like `.setLinearVelocity()`) to the component.**

```javascript

// ...
import MeshComponent from 'whitestormjs/core/MeshComponent';
import PhysicsComponent from 'whitestormjs/core/PhysicsComponent';
// ...

@PhysicsComponent
@MeshComponent
class BasicSphere extends Component {
  // ...

  build(params = {}) {
    // Load THREE.Material from properties.
    const material = loadMaterial(params.material);

    let Mesh;

    if (this.physics) Mesh = SphereMesh;
    else Mesh = THREE.Mesh;

    return new Promise((resolve) => {
      this.native = new Mesh(
        new THREE.SphereGeometry(params.myParameter, 16, 16),

        material,
        this.params
      );

      resolve();
    });
  }
}
```

### Added methods:

  - `setAngularVelocity()`
  - `setLinearVelocity()`
  - `applyCentralImpulse()`
  - `applyImpulse()`
  - `applyTorque()`
  - `applyCentralForce()`
  - `applyForce()`
  - `getAngularVelocity()`
  - `getLinearVelocity()`
  - `setAngularFactor()`
  - `setLinearFactor()`
  - `setDamping()`
  - `setCcdMotionThreshold()`
  - `setCcdSweptSphereRadius()`
  - `appendAnchor(world, object, node, influence, collisionBetweenLinkedBodies = true)`

See their explanation at [Physijs wiki](https://github.com/chandlerprall/Physijs/wiki)
