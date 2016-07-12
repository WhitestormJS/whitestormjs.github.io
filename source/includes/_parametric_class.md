<h2 class="ws" id="parametric">Parametric</h2>

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

createParametric = (u, v) ->
  new (THREE.Vector3)(u * 30, Math.random() * 5, v * 30)

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

parametric.addTo world

```

`WHS.Parametric` generates a geometry representing [Parametric surface](https://en.wikipedia.org/wiki/Parametric_surface)

It is usually used to develop different kinds of highfields or [visualize a math function](https://stemkoski.github.io/Three.js/Graphulus-Function.html). 

 - [Parametric surface](http://math.hws.edu/graphicsbook/source/threejs/curves-and-surfaces.html)
 - ["Graphulus"](https://stemkoski.github.io/Three.js/Graphulus-Surface.html)

<div class="params" id="parametric-geometry">
  <h5>Parametric geometry object <a href="#parametric-geometry" class="anchor"></a></h5>
  <ul>
    <li id="parametric-geometry-func">
      <h3><a href="#parametric-geometry-func" class="anchor"></a> func
        <span class="type">Function</span>
        <span class="default">functon(u, v) {}</span>
      </h3>
      <p>A function that takes in a u and v value each between 0 and 1 and returns a Vector3</p>
    </li>
    <li id="parametric-geometry-slices">
      <h3><a href="#parametric-geometry-slices" class="anchor"></a> slices
        <span class="type">Number</span>
        <span class="default">10</span>
      </h3>
      <p>The count of slices to use for the parametric function </p>
    </li>
    <li id="parametric-geometry-stacks">
      <h3><a href="#parametric-geometry-stacks" class="anchor"></a> stacks
        <span class="type">Number</span>
        <span class="default">10</span>
      </h3>
      <p>The count of stacks to use for the parametric function</p>
    </li>
  </ul>
</div>

Example will create heightfield-like geometry. `u` and `v` are like `x` and `y` in shape, but their values are always from `0` to `1`.
We use them in `THREE.Vector3` like `x` and `z` and `Math.random() * 5` for `y`.

#### Parametric generated using u and v
<img src="images/shapes/parametric.png" alt="rendered parametric on it's example">
