const Sitemap = require('sitemap-tree');
const __domain = "https://whsjs.io/";

const urls = [
  ["#/api", "never", 1],
  ["#/contribute", "never", 0.2],
  ["#/team", "never", 0.2],

  ['#/api/getting-started', "never", 0.8],
  ['#/api/basic', "never", 0.8],
  ['#/api/loops', "never", 0.8],
  ['#/api/debugging', "never", 0.8],
  ['#/api/group', "never", 0.8],
  ['#/api/vmouse', "never", 0.8],
  ['#/api/3dTransforms', "never", 0.8],
  ['#/api/webpack', "never", 0.8],
  ['#/api/variations', "never", 0.8],
  ['#/api/core/world', "never", 0.8],
  ['#/api/core/component', "never", 0.8],
  ['#/api/core/element', "never", 0.8],
  ['#/api/core/meshcomponent', "never", 0.8],
  ['#/api/core/renderingcomponent', "never", 0.8],
  ['#/api/core/physicscomponent', "never", 0.8],
  ['#/api/core/softbodycomponent', "never", 0.8],
  ['#/api/core/lightcomponent', "never", 0.8],
  ['#/api/core/cameracomponent', "never", 0.8],
  ['#/api/rendering/renderingplugin', "never", 0.8],
  ['#/api/rendering/basicrendering', "never", 0.8],
  ['#/api/rendering/postprocessor', "never", 0.8],
  ['#/api/meshes/box', "never", 0.8],
  ['#/api/meshes/cylinder', "never", 0.8],
  ['#/api/meshes/dodecahedron', "never", 0.8],
  ['#/api/meshes/extrude', "never", 0.8],
  ['#/api/meshes/icosahedron', "never", 0.8],
  ['#/api/meshes/lathe', "never", 0.8],
  ['#/api/meshes/line', "never", 0.8],
  ['#/api/meshes/model', "never", 0.8],
  ['#/api/meshes/morph', "never", 0.8],
  ['#/api/meshes/octahedron', "never", 0.8],
  ['#/api/meshes/parametric', "never", 0.8],
  ['#/api/meshes/plane', "never", 0.8],
  ['#/api/meshes/polyhedron', "never", 0.8],
  ['#/api/meshes/ring', "never", 0.8],
  ['#/api/meshes/shape', "never", 0.8],
  ['#/api/meshes/sphere', "never", 0.8],
  ['#/api/meshes/tetrahedron', "never", 0.8],
  ['#/api/meshes/text', "never", 0.8],
  ['#/api/meshes/torus', "never", 0.8],
  ['#/api/meshes/torusknot', "never", 0.8],
  ['#/api/meshes/tube', "never", 0.8],
  ['#/api/lights/ambient_light', "never", 0.8],
  ['#/api/lights/directional_light', "never", 0.8],
  ['#/api/lights/hemisphere_light', "never", 0.8],
  ['#/api/lights/point_light', "never", 0.8],
  ['#/api/lights/spot_light', "never", 0.8],
  ['#/api/cameras/perspective_camera', "never", 0.8],
  ['#/api/cameras/ortographic_camera', "never", 0.8],
  ['#/api/cameras/cube_camera', "never", 0.8],
  ['#/api/first-person', "never", 0.8],
  ['#/api/controls/orbit', "never", 0.8],
  ['#/api/utils/extend', "never", 0.8],
  ['#/api/utils/texture', "never", 0.8],
  ['#/api/utils/loadMaterial', "never", 0.8]
].map(v => {
  return {
    loc: __domain + v[0],
    lastmod: new Date().toISOString(), // "2015-08-31T11:00:23-04:00"
    changefreq: v[1],
    priority: v[2]
  };
})

Sitemap.create({destinationPath: "./"}).build({
  type: "sitemap",
  name: "sitemap",
  path: "sitemap.xml",
  loc:  __domain + "sitemap.xml",
  lastmod: new Date().toISOString(),
  urls: urls
}, function(error) {
  // ./tmp/sitemap1.xml created, http://www.sitemaps.org/protocol.html#xmlTagDefinitions
});
