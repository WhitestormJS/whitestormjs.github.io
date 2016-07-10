<h2 class="wsl" id="hemisphere">HemisphereLight</h2>

<div class="blockTitle h3">HemisphereLight example</div>

```javascript

new WHS.HemisphereLight({
  light: {
    skyColor: 0xff0000,
    groundColor: 0x0000ff,
    intensity: 0.2
  }
}).addTo(world);

```

```coffeescript

new WHS.HemisphereLight({
  light: {
    skyColor: 0xff0000,
    groundColor: 0x0000ff,
    intensity: 0.2
  }
}).addTo(world);

```

`WHS.HemisphereLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.HemisphereLight` is a light source positioned directly above the scene. 

It also doesn't need `pos` and `target` properties.

<div class="params" id="hemisphere-light">
  <h5>Hemisphere light object <a href="#hemisphere-light" class="anchor"></a></h5>
  <ul>
    <li id="hemisphere-light-skyColor">
      <h3><a href="#hemisphere-light-skyColor" class="anchor"></a> skyColor
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Hemisphere light skyColor</p>
    </li>
    <li id="hemisphere-light-groundColorHex">
      <h3><a href="#hemisphere-light-groundColorHex" class="anchor"></a> groundColorHex
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Hemisphere light groundColorHex</p>
    </li>
    <li id="hemisphere-light-intensity">
      <h3><a href="#hemisphere-light-intensity" class="anchor"></a> intensity
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Hemisphere light intensity</p>
    </li>
  </ul>
</div>