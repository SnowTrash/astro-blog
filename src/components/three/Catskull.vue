<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos';
import { Raycaster, Vector3 , Mesh , ArrowHelper , Face, Vector2, Camera, CameraHelper, PerspectiveCamera, MeshStandardMaterial, BoxGeometry} from 'three';

const { nodes } = await useGLTF('/models/skull-cat.glb',{draco:true});

const modelo = nodes.Cat;

// console.log(modelo);

// function onClick(ev) {
//   if (ev) {
//     console.log(modelo);
//     console.log(ev);
//     console.log(ev.point);
//     // ev.object.material.color.set('#008080');
//   }
// }

import { useTresContext } from '@tresjs/core';
import { proxyRefs } from 'vue';

// const context = useTresContext()

// console.log(context);

// const { camera, renderer, raycaster, scene } = useTresContext()
const { scene, raycaster, renderer, camera } = useTresContext()

// por fin llegamos a las mesh
console.log({"escena":scene, ":renderer--":renderer,"camera:--":camera.value});

// console.log(scene.value.children[10]);

// console.log(raycaster.intersectObjects());
// const raycaster = new Raycaster()
const pickables: Mesh[] = [];
const mouse = new Vector2();

// const { camera, renderer, camera, cameras } = useTresContext()
// console.log(scene)
const arrow = new ArrowHelper();
arrow.setLength(0.5)
// scene.add(arrowHelper)

renderer.value.domElement.addEventListener('click', (e) => {

  // Convertir las coordenadas del mouse a un formato normalizado para Three.js
  mouse.set((e.clientX / renderer.value.domElement.clientWidth) * 2 - 1, -(e.clientY / renderer.value.domElement.clientHeight) * 2 + 1)

  var metinidez = new PerspectiveCamera()
  const { camera }  = useTresContext()
  console.log("camera",camera)
  // metinidez = camera
  raycaster.value.setFromCamera(mouse, metinidez)

  const intersects = raycaster.value.intersectObjects(pickables, false)
  
  console.log(intersects)
  // if (intersects.length) {
  //   console.log(intersects.length)
  //   console.log(intersects[0].point)
  //   console.log(intersects[0].object.name + ' ' + intersects[0].distance)
  //   console.log((intersects[0].face as Face).normal)

  //   const n = new Vector3();
  //   n.copy((intersects[0].face as Face).normal)
  //   n.transformDirection(intersects[0].object.matrixWorld)

  //   arrow.setDirection(n)
  //   arrow.position.copy(intersects[0].point)
  // }
});

// renderer.value.domElement.addEventListener('dblclick', (e) => {
//   mouse.set((e.clientX / renderer.value.domElement.clientWidth) * 2 - 1, -(e.clientY / renderer.value.domElement.clientHeight) * 2 + 1)

//   raycaster.value.setFromCamera(mouse, camera)

//   const intersects = raycaster.value.intersectObjects(pickables, false)

//   if (intersects.length) {
//     const n = new Vector3()
//     n.copy((intersects[0].face as Face).normal)
//     //n.transformDirection(intersects[0].object.matrixWorld)

//     const cube = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshStandardMaterial())
//     cube.lookAt(n)
//     cube.position.copy(intersects[0].point)
//     cube.position.addScaledVector(n, 0.1)
//     cube.castShadow = true

//     modelo.add(cube)
//     pickables.push(cube)
//   }
// })

</script>

<template>
  <primitive :object="modelo" />
  <primitive :object="arrow" />
</template>

<style>


</style>, BoxGeometry, MeshStandardMaterial