<h2 class="wsl" id="hemisphere">HemisphereLight [Class]</h2>

> WHS.HemisphereLight:

```javascript

var ambient = GAME.HemisphereLight( {
    light: {
        skyColor: 0xffffff,
        groundColor: 0xffffff,
        intensity: 0.2
    }
} );

```

> This light will fall down from vec3(10, 20, 10) to vec3(0, 0, 0)


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