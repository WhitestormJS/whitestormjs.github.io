<h2 class="ws" id="tetrahedron">Tetrahedron</h2>

<div class="blockTitle h3">Basic tetrahedron example</div>

```javascript

const tetrahedron = new WHS.Tetrahedron({
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

tetrahedron.addTo(world);

```

```coffeescript

tetrahedron = new (WHS.Tetrahedron)(
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

tetrahedron.addTo world

```

`WHS.Tetrahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, a **tetrahedron** is *a polyhedron composed of four triangular faces, six straight edges, and four vertex corners*. The tetrahedron is the simplest of all the ordinary convex polyhedra and the only one that has fewer than 5 faces.

<img src="images/shapes/tetrahedron.gif" alt="rendered tetrahedron">

`WHS.Tetrahedron` creates Tetrahedron object by it's `radius` and `detail`.

<div class="params" id="tetrahedron-geometry">
  <h5>Tetrahedron geometry object <a href="#tetrahedron-geometry" class="anchor"></a></h5>
  <ul>
    <li id="tetrahedron-geometry-radius">
      <h3><a href="#tetrahedron-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Radius of tetrahedron</p>
    </li>
    <li id="tetrahedron-geometry-detail">
      <h3><a href="#tetrahedron-geometry-detail" class="anchor"></a> detail
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Tetrahedron detail</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/769a64629d8180f38a17.js"></script>
