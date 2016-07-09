<h2 class="wsl" id="point">PointLight [Class]</h2>

> red WHS.PointLight:

```javascript

var pointlight = GAME.PointLight( {
    light: {
        color: 0xff0000, // Red.
        intensity: 3,
        distance: 1000
    },

    pos: {
    	x: 10,
    	y: 20,
    	z: 10
    },

    target: {
    	x: 0,
    	y: 0,
    	z: 0
    }
} );

```

> This light will fall down from vec3(10, 20, 10) to vec3(0, 0, 0)


`WHS.PointLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.PointLight` creates a light at a specific position in the scene. The light shines in all directions (roughly similar to a light bulb.)

It has the same options as `WHS.AmbientLight` in `light` paramater, but it also supports `pos` and `target` paramaters.

<div class="params" id="point-light">
  <h5>Point light object <a href="#point-light" class="anchor"></a></h5>
  <ul>
    <li id="point-light-color">
      <h3><a href="#point-light-color" class="anchor"></a> color
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Point light color</p>
    </li>
    <li id="point-light-intensity">
      <h3><a href="#point-light-intensity" class="anchor"></a> intensity
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Point light intensity</p>
    </li>
    <li id="point-light-distance">
      <h3><a href="#point-light-distance" class="anchor"></a> distance
        <span class="type">Number</span>
        <span class="default">100</span>
      </h3>
      <p>Point light distance</p>
    </li>
    <li id="point-light-angle">
      <h3><a href="#point-light-angle" class="anchor"></a> angle
        <span class="type">Number</span>
        <span class="default">Math.PI / 3</span>
      </h3>
      <p>Point light angle</p>
    </li>
  </ul>
</div>

<aside class="notice"><code>WHS.PointLight</code> affects meshes with <code>lambert</code> and <code>phong</code> material.</aside>