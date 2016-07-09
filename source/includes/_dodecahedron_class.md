<h2 class="ws" id="dodecahedron">Dodecahedron [Class]</h2>

> WHS.Dodecahedron example: 

```javascript

var dodecahedron = GAME.Dodecahedron({
    geometry: {
        radius: 2
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

```


`WHS.Dodecahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, a **dodecahedron** is any *polyhedron with twelve flat faces*. The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. There are also three regular star dodecahedra, which are constructed as stellations of the convex form. All of these have icosahedral symmetry, order 120.

<img src="images/shapes/dodecahedron.gif" alt="rendered dodecahedron">

`WHS.Dodecahedron` creates Dodecahedron object by it's `radius` and `detail`.

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

<script src="https://gist.github.com/sasha240100/6c36848a37c9d8833ace.js"></script>