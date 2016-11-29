---

title: BasicRendering
longtitle: WHS.BasicRendering
category: Rendering
icon: basicrendering.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/rendering/basicrendering.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/rendering/basic/BasicRendering.js

tags:
 - component
 - Rendering
 - BasicRendering

---

`WHS.BasicRendering` is an simple rendering plugin that use a `WebGLRenderer` to directly draw your scene to the screen.
it wraps a `THREE.WebGLRenderer` and accept the associated configuration.

# Configuration

Configuration can be defined in the `rendering` property of the `WHS.World`

```javascript
const conf = {
  world: {
    rendering: {
      // optional configuration of the BasicRendering plugin
    }
  }
}

const world = new WHS.World(conf);
```

## MODULES

### `.$renderer`

`THREE.WebGLRenderer` object.

## Here is the description of available properties:

### Size

Change the size of the rendering buffer
```javascript
{
  // ...

   width: ...
   height: ...
}
```

### Background 

Change the background color of the screen
```javascript
{
  // ...

  rendering: {
    background: {
      color: 0x162129
    }
  }
}
```

### Renderer

Change the `THREE.WebGLRenderer` options
```javascript
{
  // ...

  rendering: {
    renderer: {
      antialias: true,
      // ... refer to THREE.js doc for WebGLRenderer
    }
  }
}
```

### Shadowmap

Change the shadowmap options
```javascript
{
  // ...

  rendering: {
    shadowmap: {
      type: THREE.PCFSoftShadowMap
      // ... refer to THREE.js doc for Shadowmap options
    }
  }
}
```

### Stats

Stats widget can be displayed by this plugin
```javascript
{
  // ...

  stats: true,

  modules: {
    stats: true
  },
}
```
