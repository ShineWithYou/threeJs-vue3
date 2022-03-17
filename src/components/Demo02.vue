<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { onBeforeRouteLeave } from "vue-router";
// 声明全局变量
let camera, scene, renderer, labelRenderer;
let moon, earth;
let clock = new THREE.Clock();
// 实例化纹理加载器
const textureLoader = new THREE.TextureLoader();

function init() {
  // 地球和月球半径大小
  const EARTH_RADIUS = 4;
  const MOON_RADIUS = 0.4;
  // 实例化初始相机
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    400
  );
  camera.position.set(10, 5, 20);

  // 实例化场景
  scene = new THREE.Scene();
  // 创建聚光顶光源
  const dirLight = new THREE.SpotLight(0xffffff);
  dirLight.position.set(10, 10, 10);
  // 光源强度
  dirLight.intensity = 2.6;
  dirLight.castShadow = true;
  scene.add(dirLight);

  // 添加月球
  const moonGeometry = new THREE.SphereGeometry(MOON_RADIUS, 16, 16);
  // 设置月球材质
  const moonMaterial = new THREE.MeshLambertMaterial({
    map: textureLoader.load("/plants/moon.png")
  });
  moon = new THREE.Mesh(moonGeometry, moonMaterial);
  scene.add(moon);

  // 添加地球
  const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 16, 16);
  const earthMaterial = new THREE.MeshPhongMaterial({
    map: textureLoader.load("/plants/earth.png"),
    shininess: 1
    // specularMap: textureLoader.load("../../public/plants/earth.png"),
  });
  earth = new THREE.Mesh(earthGeometry, earthMaterial);
  scene.add(earth);
  // 创建渲染器
  renderer = new THREE.WebGLRenderer();
  // 像素比
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 渲染阴影
  renderer.shadowMap.enabled = true;
  renderer.setClearAlpha(0);
  document.body.appendChild(renderer.domElement);

  // 绑定控制器、摄像头、场景
  const controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
  const elapsed = clock.getElapsedTime();
  moon.position.set(Math.sin(elapsed) * 5, 0, Math.cos(elapsed) * 5);

  // 地球自转
  let axis = new THREE.Vector3(0, 1, 0);
  earth.rotateOnAxis(axis, Math.PI / 1000);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();
animate();
// onBeforeRouteLeave((to, from, next) => {
//   next()
// })
</script>

<style>
canvas {
  background-image: url("/plants/environment.jpg");
}
</style>
