
<h1 class="big" id="API">API</h1>

## extend(object, ...extensions);

`WHS.API.extend()` or just `WHS.API.extend()` is made to simplify defining defaults process. We use it to check object for undefined parameters and fill them with our defaults.

That's how you can use it:
<script src="https://gist.github.com/sasha240100/cf1af9b43d06a1d2756d.js"></script>

Will return:

<script src="https://gist.github.com/sasha240100/8af05b677037ff4efb90.js"></script>

<aside class="warning yellow">This function is used in WhitestormJS Core!</aside>


## loadMaterial(material);

Turns your material parameter and returns whs material object.
This function checks for `kind` property and turns it into `THREE.Material` object.

Returns object that consist of `_material`, `_restitution` and `_friction`, where `_material` is a PhysiJS material object.

<aside class="warning yellow">This function is used in WhitestormJS Core.</aside>

## texture(url, options);

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

`WHS.API.texture()` wraps whs texture object to Three.js texture.

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

<aside class="warning yellow">This function is used in WhitestormJS Core!</aside>



