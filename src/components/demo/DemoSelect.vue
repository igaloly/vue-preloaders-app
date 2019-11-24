<!--
    Check the select wrapper class and SelectValue watch. Yes. it's that simple.
-->

<template>
  <div class="demo-select">
    <!-- You can catch the element by any selector you want. In this case - Class -->
    <div class="select-wrapper">
      <select class="select" v-model="selectValue">
        <option value="option 0" disabled>--- SELECT AN OPTION</option>
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
        <option value="option 3">Option 3</option>
        <option value="option 4">Option 4</option>
        <option value="option 5">Option 5</option>
      </select>
    </div>
    <button
      ref="codeButton"
      @click="$emit('codeButtonClick', {componentSource: require('!!raw-loader!./DemoSelect.vue').default, credit: { text: 'cwervo', url: 'https://giphy.com/gifs/animation-loading-3ov9k0BZQL358k458s' }, openerElement: $refs.codeButton})"
    >
      <Code class="code-icon" />
    </button>
  </div>
</template>

<script>
import Code from "../icons/Code.vue";
import Squares from "../preloaders/Squares";
export default {
  name: "DemoSelect",
  components: { Code },
  data() {
    return {
      selectValue: "option 0"
    };
  },
  watch: {
    selectValue() {
      // just open
      const close = this.$preloaders.open({
        container: ".select-wrapper",
        assetSrc: "https://i.giphy.com/media/3ov9k0BZQL358k458s/giphy.webp",
        assetStyle: {
          width: "100px"
        },
        overlayStyle: {
          backgroundColor: "#4bc5b3",
          opacity: 1
        }
      });

      // and close. That's it.
      setTimeout(close, 1500);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-select {
  display: flex;
  justify-content: center;
}
.select-wrapper {
  width: 100%;
  max-width: 300px;
  margin-right: $spacing-2;
}
.select {
  width: 100%;
}

.code-icon {
  width: $icon-size;
  height: $icon-size;
}
</style>