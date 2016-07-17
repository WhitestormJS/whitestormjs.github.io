<h2 class="ws" id="polyhedron">Polyhedron</h2>

<div class="blockTitle h3">Basic polyhedron example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x000000%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%200,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:50,%0D%0A%20%20%20%20y:50,%0D%0A%20%20%20%20z:%2050%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20polyhedron%20=%20new%20WHS.Polyhedron(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20radius:%2012,%0D%0A%20%20%20%20detail:%201%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%2010,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20color:%200xffffff,%0D%0A%20%20%20%20kind:%20'basic'%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20pos:%20%7B%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%200,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Apolyhedron.addTo(world);%0D%0A%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

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

<img src="images/shapes/polyhedron_comp.gif" alt="rendered polyhedron">

`WHS.Polyhedron` creates Polyhedron object by it's `radius` and `detail`.

<div class="params" id="polyhedron-geometry">
  <h5>Polyhedron geometry object <a href="#polyhedron-geometry" class="anchor"></a></h5>
  <ul>
    <li id="polyhedron-geometry-verticesOfCube">
      <h3><a href="#polyhedron-geometry-verticesOfCube" class="anchor"></a> verticesOfCube
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Vertices of cube of polyhedron</p>
    </li>
    <li id="polyhedron-geometry-indicesOfFaces">
      <h3><a href="#polyhedron-geometry-indicesOfFaces" class="anchor"></a> indicesOfFaces
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Indices of faces of polyhedron</p>
    </li>
    <li id="polyhedron-geometry-radius">
      <h3><a href="#polyhedron-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Radius of polyhedron</p>
    </li>
    <li id="polyhedron-geometry-detail">
      <h3><a href="#polyhedron-geometry-detail" class="anchor"></a> detail
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Polyhedron detail</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/d821cc016863b6d71266.js"></script>
