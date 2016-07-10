<h2 class="wsl" id="directional">DirectinalLight</h2>

<div class="blockTitle h3">DirectinalLight example</div>

```javascript

new WHS.DirectinalLight( {
    light: {
        color: 0xffffff,
        intensity: 0.2
    },

    pos: {
    	x: 10,
    	y: 20,
    	z: 10
    }
}).addTo(world);

```

```coffeescript

new (WHS.DirectinalLight)(
  light:
    color: 0xffffff
    intensity: 0.2
  pos:
    x: 10
    y: 20
    z: 10).addTo world

```

> This light will fall down from vec3(10, 20, 10) to vec3(0, 0, 0)


`WHS.DirectinalLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.DirectinalLight` creates a light that shines from a specific direction not from a specific position. 

This light will behave as though it is infinitely far away and the rays produced from it are all parallel. 

The best analogy would be a light source that acts like the sun: the sun is so far away that all sunlight hitting objects comes from the same angle.

It has the same options as `WHS.AmbientLight` in `light` paramater, but it also supports `pos` and `target` paramaters.

<div class="params" id="directional-light">
  <h5>Directinal light object <a href="#directional-light" class="anchor"></a></h5>
  <ul>
    <li id="directional-light-color">
      <h3><a href="#directional-light-color" class="anchor"></a> color
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Directinal light color</p>
    </li>
    <li id="directional-light-intensity">
      <h3><a href="#directional-light-intensity" class="anchor"></a> intensity
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Directinal light intensity</p>
    </li>
  </ul>
</div>

<aside class="notice"><code>DirectinalLight</code> affects only meshes with <code>lambert</code> and <code>phong</code> material.</aside>