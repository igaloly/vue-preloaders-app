<template>
  <div class="card" :style="cardStyle">
    <div class="content-wrapper" ref="contentWrapper">
      <div class="content" :style="content.style" ref="content">
        <button class="loader-button" @click="loaderExpand">
          <span class="loader-container" :style="loader.containerStyle">
            <span class="loader-wrapper">
              <span class="loader" ref="loader" :style="loader.style"></span>
            </span>
          </span>
        </button>
        <div class="toolbar">
          <button class="close" @click="contentContract">
            <Cross />
          </button>
          <button @click="contentExpand" class="expand-wrapper">
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
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
import Code from "./icons/Code.vue";
import Expand from "./icons/Expand.vue";
import Cross from "./icons/Cross.vue";
import consts from "../styles/config/index.scss";

export default {
  name: "Card",
  components: {
    Cross,
    Expand,
    Code
  },
  props: {
    loaderData: {
      type: Object,
      required: false
    },
    componentSource: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cardStyle: {
        borderRadius: ""
      },
      content: {
        isExpanded: false,
        style: {
          top: "",
          left: "",
          position: "relative",
          width: "",
          height: "",
          transition: ""
        }
      },
      loader: {
        isExpanded: false,
        timeoutId: null,
        containerStyle: {},
        style: {
          borderRadius: "5px"
        }
      },
      transitionDuration: parseInt(consts["transition-duration"])
    };
  },
  methods: {
    contentExpand() {
      if (this.content.isExpanded) return;

      const rect = this.$refs.contentWrapper.getBoundingClientRect();

      this.clearLoaderTimeoutId();
      this.content.isExpanded = true;

      this.content.style = Object.assign(this.content.style, {
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        position: "fixed"
      });
      setTimeout(() => {
        this.content.style = Object.assign(this.content.style, {
          transition: `top ${this.transitionDuration}ms, left ${this.transitionDuration}ms`,
          left: `${window.innerWidth / 2 - rect.width / 2}px`,
          top: `${window.innerHeight / 2 - rect.height / 2}px`
        });
        setTimeout(() => {
          this.content.style = Object.assign(this.content.style, {
            transition: `width ${this.transitionDuration}ms, height ${this.transitionDuration}ms, top ${this.transitionDuration}ms, left ${this.transitionDuration}ms`,
            top: `${0}px`,
            left: `${0}px`,
            width: "100%",
            height: "100%"
          });
          this.cardStyle.borderRadius = 0;
          setTimeout(() => {
            this.loader.isExpanded = true;
          }, this.transitionDuration * 1.25);
        }, this.transitionDuration);
      }, 30);
    },
    contentContract() {
      if (!this.content.isExpanded) return;

      const rect = this.$refs.contentWrapper.getBoundingClientRect();

      this.content.isExpanded = false;

      this.cardStyle.borderRadius = "";
      this.content.style = Object.assign(this.content.style, {
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`
      });
      setTimeout(() => {
        this.content.style = Object.assign(this.content.style, {
          position: "relative",
          top: "",
          left: "",
          width: "",
          height: "",
          transition: ""
        });
        setTimeout(() => {
          this.loader.isExpanded = false;
        }, 50);
      }, this.transitionDuration);
    },
    loaderExpand() {
      this.loader.contentStyle = Object.assign(this.loader.contentStyle, {});
    },
    expandLoader() {
      if (this.contet.isExpanded) return;
      this.clearLoaderTimeoutId();
      this.isLoaderExpanded = true;
      this.loaderSetTimeout = setTimeout(() => {
        this.isLoaderExpanded = false;
      }, 4000);
    },
    clearLoaderTimeoutId() {
      if (this.loader.timeoutId) {
        clearTimeout(this.loader.timeoutId);
      }
    }
  },
  mounted() {
    this.$preloaders.open({ ...this.loaderData, container: this.$refs.loader });
  }
};
</script>

<style lang="scss" scoped>
$spacing: $spacing-3;
$top: 12%;
$left: 7%;
$height: calc(100% - #{$top});
$width: calc(100% - #{$left});

.card {
  width: 100%;
  border-radius: 15px;
  transition: border-radius $transition;
}

.background {
  position: absolute;
  z-index: -1;
  width: $width;
  height: $height;
  border-radius: inherit;
  background-image: linear-gradient(
    45deg,
    color(delta) 30%,
    color(epsilon) 100%
  );
  top: $top;
  left: $left;
  display: block;
}

.content-wrapper {
  height: $height;
  width: $width;
  display: flex;
  border-radius: inherit;
}
.content {
  flex-grow: 1;
  background-color: white;
  border-radius: inherit;
  transition-timing-function: $transition-timing-function;
  overflow: hidden;
}

.loader-button {
  z-index: 0;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, rgba(color(epsilon), 0.5), white);
  border-radius: inherit;
}
.loader-container {
  $spacing: $spacing-2;
  position: absolute;
  top: $spacing;
  right: $spacing;
  width: 35%;
  max-width: 100px;
}
.loader-wrapper,
.loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.loader {
  padding-top: 150%;
  border-radius: 5px;
}

.toolbar {
  z-index: 1;
  transition: opacity $transition;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
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
