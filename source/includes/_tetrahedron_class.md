<h2 class="ws" id="tetrahedron">Tetrahedron</h2>

<div class="blockTitle h3">Basic tetrahedron example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x000000%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%20-10,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:5,%0D%0A%20%20%20%20y:5,%0D%0A%20%20%20%20z:%205%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20tetrahedron%20=%20new%20WHS.Tetrahedron(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20radius:%202,%0D%0A%20%20%20%20detail:%201%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%205,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20color:%200xffff00,%0D%0A%20%20%20%20kind:%20'basic'%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20pos:%20%7B%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%200,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Atetrahedron.addTo(world);%0D%0A%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

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

<img src="images/shapes/tetrahedron_comp.gif" alt="rendered tetrahedron">

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
