---

title: SoftbodyComponent
longtitle: WHS.SoftbodyComponent
category: Core

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/core/softbodycomponent.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/core/SoftbodyComponent.js

tags:
 - three.js
 - 3d
 - core
 - decorators
 - mesh

---

> SoftbodyComponent depends on PhysicsComponent and MeshComponent (They should be set first).

This component adds softbody utilities and overwrites 3d transforms to make them usable with softbody.

### `.proccessSoftbodyGeometry(geometry)`

This function applies position, scale and rotation to geometry (not to mesh object). It is because transfered data is geometry vertices rather than transforms.

```javascript

// ...
import MeshComponent from 'whitestormjs/core/MeshComponent';
import PhysicsComponent from 'whitestormjs/core/PhysicsComponent';
import SoftbodyComponent from 'whitestormjs/core/SoftbodyComponent';
// ...

@SoftbodyComponent
@PhysicsComponent
@MeshComponent
class BasicSphere extends Component {
  // ...


  buildGeometry(params = {}) {
    const GConstruct = 
      params.buffer && !params.softbody 
        ? THREE.SphereBufferGeometry 
        : THREE.SphereGeometry;

    const geometry = new GConstruct(
      params.geometry.radius,
      params.geometry.widthSegments,
      params.geometry.heightSegments
    );

    if (params.softbody) this.proccessSoftbodyGeometry(geometry);

    return geometry;
  }
}
```
