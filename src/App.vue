<template>
  <div id="app">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
      @codeModalButtonClick="$refs.codeModal.open({ ...card, openerElement: $event })"
      ref="cards"
    />
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
.card {
  max-width: 250px;
}
</style>
