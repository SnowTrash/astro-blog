<template>
  <div id="p5-container"></div>
</template>

<script>
import { onMounted } from 'vue';
import p5 from 'p5';

export default {
  setup() {
    onMounted(() => {
      let sketch = function(p) {
        let scale = 20;
        let inc = 0.1;
        let cols, rows;
        let fr;
        let zOff = 0;
        let flowField = [];
        let particles = [];

        p.setup = function() {
          p.createCanvas(1000, 1000);
          p.pixelDensity(2);
          cols = ~~(p.width / scale);
          rows = ~~(p.height / scale);
          fr = p.createP(''); // We need a better way to handle this in Vue

          for (let i = 0; i < 5000; i++) {
            particles[i] = new Particle(p);
          }
          p.background(255);
        };

        p.draw = function() {
          let yOff = 0;
          for (let y = 0; y < rows; y++) {
            let xOff = 0;
            for (let x = 0; x < cols; x++) {
              let index = x + y * cols;
              let angle = p.noise(xOff, yOff, zOff) * p.TWO_PI * 4;
              let v = p5.Vector.fromAngle(angle);
              v.setMag(0.1);
              flowField[index] = v;
              xOff += inc;
            }
            yOff += inc;
          }
          particles.forEach(particle => {
            particle.follow(flowField);
            particle.update();
            particle.edges();
            particle.show();
          });

          fr.html(`FPS: ${p.floor(p.frameRate())}`);
        };

        function Particle(p) {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.maxSpeed = 4;
          this.prevPos = this.pos.copy();

          this.update = function() {
            this.vel.add(this.acc);
            this.vel.limit(this.maxSpeed);
            this.pos.add(this.vel);
            this.acc.mult(0);
          };

          this.follow = function(vectors) {
            let x = p.floor(this.pos.x / scale);
            let y = p.floor(this.pos.y / scale);
            let index = x + y * cols;
            let force = vectors[index];
            this.applyForce(force);
          };

          this.applyForce = function(force) {
            this.acc.add(force);
          };

          this.show = function() {
            p.stroke(0, 10);
            p.strokeWeight(1);
            p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
            this.updatePrev();
          };

          this.updatePrev = function() {
            this.prevPos.x = this.pos.x;
            this.prevPos.y = this.pos.y;
          };

          this.edges = function() {
            if (this.pos.x > p.width) {
              this.pos.x = 0;
              this.updatePrev();
            }
            if (this.pos.x < 0) {
              this.pos.x = p.width;
              this.updatePrev();
            }
            if (this.pos.y > p.height) {
              this.pos.y = 0;
              this.updatePrev();
            }
            if (this.pos.y < 0) {
              this.pos.y = p.height;
              this.updatePrev();
            }
          };
        }
      };

      new p5(sketch, document.getElementById('p5-container'));
    });
  }
}
</script>

<style scoped>
#p5-container {
  width: 100%;
  height: 1000px; /* Adjust according to the size of the canvas */
}
</style>
