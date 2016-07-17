<h2 class="ws" id="torus">Torus</h2>

<div class="blockTitle h3">Basic torus example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x00ffff%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%20-2,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:15,%0D%0A%20%20%20%20y:20,%0D%0A%20%20%20%20z:10%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20torus%20=%20new%20WHS.Torus(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20radius:%205,%0D%0A%20%20%20%20tube:%202%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%203,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20kind:%20'lambert',%0D%0A%20%20%20%20color:%200xffffff,%0D%0A%20%20%20%20side:%20THREE.DoubleSide%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20pos:%20%7B%0D%0A%20%20%20%20y:%205%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Atorus.addTo(world);%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

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


`WHS.Torus` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

`WHS.Torus` class makes a torus figure. Torus is a donut. Donut is a torus.

<div class="params" id="torus-geometry">
  <h5>Torus geometry object <a href="#torus-geometry" class="anchor"></a></h5>
  <ul>
    <li id="torus-geometry-radius">
      <h3><a href="#torus-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">100</span>
      </h3>
      <p>Radius of torus</p>
    </li>
    <li id="torus-geometry-tube">
      <h3><a href="#torus-geometry-tube" class="anchor"></a> tube
        <span class="type">Number</span>
        <span class="default">40</span>
      </h3>
      <p>Diameter of tube from which torus is constructed</p>
    </li>
    <li id="torus-geometry-radialSegments">
      <h3><a href="#torus-geometry-radialSegments" class="anchor"></a> radialSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>Radial segments in torus, number of segments that makes up cross section of tube of torus</p>
    </li>
    <li id="torus-geometry-tubularSegments">
      <h3><a href="#torus-geometry-tubularSegments" class="anchor"></a> tubularSegments
        <span class="type">Number</span>
        <span class="default">6</span>
      </h3>
      <p>Tubular segments in torus, number of segments that makes up torus</p>
    </li>
    <li id="torus-geometry-arc">
      <h3><a href="#torus-geometry-arc" class="anchor"></a> arc
        <span class="type">Number</span>
        <span class="default">2</span>
      </h3>
      <p>Central angle of torus, arc of torus</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/c320e12f7e594c48fb8e.js"></script>

<img src="images/shapes/torus.png" alt="rendered torus on it's example">
