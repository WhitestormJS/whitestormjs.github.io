---

title: Component
longtitle: WHS.Component
category: Core

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/core/component.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/core/Component.js

featured:
  title: Components
  describe: Have you ever heard about component system, reactJS and es6 modules? Now it's time to deep in modular apps with cool interaction.
  image: component.png

tags:
 - three.js
 - webgl
 - 3d

---

Component is a main class which is commonly used in core parts of **WhitestormJS framework**. `WHS.Component` is used in `WHS.World`, `WHS.Group` and almost all known classes of framework. 

_Meshes, Lights, Cameras_ - all this is based on `WHS.Component` class.

```javascript
import THREE from 'three';

// Basic component class.
import {Component} from 'whitestormjs/core/Component';

class EmptyComponent extends Component {
  constructor(params = {}) {
    super(params, SimpleComponent.defaults, SimpleComponent.instructions);

    this.native = new THREE.Object3D();
  }
}

const myEmptyElement = new EmptyComponent();

```

### Defaults & instructions

When we call super - we should pass params object there. And we can also specify **defaults** object to fill required properties.

```javascript
// ...

class Dinosaur extends Component {
  static defaults = {
    teethCount: 32
  };

  // ...
}

const saurolophus = new Dinosaur({teethCount: 56});
saurolophus.params.teethCount // -> 56

const dino = new Dinosaur();
dino.params.teethCount // -> 32
```

And sometimes we need to make simplified record, you may use instructions for that:

```javascript
// ...

class Star extends Component {
  static defaults = {
    direction: {x: 1, y: 0, z: 0}
  };

  static instructions = {
    direction: ['x', 'y', 'z']
  };

  // ...
}

// After you can use it as here:
const sun = new Star({direction: [0, 1, 0]})

// Or as usually:
const sun = new Star({direction: {x: 0, y: 1, z: 0}});
```



## PROPERTIES

### `.params`

An object that contains parameters.

### `.native`

A three.js object linked to the component.

## METHODS

### `.updateParams( object );`

Every component has it's own params that it uses in further operations (such as building a geometry, material or linking to other object). For this we have a `.params` property that after you define a component is filled with defaults modified by values you passed.

`.updateParams()` extends this object with provided new values.

```javascript
// Lets imagine myEmptyElement.params -> {a: 2, b: 4}

myEmptyElement.updateParams({c: 3}) // -> {a: 2, b: 4, c: 3}
myEmptyElement.updateParams({b: 5}) // -> {a: 2, b: 5, c: 3}
```

### `.addTo( parent )`

As we work in 3D space - we have a World and objects that it should contain. All those object are called it's _children_ . A world object will be a _parent_ of other objects.

When we created a component we just described what it should be. But `WHS.World` is not yet linked to object we want to see on scene.

```javascript
myEmptyElement.addTo(world);
```

Now we added our component to the scene. If you debug `world.scene.children` now - you can see that we have a `THREE.Object3D` in this array. 

### `.copy( source )`

This method is used to copy `.native` and `.params` from other `WHS.Component`.

> This method's code is different in pair with decorators like `MeshComponent`, `PhysicsComponent` and `SoftbodyComponent`. 

```javascript

const ball = MeshComponent(new WHS.Component(
  new THREE.Mesh(
    new THREE.SphereGeometry(3, 16, 16),
    new THREE.MeshBasicMaterial({color: 0xffffff})
  )
));

myEmptyElement.copy(ball);

// Now:
// - myEmptyElement.params is a copy of ball.params
// - myEmptyElement.native is a copy of ball.native

```

### `.clone()`

Clone method works directly with `.copy()` method. That's what it does:

```
  // Component.js
  // ... 

  clone() {
    return new Component(this.params).copy(this);
  }

  // ...
```

#### Usage

```javascript

// Let's take "ball" this time as it has .native;

const ball2 = ball.clone();
ball2.position.y += 10;

ball2.addTo(world);

```
