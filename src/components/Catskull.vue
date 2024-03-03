<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos';

const { nodes } = await useGLTF('/models/skull-cat.glb',{draco:true});

const modelo = nodes.Cat;

</script>

<template>
  <primitive :object="modelo" />
</template>

<style>


</style>