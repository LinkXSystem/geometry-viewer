import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Common from './utils/common';

import './stylesheets/reset.css';

import Orbit from './controls/orbit';
import App from './runtime/app';
import STLLoader from './loaders/stl-loader';

window.THREE = THREE;

const app = new App();

let camera, scene, renderer, controls;

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 15);
  camera.position.z = 10;

  camera.lookAt(new THREE.Vector3(0, 0, 0));

  if (app.isCameraHelper) {
    scene.add(new THREE.CameraHelper(camera));
  }

  if (app.isAxesHelper) {
    scene.add(new THREE.AxesHelper(5));
  }

  // scene.add(new THREE.AmbientLight(0xffffff));
  scene.add(new THREE.AmbientLight(0x303030));
  // scene.add(new THREE.HemisphereLight(0x443333, 0x111122));

  STLLoader.getGeometry('assets/model/otto/head.stl').then((geometry) => {
    // TODO: 如果素材有颜色的话
    if (geometry.hasColors) { };

    const material = new THREE.MeshPhongMaterial({ color: 0xff5533, specular: 0x111111, shininess: 200 });
    const model = new THREE.Mesh(geometry, material);

    model.position.set(0, 0, 0);
    model.rotation.set(Math.PI / 2, 0, 0);
    model.scale.set(0.05, 0.05, 0.05);

    scene.add(model);

    window.model = model;
    window.camera = camera;

    Common.setCenter(model);
  });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = Orbit.getControl(camera, renderer);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
