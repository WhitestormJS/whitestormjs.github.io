<h2 class="ws" id="parametric">Parametric [Class]</h2>

<div class="blockTitle h3">Basic parametric example</div>

```javascript

const createParametric = (u, v) => {
  return new THREE.Vector3(u * 30, Math.random() * 5, v * 30);
}

const parametric = new WHS.Parametric({
  geometry: {
    func: createParametric
  },

  mass: 10,

  material: {
    kind: 'lambert',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  pos: {
    x: 0,
    y: 100,
    z: -10
  }
});

parametric.addTo(world);

```

```coffeescript

parametric = new (WHS.Parametric)(
  geometry: func: createParametric
  mass: 10
  material:
    kind: 'lambert'
    color: 0xffffff
    side: THREE.DoubleSide
  pos:
    x: 0
    y: 100
    z: -10)

createParametric = (u, v) ->
  new (THREE.Vector3)(u * 30, Math.random() * 5, v * 30)

parametric.addTo world

```


`WHS.Parametric` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Parametric` class is used for creating objects representing a parametric surface.

<div class="params" id="parametric-geometry">
  <h5>Parametric geometry object <a href="#parametric-geometry" class="anchor"></a></h5>
  <ul>
    <li id="parametric-geometry-func">
      <h3><a href="#parametric-geometry-func" class="anchor"></a> func
        <span class="type">Function</span>
        <span class="default">functon() {}</span>
      </h3>
      <p>Parametric geometry func</p>
    </li>
    <li id="parametric-geometry-slices">
      <h3><a href="#parametric-geometry-slices" class="anchor"></a> slices
        <span class="type">Number</span>
        <span class="default">10</span>
      </h3>
      <p>Parametric geometry slices</p>
    </li>
    <li id="parametric-geometry-stacks">
      <h3><a href="#parametric-geometry-stacks" class="anchor"></a> stacks
        <span class="type">Number</span>
        <span class="default">10</span>
      </h3>
      <p>Parametric geometry stacks</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/9d4741da789ecbc02557.js"></script>

Example will create heightfield-like geometry. `u` and `v` are like `x` and `y` in shape, but their values are always from `0` to `1`.
We use them in `THREE.Vector3` like `x` and `z` and `Math.random()` for `y`.

<img src="images/shapes/parametric.png" alt="rendered parametric on it's example">