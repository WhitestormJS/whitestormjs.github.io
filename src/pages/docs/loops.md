---

title: Loops & 3D Animation

tags:
 - three.js
 - webgl
 - 3d

---

You don't need to write `animate()` function like you do in Three.js. The problem is that bigger you app become, the bigger your `animate()` function is.

Here comes `WHS.Loop` class. With just a few lines of code you can your own mini-animate() function:

```javascript
new WHS.Loop(() => {
  box.rotation.y += 0.02;
}).start(world);
```

<div class="midimg">
  <img src="../../images/docs/loops/cube.gif" width="400" />
</div>

And you can make loop temporary like that: 

```javascript
const loop = new WHS.Loop((clock) => {
  // ...
  if (clock.getElapsedTime() > 5) loop.stop(world);
});

loop.start(world);
```

This loop will be destroyed after 5 seconds.
