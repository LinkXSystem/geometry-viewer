function setCenter(mesh) {
  const { geometry } = mesh;
  if (geometry && geometry.center) {
    geometry.center();
  }
}

function compute() {
  const { geometry } = mesh;
  if (geometry && geometry.center) {
    geometry.computeBoundingBox();
    return geometry.boundingBox;
  }
}

export default {
  setCenter,
  compute
}
