<h2 class="ws" id="torusknot">Torusknot</h2>

<div class="blockTitle h3">Basic torusknot example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x00ffff%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%200,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:15,%0D%0A%20%20%20%20y:20,%0D%0A%20%20%20%20z:10%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20torusknot%20=%20new%20WHS.Torusknot(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20radius:5,%0D%0A%20%20%20%20tube:%202%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%202,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20kind:%20%22phong%22,%0D%0A%20%20%20%20color:%200xffffff%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20pos:%20%7B%0D%0A%20%20%20%20y:%205%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Atorusknot.addTo(world);%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

```javascript

const torusknot = new WHS.Torusknot({
  geometry: {
    radius:5,
    tube: 2
  },

  mass: 10,

  material: {
    kind: "phong",
    color: 0xffffff
  },

  pos: {
    y: 100
  }
});

torusknot.addTo(world);

```

```coffeescript

torusknot = new (WHS.Torusknot)(
  geometry:
    radius: 5
    tube: 2
  mass: 10
  material:
    kind: 'phong'
    color: 0xffffff
  pos: y: 100)

torusknot.addTo world

```


`WHS.Torusknot` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

`WHS.Torusknot` class makes a torusknot figure. It's like crooked donut, very crooked.

<div class="params" id="torusknot-geometry">
  <h5>Torusknot geometry object <a href="#torusknot-geometry" class="anchor"></a></h5>
  <ul>
    <li id="torusknot-geometry-radius">
      <h3><a href="#torusknot-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">100</span>
      </h3>
      <p>radius of Torusknot</p>
    </li>
    <li id="torusknot-geometry-tube">
      <h3><a href="#torusknot-geometry-tube" class="anchor"></a> tube
        <span class="type">Number</span>
        <span class="default">40</span>
      </h3>
      <p>Diameter Torusknot tube from torusknot is made up</p>
    </li>
    <li id="torusknot-geometry-radialSegments">
      <h3><a href="#torusknot-geometry-radialSegments" class="anchor"></a> radialSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>Number of radius segments that makes up cross section of tube of Torusknot</p>
    </li>
    <li id="torusknot-geometry-tubularSegments">
      <h3><a href="#torusknot-geometry-tubularSegments" class="anchor"></a> tubularSegments
        <span class="type">Number</span>
        <span class="default">6</span>
      </h3>
      <p>Number of segments that makes up a tube of Torusknot</p>
    </li>
    <li id="torusknot-geometry-p">
      <h3><a href="#torusknot-geometry-p" class="anchor"></a> p
        <span class="type">Number</span>
        <span class="default">2</span>
      </h3>
      <p>This value determines, how many times the geometry winds around its axis of rotational symmetry</p>
    </li>
    <li id="torusknot-geometry-q">
      <h3><a href="#torusknot-geometry-q" class="anchor"></a> q
        <span class="type">Number</span>
        <span class="default">3</span>
      </h3>
      <p>This value determines, how many times the geometry winds around a circle in the interior of the torus</p>
    </li>
    <li id="torusknot-geometry-heightScale">
      <h3><a href="#torusknot-geometry-heightScale" class="anchor"></a> heightScale
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Scale of height of Torusknot</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/186976e65a13e62ec333.js"></script>

<img src="images/shapes/torusknot.png" alt="torusknot shape">
