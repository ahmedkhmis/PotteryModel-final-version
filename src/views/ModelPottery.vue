<template>
  <div class="Model-pott p-5" style="height=100%">
   <center><h1 class="p-5">Create your Model</h1></center> 

    <div class="container">
      <center><canvas id="canvas"> </canvas></center>
      <div class="tools">
        <button @click="screenShoot()" type="button" class="button">
          download
        </button>
        <button @click="undo_draw()" type="button" class="button">Back</button>
        <button @click="clear_draw()" type="button" class="button">
          Clear
        </button>

        <button
          type="button"
          id="red"
          v-on:click="select($event)"
          class="color-field"
          style="background: red"
        />
        <button
          type="button"
          id="blue"
          v-on:click="select($event)"
          class="color-field"
          style="background: blue"
        />
        <button
          type="button"
          id="green"
          v-on:click="select($event)"
          class="color-field"
          style="background: green"
        />
        <button
          type="button"
          id="blck"
          v-on:click="select($event)"
          class="color-field"
          style="background: black"
        />

        <input v-model="draw_color" type="color" class="color-picker" />
        <input
          v-model="draw_width"
          type="range"
          min="1"
          max="100"
          class="pen-range"
        />
      </div>
      <div class="d-flex justify-content-end">
        <a type="button"   @click="screenShoot()" class="btn btn-primary" href="/about">
          Next
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModelPottery",
  data() {
    return {
      canvas: null,
      context: null,
      start_backgr_color: "white",
      draw_color: "black",
      draw_width: "8",
      is_drawing: false,
      restor_array: [],
      index: -1,
      coleur: null,
    };
  },
  methods: {
    select: function (event) {
      var targetId = event.currentTarget.id;
      this.draw_color = document.getElementById(targetId).style.background;
      console.log(document.getElementById(targetId).style.background); // returns 'foo'
    },

    start(e) {
      this.is_drawing = true;
      this.context.beginPath();
      this.context.moveTo(
        e.clientX - this.canvas.offsetLeft,
        e.clientY - this.canvas.offsetTop
      );
      e.preventDefault();
    },

    draw(e) {
      if (this.is_drawing) {
        this.context.lineTo(
          e.clientX - this.canvas.offsetLeft,
          e.clientY - this.canvas.offsetTop
        );
        this.context.strokeStyle = this.draw_color;
        this.context.lineWidth = this.draw_width;
        this.context.lineCap = "round";
        this.context.lineJoin = "round";
        this.context.stroke();
      }
      e.preventDefault();
    },
    stop(e) {
      if (this.is_drawing) {
        this.context.stroke();
        this.context.closePath();
        this.is_drawing = false;
      }
      e.preventDefault();
      if (e.type != "mouseout") {
        this.restor_array.push(
          this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
        );
        this.index += 1;
        console.log(this.restor_array);
      }
    },
    draw_grille() {
      this.context.lineWidth = "1";
      var w = window.innerWidth - 105;

      for (var i = 5; i <= w; i = i + 6) {
        this.context.beginPath();
        this.context.moveTo(i, 5);
        this.context.lineTo(i, w);

        this.context.moveTo(5, i);
        this.context.lineTo(w, i);

        this.context.strokeStyle = "#f0f0f0";
        this.context.stroke();
      }
      for (i = 5; i <= w; i = i + 30) {
        this.context.beginPath();
        this.context.moveTo(i, 5);
        this.context.lineTo(i, w);

        this.context.moveTo(5, i);
        this.context.lineTo(w, i);

        this.context.strokeStyle = "#c0c0c0";
        this.context.stroke();
      }
    },
    clear_draw() {
      this.context.fillStyle = this.start_backgr_color;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw_grille();
      this.restor_array = [];
      this.index = -1;
    },

    undo_draw() {
      if (this.index <= 0) {
        this.clear_draw();
      } else {
        this.index -= 1;
        this.restor_array.pop();
        this.context.putImageData(this.restor_array[this.index], 0, 0);
      }
    },

    screenShoot() {
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(this.canvas.msToBlob(), "model.png");
      } else {
        const a = document.createElement("a");

        document.body.appendChild(a);
        a.href = this.canvas.toDataURL();
        a.download = "model.png";
        a.click();
        document.body.removeChild(a);
        //alert(  this.canvas.toDataURL())
      }
    },
 
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = this.start_backgr_color;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = window.innerWidth - 600;
    this.canvas.height = 400;
    this.draw_grille();

    this.canvas.addEventListener("touchstart", this.start, false);
    this.canvas.addEventListener("touchmove", this.draw, false);

    this.canvas.addEventListener("mousedown", this.start, false);
    this.canvas.addEventListener("mousemove", this.draw, false);

    this.canvas.addEventListener("touchend", this.stop, false);
    this.canvas.addEventListener("mouseup", this.stop, false);
    this.canvas.addEventListener("mouseout", this.stop, false);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Mukta");

:root {
}
.Model-pott {
  background-image: url(../assets/jj.jpg);
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: 100% 100%;
   margin:0;
    padding:0;
}
body {
  background-image: url(../assets/jj.jpg);
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
  margin: 0px;
  padding: 30px;
  font-family: "Mukta";
}

canvas {
  background-color: white;
  box-shadow: -3px 2px 9px 6px black;
  cursor: pointer;
}

.tools {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 15px;
}

.tools .color-field {
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  cursor: pointer;
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid white;
  align-self: center;
  margin: 0 10px;
}

.tools .button {
  height: 40px;
  width: 100px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: black;
  border: 2px solid white;
  align-self: center;
  margin: 0 10px;
}

.color-picker {
  align-self: center;
  margin: 0 10px;
  height: 50px;
}

.pen-range {
  align-self: center;
  margin: 0 10px;
}
</style>
