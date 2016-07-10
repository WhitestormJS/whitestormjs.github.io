<h2 class="ws" id="extrude">Extrude</h2>

<div class="blockTitle h3">Basic extrude example</div>

```javascript

const shape = new THREE.Shape([
  new THREE.Vector2(-4,-4),
  new THREE.Vector2(-2,0),
  new THREE.Vector2(-4,4),
  new THREE.Vector2(0,2),
  new THREE.Vector2(4,4),
  new THREE.Vector2(2,0),
  new THREE.Vector2(4,-4),
  new THREE.Vector2(0,-2)
]);

const extrude = new WHS.Extrude({
  geometry: {
    shapes: shape,
    options: {
      bevelEnabled: false,
      bevelSize: 0,
      amount: 2
    } 
  },

  mass: 10,

  material: {
    kind: 'basic',
    color: 0xffffff
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  }
});

extrude.addTo(world);

```

```coffeescript

shape = new (THREE.Shape)([
  new (THREE.Vector2)(-4, -4)
  new (THREE.Vector2)(-2, 0)
  new (THREE.Vector2)(-4, 4)
  new (THREE.Vector2)(0, 2)
  new (THREE.Vector2)(4, 4)
  new (THREE.Vector2)(2, 0)
  new (THREE.Vector2)(4, -4)
  new (THREE.Vector2)(0, -2)
])

extrude = new (WHS.Extrude)(
  geometry:
    shapes: shape
    options:
      bevelEnabled: false
      bevelSize: 0
      amount: 2
  mass: 10
  material:
    kind: 'basic'
    color: 0xffffff
  pos:
    x: 0
    y: 100
    z: 0)

extrude.addTo world

```


`WHS.Extrude` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Extrude` class creates extruded geometry from a path shape. You need to make a 2D shape based on `THREE.Shape` and `THREE.Vector3` and import it `shapes` parameter. After that it will be turned in 3D shape.

It is similar to `THREE.ExtrudeGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

<div class="params" id="extrude-geometry">
  <h5>Extrude geometry object <a href="#extrude-geometry" class="anchor"></a></h5>
  <ul>
    <li id="extrude-geometry-shapes">
      <h3><a href="#extrude-geometry-shapes" class="anchor"></a> shapes
        <span class="type">Array</span>
        <span class="default">[]</span>
      </h3>
      <p>Extrude geometry shapes</p>
    </li>
    <li id="extrude-geometry-options">
      <h3><a href="#extrude-geometry-options" class="anchor"></a> options
        <span class="type">Object</span>
        <span class="default">{}</span>
      </h3>
      <p>Extrude geometry options</p>
    </li>
  </ul>
</div>

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/0d6e84001eb02faa07a3.js"></script>

And a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).

<img src="images/shapes/extrude.png" alt="rendered extrude from it's example">


