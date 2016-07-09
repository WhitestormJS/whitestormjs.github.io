<h2 class="ws" id="icosahedron">Icosahedron [Class]</h2>

<div class="blockTitle h3">Basic icosahedron example</div>

```javascript

const icosahedron = new WHS.Icosahedron({
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

icosahedron.addTo(world);

```

```coffeescript

icosahedron = new (WHS.Icosahedron)(
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

icosahedron.addTo world

```


`WHS.Icosahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, an **icosahedron** is a polyhedron with 20 faces.
There are many kinds of icosahedra, with some being more symmetrical than others. The most well known is the Platonic, convex regular icosahedron. 

<img src="images/shapes/icosahedron.gif" alt="rendered icosahedron">


`WHS.Icosahedron` creates Icosahedron object by it's `radius` and `detail`.

<div class="params" id="dodecahedron-geometry">
  <h5>Dodecahedron geometry object <a href="#dodecahedron-geometry" class="anchor"></a></h5>
  <ul>
    <li id="dodecahedron-geometry-radius">
      <h3><a href="#dodecahedron-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Dodecahedron geometry radius</p>
    </li>
    <li id="dodecahedron-geometry-detail">
      <h3><a href="#dodecahedron-geometry-detail" class="anchor"></a> detail
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Dodecahedron geometry detail</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/9411184563af222a098b.js"></script>