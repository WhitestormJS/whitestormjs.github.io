<h2 class="wsl" id="normal">NormalLight</h2>

<div class="blockTitle h3">NormalLight example</div>

```javascript

new WHS.NormalLight( {
  light: {
    color: 0xffffff
  }
}).addTo(world);

```

```coffeescript

new (WHS.NormalLight)(light: color: 0xffffff).addTo world


```

`WHS.NormalLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.NormalLight` is an abstract base class for lights.

It also doesn't need `pos` and `target` properties.

<div class="params" id="normal-light">
  <h5>Normal light object <a href="#normal-light" class="anchor"></a></h5>
  <ul>
    <li id="normal-light-color">
      <h3><a href="#normal-light-color" class="anchor"></a> color
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Normal light color</p>
    </li>
  </ul>
</div>
