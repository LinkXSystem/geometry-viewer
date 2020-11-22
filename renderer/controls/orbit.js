import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function getControl(camera, renderer) {
  const controller = new OrbitControls(camera, renderer.domElement);
  controller.enableDamping = true;
  controller.dampingFactor = 0.05;

  controller.enableZoom = false;
  controller.enablePan = false;

  controller.screenSpacePanning = false;

  return controller;
}

export default {
  getControl
}
