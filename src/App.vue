<template>
  <div id="app">
    <div class="card-container" v-for="(card, index) in cards" :key="index">
      <div class="card-wrapper">
        <Card
          v-bind="card"
          @codeModalButtonClick="$refs.codeModal.open({ ...card, openerElement: $event })"
          ref="cards"
        />
      </div>
    </div>
    <CodeModal ref="codeModal" />
  </div>
</template>

<script>
import colors from "./styles/config/variables.scss";
import CodeModal from "./components/CodeModal.vue";
import Card from "./components/Card.vue";
import Squares from "./components/preloaders/Squares.vue";
import SquaresContent from "!!raw-loader!./components/preloaders/Squares.vue";

export default {
  name: "app",
  components: { Card, CodeModal },
  computed: {
    cards() {
      return [
        {
          id: 1,
          loaderData: {
            component: Squares,
            overlayStyle: {
              backgroundColor: colors["color-alpha"]
            }
          },
          componentSource: SquaresContent
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  width: 100%;
  max-width: 350px;
}
.card-wrapper,
.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.card-wrapper {
  padding-top: 100%;
}
.card {
  height: 100%;
}
// @include breakpoint-desktop {
//   .card {
//     $size: 350px;
//     width: $size;
//     height: $size;
//   }
// }
// @include breakpoint-mobile {
//   .card {
//     $size: 250px;
//     width: $size;
//     height: $size;
//   }
// }
</style>
