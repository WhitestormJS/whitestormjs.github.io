<h2 class="ws" id="torus">Torus [Class]</h2>

<div class="blockTitle h3">Basic torus example</div>

```javascript

const torus = new WHS.Torus({
  geometry: {
    radius: 5,
    tube: 2
  },

  mass: 10,

  material: {
    kind: 'lambert',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  pos: {
    y: 35
  }
});

torus.addTo(world);

```

```coffeescript

torus = new (WHS.Torus)(
  geometry:
    radius: 5
    tube: 2
  mass: 10
  material:
    kind: 'lambert'
    color: 0xffffff
    side: THREE.DoubleSide
  pos: y: 35)

torus.addTo world

```


`WHS.Torus` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Torus` class makes a torus figure. Torus is a donut. Donut is a torus.

<div class="params" id="torus-geometry">
  <h5>Torus geometry object <a href="#torus-geometry" class="anchor"></a></h5>
  <ul>
    <li id="torus-geometry-radius">
      <h3><a href="#torus-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">100</span>
      </h3>
      <p>Torus geometry radius</p>
    </li>
    <li id="torus-geometry-tube">
      <h3><a href="#torus-geometry-tube" class="anchor"></a> tube
        <span class="type">Number</span>
        <span class="default">40</span>
      </h3>
      <p>Torus geometry tube</p>
    </li>
    <li id="torus-geometry-radialSegments">
      <h3><a href="#torus-geometry-radialSegments" class="anchor"></a> radialSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>Torus geometry radialSegments</p>
    </li>
    <li id="torus-geometry-tubularSegments">
      <h3><a href="#torus-geometry-tubularSegments" class="anchor"></a> tubularSegments
        <span class="type">Number</span>
        <span class="default">6</span>
      </h3>
      <p>Torus geometry tubularSegments</p>
    </li>
    <li id="torus-geometry-arc">
      <h3><a href="#torus-geometry-arc" class="anchor"></a> arc
        <span class="type">Number</span>
        <span class="default">2</span>
      </h3>
      <p>Torus geometry arc</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/c320e12f7e594c48fb8e.js"></script>

<img src="images/shapes/torus.png" alt="rendered torus on it's example">