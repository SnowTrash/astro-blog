<script setup lang="ts">

import { TresCanvas } from '@tresjs/core';

import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

import { OrbitControls , Stars } from '@tresjs/cientos';

// importar cat
import CatSkull from './Catskull.vue';

const gl = {
  clearColor: '#181C3E',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

</script>

<template>
  <div class="tres-container">
    <TresCanvas v-bind="gl">

    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :fov="45"
      :look-at="[0, 0, 0]"
    />

      <TresMesh>
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
        <TresMeshBasicMaterial color="orange" />
      </TresMesh>
      <Stars />
      <TresAmbientLight :intensity="1" :color="0xffffff"/>
      <TresDirectionalLight  :color="0xffffff" :intensity="1.4" :position="[0,0,5]" />

    <OrbitControls />
    <!-- modelo custom -->
      <Suspense>
        <CatSkull />
      </Suspense>
    </TresCanvas>
    Hola vue
  </div>
</template>

<style>

.tres-container{
  width: 100%;
  height: 400px;
}

.canvas{
  width: 100%;
  height: 100%;

}

</style>