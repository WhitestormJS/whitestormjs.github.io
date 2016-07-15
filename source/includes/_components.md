# Extensions

## Loop

<div class="blockTitle h3">Usage of WHS.Loop</div>

```javascript

const loop = new WHS.Loop((clock) => { // clock is THREE.Clock
  console.log(clock.getElapsedTime()); // Will log time from loop start.
});

world.addLoop(loop); // Assign loop to world.
loop.start(); // Start loop.

```

```coffeescript

loop1 = new (WHS.Loop)((clock) ->
  # clock is THREE.Clock
  console.log clock.getElapsedTime()
  # Will log time from loop start.
  return
)

world.addLoop loop1
# Assign loop handler.
loop1.start()
# Start loop.

```

<blockquote class="section">
  <header>Methods:</header>
  <table>
    <tr>
      <th>.start()</th><td>Start loop animation.</td>
    </tr>
    <tr>
      <th>.stop()</th><td>Stop loop animation.</td>
    </tr>
    <tr>
      <th>.execute()</th><td>Execute handler function.</td>
    </tr>
  </table>
</blockquote>

Loop will be executed each frame we render world. As a loop handler we pass a function that receives a `THREE.Clock` object.
This class can be used in animations and smooth transitions of position for example.

