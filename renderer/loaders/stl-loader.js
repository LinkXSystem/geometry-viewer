/**
 * @author zhi
 * @descriptionhttps://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_stl.html
 */
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';


function getGeometry(link) {
  return new Promise((resolve, reject) => {
    const loader = new STLLoader();
    loader.load(link, function (geometry) {
      geometry.computeBoundingBox();

      const x = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
      const y = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
      const z = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

      const metadata = {
        triangles: geometry.attributes.position.length / 9,
        unit: 'mm',
        size: [x, y, z],
      };

      resolve(geometry, metadata);
    });
  });
}

export default {
  getGeometry
}
