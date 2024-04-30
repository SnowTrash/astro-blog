<template>
  <div id="p5-canvas"></div>
</template>

<script>
import { onMounted } from 'vue';
import p5 from 'p5';

export default {
  setup() {
    onMounted(() => {
      new p5((sketch) => {
        sketch.setup = () => {
          sketch.createCanvas(200, 200);
          sketch.background(0);
        };

        sketch.draw = () => {
          sketch.fill(255);
          sketch.ellipse(sketch.width / 2, sketch.height / 2, 50, 50);
        };
      }, document.getElementById('p5-canvas'));
    });
  }
}
</script>
