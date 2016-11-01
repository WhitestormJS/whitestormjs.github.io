---

title: RenderingPlugin
longtitle: WHS.RenderingPlugin
category: Rendering
icon: renderingplugin.png

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/rendering/renderingplugin.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/rendering/RenderingPlugin.js

tags:
 - three.js
 - webgl
 - 3d
 - component
 - RenderingComponent
 - plugin

---

`WHS.RenderingPlugin` is an abstract class, that defines the rendering plugin API. 
<br>Your `WHS.World` instance can have one `RenderingPlugin` that will draw its `Scene` from its `Camera` point a view into the screen, or a framebuffer that can be used for post processing effects.

There is two rendering plugins provided in WhitestormJS :
 * BasicRendering - that is used by default by any `WHS.World` instance, and do basic `WebGLRenderer` drawing to the screen
 * PostProcessor - that can be used to combine multiple rendering passes to achieve post procesing effects.

## How to configure your `WHS.World` to use a rendering plugin
### Default

By default, `WHS.World` internaly use a `WHS.BasicRendering` plugin, so you don't need to do anything to set up this plugin.

### Specific

If you want to set a different plugin to your world instance, you should proced like this :

```javascript
let world = new WHS.World(params);

world.renderingPlugin = new WHS.YourRenderingPlugin(renderingParams);
let plugin = world.renderingPlugin;

plugin.doThings(...);
```
> It is important to use it like this, and only assign the `new YourRenderingPlugin(...)` to world.renderingPlugin. Do not store it directly!

to see more, look at the post processing examples.

# Implementing your own rendering plugin
If you want to do advanced rendering, you can create your own rendering plugin like that :
(note that you MUST re-implement those methods, or your plugin won't work)
```javascript

import { RenderingPlugin } from '../RenderingPlugin';

class YourRenderingPlugin extends RenderingPlugin {
  constructor(params = {}) {
    super(params);
    return (world) => {
      this.parentWorld = world;
      return this;
    }
  }

  build(params = {}) {
   /* build your THREE.js rendering objects here, usually 
   you'll want to instaciate and store a WebGLRenderer here. */
  }

  renderPlugin(delta) {
    /* This is the render callback that will be called on each frames */
  }

  setSize(width, height) {
    /* propagate or resize your plugin rendering elements */ 
  }
}

```
