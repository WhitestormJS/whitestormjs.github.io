
<h1 class="big" id="extras">Extras</h1>

## API: extend(object, ...extensions);

`WHS.extend()` or just `WHS.extend()` is made to simplify object comparing process. We use it to check object for undefined parameters and fill them with defaults defined by native class.

That's how you can use it:
<script src="https://gist.github.com/sasha240100/cf1af9b43d06a1d2756d.js"></script>

Will return:

<script src="https://gist.github.com/sasha240100/8af05b677037ff4efb90.js"></script>

<aside class="warning yellow">Used in whitestorm.js core.</aside>


## API: loadMaterial(material);

Turns your material parameter and returns whs material object.
This function checks for `kind` property and turns it into `THREE.Material` object.

Returns object that consist of `_material`, `_restitution` and `_friction`, where `_material` is a PhysiJS material object.

<div class="params" id="loadMaterial-returns">
  <h5>Returns <a href="#loadMaterial-returns" class="anchor"></a></h5>
  <ul>
    <li id="loadMaterial-returns-_material">
      <h3><a href="#loadMaterial-returns-_material" class="anchor"></a> _material
        <span class="type">Object</span>
      </h3>
      <p>THREE.js generated material</p>
    <li id="loadMaterial-returns-_materialP">
      <h3><a href="#loadMaterial-returns-_materialP" class="anchor"></a> _materialP
        <span class="type">Object</span>
      </h3>
      <p>THREE.js material wraped by PhysiJS. Contains also defined friction and mass</p>
    </li>
  </ul>
</div>

<aside class="warning yellow">This function is used in WhitestormJS Core.</aside>

## API: texture(url, options);

```javascript

const cube = GAME.Cube({
  geometry: {
    width: 2,
    height: 2,
    depth: 2
  },

  mass: 1,

  material: {
    kind: 'lambert',
    map: WHS.texture('assets/textures/box.jpg')
  },

  pos: {
    x: 50,
    y: 70,
    z: 60
  }
);

```

`WHS.texture()` wraps whs texture object to Three.js texture.

<div class="params" id="texture-params">
  <h5>Texture parameters <a href="#texture-params" class="anchor"></a></h5>
  <ul>
    <li id="texture-params-offset" class="nested">
      <h3><a href="#texture-params-offset" class="anchor"></a> offset
        <span class="type">Object</span>
      </h3>
      <p>Texture offset</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Texture offset x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Texture offset y coordinate</p>
        </li>
      </ul>
    </li>
    <li id="texture-params-repeat" class="nested">
      <h3><a href="#texture-params-repeat" class="anchor"></a> repeat
        <span class="type">Object</span>
      </h3>
      <p>Texture repeat</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Texture repeat x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Texture repeat y coordinate</p>
        </li>
      </ul>
    </li>
  </ul>
</div>

<aside class="notice"><code>options</code> parameter is optional.</aside>

<aside class="warning yellow">Used in whitestorm.js core.</aside>



<h2 class="wso" id="skybox">Skybox</h2>

<div class="blockTitle h3">Adding SkyBox</div>

```javascript

new WHS.Skybox({
  path: 'assets/textures/skybox/skymap',
  imgSuffix: '.png',
  skyType: 'sphere',
  radius: world.getCamera().getNative().far,

  rot: {
    y: Math.PI / 180 * -90
  },

  pos: {
    y: -200
  }
}).addTo(world);

```

```coffeescript

new (WHS.Skybox)(
  path: 'assets/textures/skybox/skymap'
  imgSuffix: '.png'
  skyType: 'sphere'
  radius: world.getCamera().getNative().far
  rot: y: Math.PI / 180 * -90
  pos: y: -200).addTo world

```

Skybox is frequently used in 3D games. You can easily create skies around your virtual world by setting `path` to your image in <a href="#extras-skybox">SkyBox options</a> and <a href="#extras-skybox-imgSuffix">extension property</a>.
Skybox can be 2 types:

 - **box** - Skybox is a mesh with THREE.BoxGeometry geometry and requires 6 images to build skybox. They should end with one of 'xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg' and extension name. 

Example: **images/myskyboxname-xpos.png**. Where `path` is **images/myskyboxname-**, `imgSuffix` is **.png**.

 - **sphere** - Requires only one image to be. 

Example: **images/myskyboxname.png**. Where `path` is **images/myskyboxname**, `imgSuffix` is **.png**.


<div class="params" id="extras-skybox">
  <h5>Skybox options <a href="#extras-skybox" class="anchor"></a></h5>
  <ul>
    <li id="extras-skybox-skytype">
      <h3><a href="#extras-skybox-skytype" class="anchor"></a> skytype
        <span class="type">String</span>
        <span class="default">box</span>
      </h3>
      <p>Type of skybox. Can be <code>box</code> or <code>sphere</code></p>
    </li>
    <li id="extras-skybox-imgSuffix">
      <h3><a href="#extras-skybox-imgSuffix" class="anchor"></a> imgSuffix
        <span class="type">String</span>
        <span class="default">".png"</span>
      </h3>
      <p>Your image file extension. (Starts with dot)</p>
    </li>
    <li id="extras-skybox-radius">
      <h3><a href="#extras-skybox-radius" class="anchor"></a> radius
        <span class="type">Nymber</span>
        <span class="default">10</span>
      </h3>
      <p>Radius of skybox if <code>sphere</code> or a / 2 of cube if <code>box</code> </p>
    </li>
    <li id="extras-skybox-fog">
      <h3><a href="#extras-skybox-fog" class="anchor"></a> fog
        <span class="type">Boolean</span>
        <span class="default">true</span>
      </h3>
      <p>Skybox support of <a href="#world-fog">fog</a></p>
    </li>
    <li id="extras-skybox-path">
      <h3><a href="#extras-skybox-path" class="anchor"></a> path
        <span class="type">String</span>
        <span class="default">""</span>
      </h3>
      <p>Path is a relative url to skybox image. Should be without file extension because it is defined in <a href="#extras-skybox-imgSuffix">other property</a>.</p>
    </li>
  </ul>
</div>

### Skybox example
<img src="images/skybox.png" alt="Skybox in fps example.">



<h2 class="ws" id="group">Group</h2>

<div class="blockTitle h3">Using group</div>

```javascript

const object1 = new WHS.Box({
  material: {
    kind: 'phong',
    color: 0x00ff00
  }
});

const object2 = new WHS.Box({
  material: {
    kind: 'phong',
    color: 0x0000ff
  }
});

const group = new WHS.Group(object1, object2);

group.addTo(world);

```

```coffeescript

object1 = new (WHS.Box)(material:
  kind: 'phong'
  color: 0x00ff00)

object2 = new (WHS.Box)(material:
  kind: 'phong'
  color: 0x0000ff)

group = new (WHS.Group)(object1, object2)
group.addTo world

```

`WHS.Group` equivalent in three.js is Object3D. It also has position and rotation that will affect it's children object and usually used just for this.

Has been used in [Saturn](http://192.241.128.187/current/examples/design/saturn/) example.

<div class="params" id="extras-group">
  <h5>Group arguments <a href="#extras-group" class="anchor"></a></h5>
  <ul>
    <li id="extras-group-objects">
      <h3><a href="#extras-group-objects" class="anchor"></a> ...objects
        <span class="type">ES6 Rest :: WHS.Object</span>
      </h3>
      <p>Pass objects that extend <code>WHS.Object</code>, <code>WHS.Shape</code> or <code>WHS.Light</code></p>
    </li>
  </ul>
</div>



<h2 class="wso" id="points">Points</h2>

<div class="blockTitle h3">Points geometry (direct/three.js)</div>

```javascript

const data = new Float32Array(3993000);
const colors = new Float32Array(3993000);

let i = 0;
for (let x = 0; x <= 100; x++) {
  for (let y = 0; y <= 100; y++) {
    for (let z = 0; z <= 100; z++) {
      data[i * 3] = x;
      data[i * 3 + 1] = y;
      data[i * 3 + 2] = z;
      colors[i * 3] = x / 100;
      colors[i * 3 + 1] = y / 100;
      colors[i * 3 + 2] = z / 100;
      i++;
    }
  }
}

const geom = new THREE.BufferGeometry();

geom.addAttribute('position', new THREE.BufferAttribute(data, 3));
geom.addAttribute('color', new THREE.BufferAttribute(colors, 3));

const points = new WHS.Points({
  geometry: geom,

  material: {
    kind: 'points', // Default for WHS.Point
    vertexColors: THREE.VertexColors,
    size: 0.1
  }
});

points.addTo(GAME);

```

```coffeescript

data = new Float32Array(3993000)
colors = new Float32Array(3993000)
i = 0
x = 0

while x <= 100
  y = 0
  while y <= 100
    z = 0
    while z <= 100
      data[i * 3] = x
      data[i * 3 + 1] = y
      data[i * 3 + 2] = z
      colors[i * 3] = x / 100
      colors[i * 3 + 1] = y / 100
      colors[i * 3 + 2] = z / 100
      i++
      z++
    y++
  x++

geom = new (THREE.BufferGeometry)
geom.addAttribute 'position', new (THREE.BufferAttribute)(data, 3)
geom.addAttribute 'color', new (THREE.BufferAttribute)(colors, 3)

points = new (WHS.Points)(
  geometry: geom
  material:
    kind: 'points'
    vertexColors: THREE.VertexColors
    size: 0.1)

points.addTo GAME

```

A class for displaying particles in the form of variable size points. For example, if using the WebGLRenderer, the particles are displayed using `GL_POINTS`.

As a `geometry` property value you should use a generated `THREE.Geometry` or `THREE.BufferGeometry`

<div class="params" id="extras-points">
  <h5>Points options <a href="#extras-points" class="anchor"></a></h5>
  <ul>
    <li id="extras-points-geometry">
      <h3><a href="#extras-points-geometry" class="anchor"></a> geometry
        <span class="type">THREE.Geometry / THREE.BufferGeometry</span>
        <span class="default">false</span>
      </h3>
      <p>Geometry by which will be generated points cloud</p>
    </li>
  </ul>
</div>

<aside class="notice"><code>WHS.Points</code> replaces material kind default from <code>basic</code> to <code>points</code></aside>
