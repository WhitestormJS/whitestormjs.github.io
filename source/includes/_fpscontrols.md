# Controls

## First-person controls.

<div class="blockTitle h3">Setting first-person controls</div>

```javascript

const sphere = new WHS.Sphere( {
  geometry: {
    radius: 2
  },

  mass: 10,

  material: {
    color: 0xffffff,
    kind: 'lambert'
  },

  pos: {
    y: 100
  }
});

sphere.addTo(world);

world.setControls(
  WHS.firstPersonControls(sphere, {
    block: document.getElementById('blocker'),
    speed: 5,
    ypos: 1
  })
);

```

In video games, the **first person** refers to a graphical perspective rendered from the viewpoint of the player character. In many cases, this may be the viewpoint from the cockpit of a vehicle. 
Many different genres have made use of first-person perspectives, ranging from adventure games to flight simulators. Perhaps the most notable genre to make use of this device is the _first-person shooter_, where the graphical perspective has an immense impact on game play.

<div class="params" id="controls-fps">
  <h5>FPS controls object <a href="#controls-fps" class="anchor"></a></h5>
  <ul>
    <li id="controls-fps-block">
      <h3><a href="#controls-fps-block" class="anchor"></a> block
        <span class="type">DOM</span>
        <span class="default">document.getElementById('blocker')</span>
      </h3>
      <p>Blocker element</p>
    </li>
    <li id="controls-fps-speed">
      <h3><a href="#controls-fps-speed" class="anchor"></a> speed
        <span class="type">Number</span>
        <span class="default">5</span>
      </h3>
      <p>Player speed</p>
    </li>
    <li id="controls-fps-ypos">
      <h3><a href="#controls-fps-ypos" class="anchor"></a> ypos
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Distance from camera to surface</p>
    </li>
  </ul>
</div>