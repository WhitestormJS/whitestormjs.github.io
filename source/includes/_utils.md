<h1 class="big" id="utils">Utils</h1>

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
