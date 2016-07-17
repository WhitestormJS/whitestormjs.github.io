<h2 class="ws" id="octahedron">Octahedron</h2>

<div class="blockTitle h3">Basic octahedron example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x000000%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%200,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:5,%0D%0A%20%20%20%20y:5,%0D%0A%20%20%20%20z:%205%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20octahedron%20=%20new%20WHS.Octahedron(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20radius:%202,%0D%0A%20%20%20%20detail:%201%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%201,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20color:%200x0fffff,%0D%0A%20%20%20%20kind:%20'basic'%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20pos:%20%7B%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%200,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aoctahedron.addTo(world);%0D%0A%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

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

<img src="images/shapes/octahedron_comp.gif" alt="rendered octahedron">

`WHS.Octahedron` creates Octahedron object by it's `radius` and `detail`.

<div class="params" id="octahedron-geometry">
  <h5>Octahedron geometry object <a href="#octahedron-geometry" class="anchor"></a></h5>
  <ul>
    <li id="octahedron-geometry-radius">
      <h3><a href="#octahedron-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Radius of octahedron</p>
    </li>
    <li id="octahedron-geometry-detail">
      <h3><a href="#octahedron-geometry-detail" class="anchor"></a> detail
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Octahedron detail</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/2e4fd99eed06e9c5bd05.js"></script>
