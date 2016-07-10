<h2 class="ws" id="octahedron">Octahedron</h2>

<div class="blockTitle h3">Basic octahedron example</div>

```javascript

const octahedron = new WHS.Octahedron({
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

octahedron.addTo(world);

```

```coffeescript

octahedron = new (WHS.Octahedron)(
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

octahedron.addTo world

```


`WHS.Octahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, an **octahedron** is *a polyhedron with eight faces*. A regular octahedron is a Platonic solid composed of eight equilateral triangles, four of which meet at each vertex.

<img src="images/shapes/octahedron.gif" alt="rendered octahedron">

`WHS.Octahedron` creates Octahedron object by it's `radius` and `detail`.

<div class="params" id="octahedron-geometry">
  <h5>Octahedron geometry object <a href="#octahedron-geometry" class="anchor"></a></h5>
  <ul>
    <li id="octahedron-geometry-radius">
      <h3><a href="#octahedron-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Octahedron geometry radius</p>
    </li>
    <li id="octahedron-geometry-detail">
      <h3><a href="#octahedron-geometry-detail" class="anchor"></a> detail
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Octahedron geometry detail</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/2e4fd99eed06e9c5bd05.js"></script>