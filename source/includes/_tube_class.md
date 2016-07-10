<h2 class="ws" id="tube">Tube</h2>

<div class="blockTitle h3">Basic tube example</div>

```javascript

const CustomSinCurve = THREE.Curve.create(
  function (scale) { // custom curve constructor
    this.scale = (scale === undefined) ? 1 : scale;
  },

  function ( t ) { // getPoint: t is between 0-1
    const tx = t * 3 - 1.5,
        ty = Math.sin( 2 * Math.PI * t ),
        tz = 0;

    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  }
);

const path = new CustomSinCurve( 10 );

const tube = new WHS.Tube({
  geometry: {
    path: path
  },

  mass: 0,

  material: {
    color: 0x0000ff,
    kind: 'lambert'
  }
});

tube.addTo(world);

```

```coffeescript

CustomSinCurve = THREE.Curve.create(((scale) ->
  # custom curve constructor
  @scale = if scale == undefined then 1 else scale
  return
), (t) ->
  # getPoint: t is between 0-1
  tx = t * 3 - 1.5
  ty = Math.sin(2 * Math.PI * t)
  tz = 0
  new (THREE.Vector3)(tx, ty, tz).multiplyScalar @scale
)

path = new CustomSinCurve(10)

tube = new (WHS.Tube)(
  geometry: path: path
  mass: 0
  material:
    color: 0x0000ff
    kind: 'lambert')

tube.addTo world

```
`WHS.Tube` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Tube` class makes a tube that extrudes along a 3d curve.

<div class="params" id="tube-geometry">
  <h5>Tube geometry object <a href="#tube-geometry" class="anchor"></a></h5>
  <ul>
    <li id="tube-geometry-path">
      <h3><a href="#tube-geometry-path" class="anchor"></a> path
        <span class="type">Object</span>
        <span class="default">customSinCurve()</span>
      </h3>
      <p>Tube geometry path</p>
    </li>
    <li id="tube-geometry-segments">
      <h3><a href="#tube-geometry-segments" class="anchor"></a> segments
        <span class="type">Number</span>
        <span class="default">20</span>
      </h3>
      <p>Tube geometry segments</p>
    </li>
    <li id="tube-geometry-radius">
      <h3><a href="#tube-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">2</span>
      </h3>
      <p>Tube geometry radius</p>
    </li>
    <li id="tube-geometry-radiusSegments">
      <h3><a href="#tube-geometry-radiusSegments" class="anchor"></a> radiusSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>Tube geometry radiusSegments</p>
    </li>
    <li id="tube-geometry-closed">
      <h3><a href="#tube-geometry-closed" class="anchor"></a> closed
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Tube geometry closed</p>
    </li>
  </ul>
</div>