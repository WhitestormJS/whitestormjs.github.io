<h2 class="ws" id="polyhedron">Polyhedron</h2>

<div class="blockTitle h3">Basic polyhedron example</div>

```javascript

const polyhedron = new WHS.Polyhedron({
  geometry: {
    radius: 2,
    detail: 1
  },

  mass: 10,

  material: {
    color: 0xffffff,
    kind: 'basic'
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  }
});

polyhedron.addTo(world);

```

```coffeescript

polyhedron = new (WHS.Polyhedron)(
  geometry:
    radius: 2
    detail: 1
  mass: 10
  material:
    color: 0xffffff
    kind: 'basic'
  pos:
    x: 0
    y: 100
    z: 0)

polyhedron.addTo world

```

`WHS.Polyhedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In elementary geometry, a **polyhedron** is *a solid in three dimensions with flat polygonal faces, straight edges and sharp corners or vertices*.

<img src="images/shapes/polyhedron.gif" alt="rendered polyhedron">

`WHS.Polyhedron` creates Polyhedron object by it's `radius` and `detail`.

<div class="params" id="polyhedron-geometry">
  <h5>Polyhedron geometry object <a href="#polyhedron-geometry" class="anchor"></a></h5>
  <ul>
    <li id="polyhedron-geometry-verticesOfCube">
      <h3><a href="#polyhedron-geometry-verticesOfCube" class="anchor"></a> verticesOfCube
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Polyhedron geometry verticesOfCube</p>
    </li>
    <li id="polyhedron-geometry-indicesOfFaces">
      <h3><a href="#polyhedron-geometry-indicesOfFaces" class="anchor"></a> indicesOfFaces
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Polyhedron geometry indicesOfFaces</p>
    </li>
    <li id="polyhedron-geometry-radius">
      <h3><a href="#polyhedron-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Polyhedron geometry radius</p>
    </li>
    <li id="polyhedron-geometry-detail">
      <h3><a href="#polyhedron-geometry-detail" class="anchor"></a> detail
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Polyhedron geometry detail</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/d821cc016863b6d71266.js"></script>