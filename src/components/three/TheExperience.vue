  <script setup lang="ts">

  import { TresCanvas } from '@tresjs/core';

  import { BasicShadowMap, SRGBColorSpace, NoToneMapping  } from 'three'

  import { OrbitControls , Stars } from '@tresjs/cientos';

  // importar cat
  // import CatSkull from './Catskull.vue';
  import { onMounted, defineAsyncComponent } from 'vue';
  const CatSkull = defineAsyncComponent(() => import('./Catskull.vue'));
  
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
      TheExperience.vue - Element
      <TresCanvas v-bind="gl">

      <TresPerspectiveCamera
        :position="[190, 0, 50]"
        :fov="45"
        :look-at="[0, 0, 0]"
      />

        <TresMesh >
          <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
          <TresMeshBasicMaterial color="orange" />
        </TresMesh>
        <!-- <Stars /> -->
        <TresAmbientLight :intensity="1.4" :color="0xffff99"/>
        <TresDirectionalLight :color="0x6666ff" :intensity="1.8" :position="[0,0,5]" />

      <OrbitControls />
      <!-- modelo custom -->
        <Suspense>
          <template #default>
            <CatSkull />
          </template>
          <template #fallback>
            <div>Loading model...</div>
          </template>
        </Suspense>
        
      </TresCanvas>
      TheExperience.vue - Element
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

  </style>import { de } from 'date-fns/locale';
