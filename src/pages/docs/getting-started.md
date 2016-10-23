---

title: Getting started

featured:
  title: Getting started
  describe: In this article you will find useful information about WhitestormJS framework and it's usage.
  image: getting-started.png

wip: Rewrite structure

tags:
 - three.js
 - webgl
 - 3d

---

**WhitestormJS** is a framework for 3D web apps built with Three.js technology.

It implements a core with component system and plugin support for fast development of 3D scene with physics.

Automizing your web app with whitestorm is fast and comfortable. This engine has physics support implemented by custom Physi.js library, which is much faster than others. Framework provides extended component control and high frame rate, because it uses [WebWorkers technology](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) for multithreading.

# Heading 1

Each time you want to develop even a basic application - you need to describe every 3D part of it, such as renderer, frame updating, include external physics, write autoresize if needed. This time we want you to make all it much easier with best performance and functionality. You still can manage all of them, but if you forgot to do that, or just don't need it - whitestorm.js will do all it for you.

## Heading 2

...more

### Heading 3

...more more

#### Heading 4

We want simplify your coding workflow and add plugin's feature to 3D part of the web.

> A simple note that i left there

And i can do such:

> And a multi-line note
>
> should work.

Code block:


```javascript

const sphere = new WHS.Sphere({
  geometry: {
    radius: 2
  },

  mass: 10,

  material: {
    color: 0xffffff,
    kind: 'lambert',
    bool: true,
    regex: /[A-z]/
  },

  pos: {
    y: 100
  }
});

sphere.addTo(world);

```
