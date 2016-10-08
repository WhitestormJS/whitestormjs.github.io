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
    ]
  }
}

export {
  pages as default
};
