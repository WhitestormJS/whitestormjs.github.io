# Lights

<h2 class="wsl" id="ambient">AmbientLight [Class]</h2>

> WHS.AmbientLight example:

```javascript

var ambient = GAME.AmbientLight( {
    light: {
        color: 0xffffff,
        intensity: 0.2
    }
} );

```

`WHS.AmbientLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.AmbientLight` creates basic light around all scene, so it doesn't need properties like `pos` or `target`.

It supports only `color` parameter, which defines the color of the surrounded light and `intensity` of light.

<div class="params" id="ambient-light">
  <h5>Ambient light object <a href="#ambient-light" class="anchor"></a></h5>
  <ul>
    <li id="ambient-light-color">
      <h3><a href="#ambient-light-color" class="anchor"></a> color
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Ambient light color</p>
    </li>
    <li id="ambient-light-intensity">
      <h3><a href="#ambient-light-intensity" class="anchor"></a> intensity
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Ambient light intensity</p>
    </li>
  </ul>
</div>
