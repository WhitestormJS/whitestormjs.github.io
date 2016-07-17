<h2 class="ws" id="dodecahedron">Dodecahedron</h2>

<div class="blockTitle h3">Basic dodecahedron example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x000000%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%20-100,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:50,%0D%0A%20%20%20%20y:50,%0D%0A%20%20%20%20z:50%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20dodecahedron%20=%20new%20WHS.Dodecahedron(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20radius:%2020%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%200,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20color:%200xff0fff,%0D%0A%20%20%20%20kind:%20'basic'%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20pos:%20%7B%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%2010,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Adodecahedron.addTo(world);%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

```javascript

const dodecahedron = new WHS.Dodecahedron({
  geometry: {
    radius: 2
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

dodecahedron.addTo(world);

```

```coffeescript

dodecahedron = new (WHS.Dodecahedron)(
  geometry: radius: 2
  mass: 10
  material:
    color: 0xffffff
    kind: 'basic'
  pos:
    x: 0
    y: 100
    z: 0)

dodecahedron.addTo world

```


`WHS.Dodecahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, a **dodecahedron** is any *polyhedron with twelve flat faces*. The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. There are also three regular star dodecahedra, which are constructed as stellations of the convex form. All of these have icosahedral symmetry, order 120.

<img src="images/shapes/dodecahedron_comp.gif" alt="rendered dodecahedron">

`WHS.Dodecahedron` creates Dodecahedron object by it's `radius` and `detail`.

<div class="params" id="dodecahedron-geometry">
  <h5>Dodecahedron geometry object <a href="#dodecahedron-geometry" class="anchor"></a></h5>
  <ul>
    <li id="dodecahedron-geometry-radius">
      <h3><a href="#dodecahedron-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Radius of dodecahedron</p>
    </li>
    <li id="dodecahedron-geometry-detail">
      <h3><a href="#dodecahedron-geometry-detail" class="anchor"></a> detail
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Dodecahedron detail</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/6c36848a37c9d8833ace.js"></script>
