<template>
  <div class="container">
    <div class="squares">
      <div class="square" v-for="i in 4" :key="i"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Squares',
};
</script>

<style lang="scss" scoped>
$squares-size: 40px;
$square-size: $squares-size / 2;
$animation: 1s linear infinite;

.container {
  text-align: center;
}

.squares {
  position: relative;
  display: inline-block;
  width: $squares-size;
  height: $squares-size;
  overflow: hidden;
  transform-origin: bottom left;
  animation: squares $animation;
}

.square {
  position: absolute;
  width: $square-size;
  height: 20px;
  background-color: white;
  left: 0px;
  top: 0px;

  &:first-child {
    top: $square-size;
  }
  &:nth-child(2) {
    left: $square-size;
    top: $square-size;
    animation: square2 $animation;
  }
  &:nth-child(3) {
    animation: square3 $animation;
  }
  &:last-child {
    left: $square-size;
    animation: square4 $animation;
  }
}

@keyframes squares {
  from {
    transform: scale(1);
  }
  90% {
    transform: scale(1);
  }
  to {
    transform: scale(0.5);
  }
}
@keyframes square2 {
  from {
    transform: translateY(-50px);
  }
  25% {
    transform: translate(0);
  }
  to {
    transform: translate(0);
  }
}
@keyframes square3 {
  from {
    transform: translateY(-50px);
  }
  50% {
    transform: translate(0);
  }
  to {
    transform: translate(0);
  }
}
@keyframes square4 {
  from {
    transform: translateY(-50px);
  }
  75% {
    transform: translate(0);
  }
  to {
    transform: translate(0);
  }
}
</style>
