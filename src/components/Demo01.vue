<template>
  <div></div>
</template>

<script setup>
import * as THREE from "three";
/* 
  创建网格模型 
*/
const scene = new THREE.Scene(); // 创建一个对象 scene

const geometry = new THREE.BoxGeometry(60, 100, 100) // 创建一个立方体几何对象

// const geometry = new THREE.SphereGeometry(30, 64, 32);

const material = new THREE.MeshBasicMaterial({
  color: 0xfffaf,
}); // 创建一个材质对象

const mesh = new THREE.Mesh(geometry, material); // 创建一个网格模型对象
scene.add(mesh);

/* 
  光源设置
*/
// const light = new THREE.PointLight(0xffffff) // 点光源
// light.position.set(0, 0, 200) // 点光源位置
// scene.add(light)

// const spotLight = new THREE.SpotLight({
//   color: 0x2ed44b,
//   distance: 100,
//   intensity: 1,
//   decay: 1
// })
// scene.add(spotLight)
// const ambient = new THREE.AmbientLight(0x444444) // 环境光
// scene.add(ambient)

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

function render() {
  renderer.render(scene, camera); //执行渲染操作
  mesh.rotateX(0.04);
  mesh.rotateY(0.05); //每次绕y轴旋转0.01弧度
  requestAnimationFrame(render); //请求再次执行渲染函数render
}
render();
//执行渲染操作   指定场景、相机作为参数
// renderer.render(scene, camera)
</script>

<style></style>
