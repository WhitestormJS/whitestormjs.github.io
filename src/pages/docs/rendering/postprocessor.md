---

title: PostProcessor
longtitle: WHS.PostProcessor
category: Rendering
icon: postprocessor.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/rendering/postprocessor.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/rendering/post-processing/PostProcessor.js

tags:
 - component
 - Rendering
 - PostProcessing
 - RenderPasses
 - EffectComposer

---

`WHS.PostProcessor` is a rendering plugin that allow you to compose different rendering passes to achieve post processing effects.
it combine a `THREE.WebGLRenderer` with an EffectComposer that can render multiples passes into a `THREE.WebGLRenderTarget`.

# Usage

### Set up in your World
To set up your `WHS.World` to use a `WHS.PostProcessor` plugin you need to do like this :

```javascript
let world = new WHS.World(params);

world.$rendering = new WHS.PostProcessor(renderingParams);
let plugin = world.$rendering;
```

### Adding a Render Pass

Render passes are a specific kind of pass in the `PostProcessor` that can render all your geometry to a buffer.
It take a boolean that will tell the `PostProcessor` to render this pass directly to screen, or not.
If you want to combine multiples passes, render only your last pass to screen.

```javascript
plugin.createRenderPass(false);    
```

### Adding a custom pass

Custom passes are generaly composed of a custom Shader and some rendering. To create a custom pass you can do like this :

```javascript
class CustomPass extends WHS.Pass {
  constructor(name, params) {
    super(name);
  }

  render(renderer, writeBuffer, readBuffer, delta, maskActive) {
    /* your custom pass rendering stuff */
  }
}
```

> Passes must have a name attribute

### Using your custom pass

Custom passes have to then be added to the PostProcessor `EffectComposer` like this :

```javascript
 plugin.createPass(composer => {
    const pass = new CustomPass('CustomPassName');
    pass.renderToScreen = true;
    composer.addPass(pass);
  });
```

> The createPass() method gives you the composer instance, don't forget to add your pass to it once it is instancied.

To see more, have a look at the basic glitch post-processing example

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

let world = new WHS.World(conf);
```

## MODULES

### `.$renderer`

`THREE.WebGLRenderer` object.

### `.$composer`

`THREE.EffectComposer` object.

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

### RenderTarget

Change the `THREE.WebGLRenderTarget` options
```javascript
{
  rendering: {
    renderTarget: {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      stencilBuffer: false,
      toScreen: true
      // ... refer to THREE.js doc for WebGLRenderTarget options
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
