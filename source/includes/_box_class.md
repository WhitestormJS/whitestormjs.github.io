# Shapes

<h2 class="ws" id="box">Box [Class]</h2>

> Basic box, created with WHS.Box property.

```javascript

var box = GAME.Box({

    geometry: { // Fill box geometry here.
        width: 2,
        height: 2,
        depth: 2
    },

    mass: 1,

    material: {
        kind: "basic",
        color: 0xffffff
    },

    pos: {
        x: 50,
        y: 70,
        z: 60
    }

);

```

`WHS.Box` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Box` class is used to create box objects of different size.

It is similar to `THREE.BoxGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

Here are parameters of geometry object, that you need to fill:

<div class="params" id="box-geometry">
  <h5>Box geometry object <a href="#box-geometry" class="anchor"></a></h5>
  <ul>
    <li id="box-geometry-width">
      <h3><a href="#box-geometry-width" class="anchor"></a> width
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Box geometry width</p>
    </li>
    <li id="box-geometry-height">
      <h3><a href="#box-geometry-height" class="anchor"></a> height
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Box geometry height</p>
    </li>
    <li id="box-geometry-depth">
      <h3><a href="#box-geometry-depth" class="anchor"></a> depth
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Box geometry depth</p>
    </li>
  </ul>
</div>

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/7084bd4d0a271be6adfe.js"></script>

And a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).


