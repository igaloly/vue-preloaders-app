<template>
  <div class="card" :class="{ 'border-radius': isBorderRadius }">
    <div class="content" :style="{ position, top, left, width, height, transition }" ref="content">
      <button class="loader-wrapper" @click="expandLoader">
        <div class="loader" ref="loader" :class="{ expanded: isLoaderExpanded }"></div>
      </button>
      <div class="toolbar">
        <button class="close" @click="close">
          <Cross />
        </button>
        <button @click="open" class="expand-wrapper">
          <Expand />
        </button>
        <button
          class="code-wrapper"
          @click="$emit('codeModalButtonClick', $refs.codeButton)"
          ref="codeButton"
        >
          <Code />
        </button>
      </div>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
import Code from './icons/Code.vue';
import Expand from './icons/Expand.vue';
import Cross from './icons/Cross.vue';
import consts from '../styles/config/index.scss';

export default {
  name: 'Card',
  components: {
    Cross,
    Expand,
    Code,
  },
  props: {
    loader: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      isOpen: false,
      top: '',
      left: '',
      position: 'relative',
      width: '',
      height: '',
      transition: '',
      isBorderRadius: true,
      transitionDuration: parseInt(consts['transition-duration']),
      isLoaderVisible: false,
      isLoaderExpanded: false,
      loaderSetTimeout: null,
    };
  },
  methods: {
    open() {
      if (this.isOpen) return;

      const rect = this.$el.getBoundingClientRect();

      this.isOpen = true;

      this.top = `${rect.top}px`;
      this.left = `${rect.left}px`;
      this.position = 'fixed';
      setTimeout(() => {
        this.transition = `top ${this.transitionDuration}ms, left ${this.transitionDuration}ms`;
        this.left = `${window.innerWidth / 2 - rect.width / 2}px`;
        this.top = `${window.innerHeight / 2 - rect.height / 2}px`;
        setTimeout(() => {
          this.transition = `width ${this.transitionDuration}ms, height ${this.transitionDuration}ms, top ${this.transitionDuration}ms, left ${this.transitionDuration}ms`;
          this.top = `${0}px`;
          this.left = `${0}px`;
          this.width = '100%';
          this.height = '100%';
          this.isBorderRadius = false;
        }, this.transitionDuration);
      }, 30);
    },
    close() {
      if (!this.isOpen) return;

      const rect = this.$el.getBoundingClientRect();

      this.isOpen = false;

      this.isBorderRadius = true;
      this.top = `${rect.top}px`;
      this.left = `${rect.left}px`;
      this.width = `${rect.width}px`;
      this.height = `${rect.height}px`;
      setTimeout(() => {
        this.position = 'relative';
        this.top = '';
        this.left = '';
        this.width = '';
        this.height = '';
        this.transition = '';
      }, this.transitionDuration);
    },
    expandLoader() {
      if (this.loaderSetTimeout) {
        clearTimeout(this.loaderSetTimeout);
      }
      this.isLoaderExpanded = true;
      this.loaderSetTimeout = setTimeout(() => {
        this.isLoaderExpanded = false;
      }, 4000);
    },
  },
  mounted() {
    this.$preloaders.open({ ...this.loader, container: this.$refs.loader });
  },
};
</script>

<style lang="scss" scoped>
$spacing: $spacing-3;

.card {
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 300px;
  position: relative;
  transition: border-radius $transition;

  &.border-radius {
    border-radius: 15px;
  }
}

.background {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 105%;
  border-radius: inherit;
  background-image: linear-gradient(
    45deg,
    color(delta) 30%,
    color(epsilon) 100%
  );
  top: 9%;
  right: -6%;
  display: block;
  padding: 0 $spacing $spacing $spacing;
}

.content {
  height: inherit;
  width: inherit;
  background-color: white;
  border-radius: inherit;
  transition-timing-function: $transition-timing-function;
  overflow: hidden;
}

.loader-wrapper {
  z-index: 0;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, rgba(color(epsilon), 0.5), white);
  border-radius: inherit;

  &:hover {
    + .toolbar {
      opacity: 1;
      pointer-events: auto;
    }
  }
}
.loader {
  position: absolute;
  $spacing: $spacing-2;
  top: $spacing;
  right: $spacing;
  $ratio: 1.5;
  $width: 100px;
  width: $width;
  height: $width * $ratio;
  border-radius: 5px;
  transition: border-radius $transition, width $transition, height $transition,
    top $transition, right $transition;
  &.expanded {
    border-radius: inherit;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
  }
}

.toolbar {
  z-index: 1;
  transition: opacity $transition;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  opacity: 1;
  pointer-events: none;
  > * {
    padding: $icon-padding;
    > * {
      height: $icon-size;
    }
  }

  &:hover {
    opacity: 1;
    pointer-events: auto;
  }
}

@include breakpoint-desktop {
}
</style>
