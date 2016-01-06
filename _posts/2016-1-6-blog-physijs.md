---
layout: blog
title: "New updates in WhitestormJS (winter 2016)"
permalink: blog/winter-updates
icon: rocket
---

### Yeah, new physics!!

We just ported PhysiJS to WhitestormJS engine. It doesn't mean that you can't use WhitestormJS with cannonjs now. CannonJS is awesome library too, but we alse decided to make variations of engine for people who have worked with PhysiJS, OimoJS and others...

### What's new

 - In fps example person(sphere) now doesn't rolls when you stay.

 - Physics runs in **WebWorkers**. 

 - Now you can control **friction and restitution** of your 3d object.

 - FPS controls now have properties, like speed and jumpVelocity.


### What will be

 - Engine optimization (cleaned files, code style).

 - Better examples design.

<!-- Add something here -->

#### Change your code

1) **Add physijs library to your page.**

```html

<script src="physi.js"></script>

```

<br>
2) **Some changes in WHS.init:**

_Was:_ 

```javascript

var GAME = new WHS.init({
    anaglyph: false, // Anaglyph effect.
    stats: "fps", // fps, ms, mb or false if not need.
    wagner: WAGNER, // wagner library variable

    gravity: { // Physic gravity.
        x: 0,
        y: -100,
        z: 0
    }
});

```

<br>

_Now:_

```javascript

var GAME = new WHS.init({
    anaglyph: false, // Anaglyph effect.
    stats: "fps", // fps, ms, mb or false if not need.
    wagner: WAGNER, // wagner library variable

    gravity: { // Physic gravity.
        x: 0,
        y: -100,
        z: 0
    },

    path_worker: 'physijs_worker.js' // Path to Physijs worker here.
    path_ammo: 'ammo.js' // Path to Ammo.js.
});

// Define your scene objects here.

GAME.start(); // Start animations and physics simulation.

```