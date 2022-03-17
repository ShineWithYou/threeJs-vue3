<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function init() {
  /* 
  创建网格模型 
*/
  const scene = new THREE.Scene(); // 创建一个对象 scene

  const geometry1 = new THREE.BoxGeometry(60, 60, 60); // 创建一个立方体几何对象

  // const geometry = new THREE.SphereGeometry(30, 64, 32);

  const material1 = new THREE.MeshLambertMaterial({
    color: 0xfffaf,
  }); // 创建一个材质对象

  const mesh1 = new THREE.Mesh(geometry1, material1); // 创建一个网格模型对象
  scene.add(mesh1);

  const geometry2 = new THREE.CylinderGeometry(40, 40, 60, 25); // 创建一个立方体几何对象

  // const geometry = new THREE.SphereGeometry(30, 64, 32);

  const material2 = new THREE.MeshLambertMaterial({
    color: 0xfff00,
  }); // 创建一个材质对象

  const mesh2 = new THREE.Mesh(geometry2, material2); // 创建一个网格模型对象
  mesh2.translateX(80);
  scene.add(mesh2);

  const geometry3 = new THREE.SphereGeometry(40, 40, 40); // 创建一个球体对象

  // const geometry = new THREE.SphereGeometry(30, 64, 32);

  const material3 = new THREE.MeshBasicMaterial({
    color: 0xf00af,
    wireframe: true
  }); // 创建一个材质对象

  const mesh3 = new THREE.Mesh(geometry3, material3); // 创建一个网格模型对象
  mesh3.translateY(80);
  scene.add(mesh3);
  /* 
  光源设置
*/
  const light = new THREE.PointLight(0xffffff); // 点光源
  light.position.set(400, 200, 200); // 点光源位置
  scene.add(light);

  const spotLight = new THREE.SpotLight({
    color: 0x2ed44b,
    distance: 100,
    intensity: 1,
    decay: 1,
  });
  scene.add(spotLight);
  const ambient = new THREE.AmbientLight(0x444444); // 环境光
  scene.add(ambient);

  /* 
  相机设置
*/
  const width = window.innerWidth; // 窗口宽度
  const height = window.innerHeight; // 窗口高度
  const k = width / height; // 宽高比
  const s = 150; // 三维场景显示范围控制系数，系数越大，显示的范围越大
  const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000); // 创建相机对象
  camera.position.set(200, 300, 200); // 设置相机位置
  camera.lookAt(scene.position); // 设置相机方向（指向的场景对象）

  /* 
  创建渲染器对象
*/
  const renderer = new THREE.WebGL1Renderer();
  renderer.setSize(width, height); // 渲染尺寸
  renderer.setClearColor(0xffffff, 1); // 设置背景颜色
  window.document.body.replaceChildren();
  document.body.appendChild(renderer.domElement); // body元素中插入canvas对象
  renderer.render(scene, camera); //执行渲染操作
}
init();
</script>

<style>
canvas {
  background-image: none;
}
</style>
