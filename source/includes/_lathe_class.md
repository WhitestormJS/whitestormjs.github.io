<h2 class="ws" id="lathe">Lathe</h2>

<div class="blockTitle h3">Basic lathe example</div>

```javascript

const points = [];

for (let i = 0; i < 10; i++) {
  points.push(
    new THREE.Vector2(
      (Math.sin(i * 0.7) * 15 + 50) / 10,
      (i - 5) * 0.2
    )
  );
}

const lathe = new WHS.Lathe({
  geometry: {
    points: points
  },

  mass: 10,

  material: {
    kind: 'lambert',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  pos: {
    x: 0,
    y: 50,
    z: 10
  }
});

lathe.addTo(world);

```

```coffeescript

points = []

i = 0
while i < 10
  points.push new (THREE.Vector2)((Math.sin(i * 0.7) * 15 + 50) / 10, (i - 5) * 0.2)
  i++

lathe = new (WHS.Lathe)(
  geometry: points: points
  mass: 10
  material:
    kind: 'lambert'
    color: 0xffffff
    side: THREE.DoubleSide
  pos:
    x: 0
    y: 50
    z: 10)

lathe.addTo world

```

`WHS.Lathe` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Lathe` is a class for generating meshes with axial symmetry. Possible uses include donuts, pipes, vases etc. The lathe rotate around the Y axis.

It is similar to `THREE.LatheGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

<div class="params" id="lathe-geometry">
  <h5>Lathe geometry object <a href="#lathe-geometry" class="anchor"></a></h5>
  <ul>
    <li id="lathe-geometry-points">
      <h3><a href="#lathe-geometry-points" class="anchor"></a> points
        <span class="type">Array</span>
        <span class="default">[]</span>
      </h3>
      <p>Lathe points</p>
    </li>
    <li id="lathe-geometry-segments">
      <h3><a href="#lathe-geometry-segments" class="anchor"></a> segments
        <span class="type">Object</span>
        <span class="default">{}</span>
      </h3>
      <p>Lathe segments</p>
    </li>
    <li id="lathe-geometry-phiStart">
      <h3><a href="#lathe-geometry-phiStart" class="anchor"></a> phiStart
        <span class="type">Object</span>
        <span class="default">{}</span>
      </h3>
      <p>phi Start of Lathe</p>
    </li>
    <li id="lathe-geometry-phiLength">
      <h3><a href="#lathe-geometry-phiLength" class="anchor"></a> phiLength
        <span class="type">Object</span>
        <span class="default">{}</span>
      </h3>
      <p>phi Length of Lathe</p>
    </li>
  </ul>
</div>

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/06c3b07fc14e4d1a828d.js"></script>

Right example will create the following shape:

<img src="images/shapes/lathe.png" alt="rendered lathe on it's example">
