# Shapes

<h2 class="ws" id="box">Box</h2>

<div class="blockTitle h3">Basic box example</div>

```javascript

const box = new WHS.Box({
  geometry: {
    width: 2,
    height: 2,
    depth: 2
  },

  mass: 1,

  softbody: false,

  material: {
    kind: 'basic',
    color: 0xffffff
  },

  pos: {
    x: 50,
    y: 70,
    z: 60
  }
});

box.addTo(world);

```

```coffeescript

box = new (WHS.Box)(
  geometry:
    width: 2
    height: 2
    depth: 2
  mass: 1
  material:
    kind: 'basic'
    color: 0xffffff
  pos:
    x: 50
    y: 70
    z: 60)

box.addTo world

```


`WHS.Box` Creates a simple 3D Box. It extends <a href="#shape">`WHS.Shape`</a> and inherits all of the <a href="#shape">`WHS.Shape`</a> methods.

Here are parameters of geometry object, that you need to fill:

<div class="params" id="box-geometry">
  <h5>Box geometry object <a href="#box-geometry" class="anchor"></a></h5>
  <ul>
    <li id="box-geometry-width">
      <h3><a href="#box-geometry-width" class="anchor"></a> width
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Width of box</p>
    </li>
    <li id="box-geometry-height">
      <h3><a href="#box-geometry-height" class="anchor"></a> height
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Height of box</p>
    </li>
    <li id="box-geometry-depth">
      <h3><a href="#box-geometry-depth" class="anchor"></a> depth
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Depth of box</p>
    </li>
    <li id="box-geometry-depth">
      <h3><a href="#box-geometry-depth" class="anchor"></a> depth
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Depth of box</p>
    </li>
    <li id="box-softbody">
      <h3><a href="#box-softbody" class="anchor"></a> softbody
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>When set to true, WhitestormJs will process
      this shape as a soft body.</p>      
    </li>
    <li id="box-material">
      <h3><a href="#box-material" class="anchor"></a> material
        <span class="type">Object</span>
        <span class="default">
        ```
        javascript
        {
          kind:'basic'
        }          
        ```
        </span>
      </h3>
      <p>A three.js Material object, to apply to the shape.</p>      
    </li>
  </ul>
</div>

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/7084bd4d0a271be6adfe.js"></script>

And a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).
