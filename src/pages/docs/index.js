const removeYaml = (content) => {
  if (content.match(/^---\n/g)
    && content.match(/---\n/g).length >= 2) {
    return content.substring(
      content.indexOf('---\n', 1) + 3,
      content.length
    );
  } else return content;
}

const pages = {
  docs: {
    'getting-started': [
      removeYaml(require('raw!./getting-started.md')),
      require('markdown-with-front-matter!./getting-started.md')
    ],
    '3d-transforms': [
      removeYaml(require('raw!./3dTransforms.md')),
      require('markdown-with-front-matter!./3dTransforms.md')
    ],
    'variations': [
      removeYaml(require('raw!./variations.md')),
      require('markdown-with-front-matter!./variations.md')
    ],

    // Core

    'component': [
      removeYaml(require('raw!./core/component.md')),
      require('markdown-with-front-matter!./core/component.md')
    ],
    'meshcomponent': [
      removeYaml(require('raw!./core/meshcomponent.md')),
      require('markdown-with-front-matter!./core/meshcomponent.md')
    ],
    'lightcomponent': [
      removeYaml(require('raw!./core/lightcomponent.md')),
      require('markdown-with-front-matter!./core/lightcomponent.md')
    ],
    'cameracomponent': [
      removeYaml(require('raw!./core/cameracomponent.md')),
      require('markdown-with-front-matter!./core/cameracomponent.md')
    ],

    // Meshes

    'box': [
      removeYaml(require('raw!./meshes/box.md')),
      require('markdown-with-front-matter!./meshes/box.md')
    ],
    'dodecahedron': [
      removeYaml(require('raw!./meshes/dodecahedron.md')),
      require('markdown-with-front-matter!./meshes/dodecahedron.md')
    ],
    'extrude': [
      removeYaml(require('raw!./meshes/extrude.md')),
      require('markdown-with-front-matter!./meshes/extrude.md')
    ],
    'icosahedron': [
      removeYaml(require('raw!./meshes/icosahedron.md')),
      require('markdown-with-front-matter!./meshes/icosahedron.md')
    ],
    'lathe': [
      removeYaml(require('raw!./meshes/lathe.md')),
      require('markdown-with-front-matter!./meshes/lathe.md')
    ],
    'line': [
      removeYaml(require('raw!./meshes/line.md')),
      require('markdown-with-front-matter!./meshes/line.md')
    ],
    'model': [
      removeYaml(require('raw!./meshes/model.md')),
      require('markdown-with-front-matter!./meshes/model.md')
    ],
    'morph': [
      removeYaml(require('raw!./meshes/morph.md')),
      require('markdown-with-front-matter!./meshes/morph.md')
    ],
    'octahedron': [
      removeYaml(require('raw!./meshes/octahedron.md')),
      require('markdown-with-front-matter!./meshes/octahedron.md')
    ],
    'parametric': [
      removeYaml(require('raw!./meshes/parametric.md')),
      require('markdown-with-front-matter!./meshes/parametric.md')
    ],
    'plane': [
      removeYaml(require('raw!./meshes/plane.md')),
      require('markdown-with-front-matter!./meshes/plane.md')
    ],
    'polyhedron': [
      removeYaml(require('raw!./meshes/polyhedron.md')),
      require('markdown-with-front-matter!./meshes/polyhedron.md')
    ],
    'ring': [
      removeYaml(require('raw!./meshes/ring.md')),
      require('markdown-with-front-matter!./meshes/ring.md')
    ],
    'shape': [
      removeYaml(require('raw!./meshes/shape.md')),
      require('markdown-with-front-matter!./meshes/shape.md')
    ],
    'sphere': [
      removeYaml(require('raw!./meshes/sphere.md')),
      require('markdown-with-front-matter!./meshes/sphere.md')
    ],
    'tetrahedron': [
      removeYaml(require('raw!./meshes/tetrahedron.md')),
      require('markdown-with-front-matter!./meshes/tetrahedron.md')
    ],
    'text': [
      removeYaml(require('raw!./meshes/text.md')),
      require('markdown-with-front-matter!./meshes/text.md')
    ],
    'torus': [
      removeYaml(require('raw!./meshes/torus.md')),
      require('markdown-with-front-matter!./meshes/torus.md')
    ],
    'torusknot': [
      removeYaml(require('raw!./meshes/torusknot.md')),
      require('markdown-with-front-matter!./meshes/torusknot.md')
    ],
    'tube': [
      removeYaml(require('raw!./meshes/tube.md')),
      require('markdown-with-front-matter!./meshes/tube.md')
    ],

    // Lights

    'ambient_light': [
      removeYaml(require('raw!./lights/ambient_light.md')),
      require('markdown-with-front-matter!./lights/ambient_light.md')
    ],
    'directional_light': [
      removeYaml(require('raw!./lights/directional_light.md')),
      require('markdown-with-front-matter!./lights/directional_light.md')
    ],
    'hemisphere_light': [
      removeYaml(require('raw!./lights/hemisphere_light.md')),
      require('markdown-with-front-matter!./lights/hemisphere_light.md')
    ],
    'point_light': [
      removeYaml(require('raw!./lights/point_light.md')),
      require('markdown-with-front-matter!./lights/point_light.md')
    ],
    'spot_light': [
      removeYaml(require('raw!./lights/spot_light.md')),
      require('markdown-with-front-matter!./lights/spot_light.md')
    ],

    // Cameras

    'perspective_camera': [
      removeYaml(require('raw!./cameras/perspective_camera.md')),
      require('markdown-with-front-matter!./cameras/perspective_camera.md')
    ],
    'ortographic_camera': [
      removeYaml(require('raw!./cameras/ortographic_camera.md')),
      require('markdown-with-front-matter!./cameras/ortographic_camera.md')
    ],
    'cube_camera': [
      removeYaml(require('raw!./cameras/cube_camera.md')),
      require('markdown-with-front-matter!./cameras/cube_camera.md')
    ],

    // Controls

    'first-person': [
      removeYaml(require('raw!./controls/first-person.md')),
      require('markdown-with-front-matter!./controls/first-person.md')
    ],
    'orbit': [
      removeYaml(require('raw!./controls/orbit.md')),
      require('markdown-with-front-matter!./controls/orbit.md')
    ],

    // Utils

    'extend': [
      removeYaml(require('raw!./utils/extend.md')),
      require('markdown-with-front-matter!./utils/extend.md')
    ],
    'texture': [
      removeYaml(require('raw!./utils/texture.md')),
      require('markdown-with-front-matter!./utils/texture.md')
    ],
    'loadMaterial': [
      removeYaml(require('raw!./utils/loadMaterial.md')),
      require('markdown-with-front-matter!./utils/loadMaterial.md')
    ]
  }
}

const categories = {
  docs: {
    'Core': {
      icon: 'core.png'
    },
    'Meshes': {
      icon: 'meshes.png',
      noExtend: true
    },
    'Lights': {
      icon: 'lights.png'
    },
    'Cameras': {
      icon: 'camera.png'
    },
    'Controls': {
      icon: 'controls.png'
    },
    'Utils': {
      icon: 'utils.png'
    }
  }
}

export {
  pages as default,
  categories
};
