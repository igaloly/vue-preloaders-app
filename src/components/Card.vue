<template>
  <div class="card" :style="cardStyle">
    <div class="card-inner">
      <div class="card-inner-2">
        <div class="content-wrapper" ref="contentWrapper">
          <div class="content" :style="content.style" ref="content">
            <div class="loader" ref="loader">
              <button
                class="loader-button"
                @click="loaderExpand"
                :style="loader.style"
                ref="loaderButton"
              >
                <span class="loader-holder" ref="loaderHolder"></span>
              </button>
              <div class="loader-space-saver" ref="loaderSpaceSaver"></div>
            </div>
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
    </div>
  </div>
</template>

<script>
import Code from "./icons/Code.vue";
import Expand from "./icons/Expand.vue";
import Cross from "./icons/Cross.vue";
import consts from "../styles/config/index.scss";

const loaderStyle = {
  position: "",
  top: "",
  right: "",
  width: "",
  height: "",
  borderRadius: "",
  paddingTop: "",
  transition: ""
};

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
          position: "",
          width: "",
          height: "",
          transition: ""
        }
      },
      loader: {
        isExpanded: false,
        timeoutId: null,
        style: { ...loaderStyle }
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
            this.loaderExpand();
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
          this.loaderContract();
        }, 50);
      }, this.transitionDuration);
    },
    loaderExpand() {
      this.clearLoaderTimeoutId();
      if (this.loader.isExpanded) return;

      this.loaderSetBasePosition();
      this.loader.isExpanded = true;

      setTimeout(() => {
        this.loader.style = Object.assign(this.loader.style, {
          transition: `top ${this.transitionDuration}ms, right ${this.transitionDuration}ms, width ${this.transitionDuration}ms, height ${this.transitionDuration}ms, border-radius ${this.transitionDuration}ms`,
          top: `0`,
          right: `0`,
          width: `100%`,
          height: `100%`,
          borderRadius: "0"
        });
        setTimeout(() => {
          this.loader.timeoutId = setTimeout(() => {
            this.loaderContract();
          }, 4000);
        }, this.transitionDuration);
      }, 50);
    },
    loaderContract() {
      if (this.content.isExpanded) return;

      this.loader.isExpanded = false;

      this.loaderSetBasePosition();

      setTimeout(() => {
        this.loader.style = Object.assign(this.loader.style, loaderStyle);
      }, this.transitionDuration);
    },
    loaderSetBasePosition() {
      const contentRect = this.$refs.content.getBoundingClientRect();
      const loaderRect = this.$refs.loader.getBoundingClientRect();
      const loaderSpaceSaverRect = this.$refs.loaderSpaceSaver.getBoundingClientRect();

      this.loader.style = Object.assign(this.loader.style, {
        position: "absolute",
        top: `${loaderRect.top - contentRect.top}px`,
        right: `${contentRect.right - loaderRect.right}px`,
        width: `${loaderSpaceSaverRect.width}px`,
        height: `${loaderSpaceSaverRect.height}px`,
        paddingTop: 0
      });
    },
    clearLoaderTimeoutId() {
      if (this.loader.timeoutId) {
        clearTimeout(this.loader.timeoutId);
      }
    }
  },
  mounted() {
    this.$preloaders.open({
      ...this.loaderData,
      container: this.$refs.loaderHolder
    });
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
.card-inner {
  position: relative;
  padding-top: 100%;
  border-radius: inherit;
}
.card-inner-2 {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: inherit;
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
  position: relative;
  flex-grow: 1;
  background-color: white;
  border-radius: inherit;
  transition-timing-function: $transition-timing-function;
  overflow: hidden;
  background-image: linear-gradient(to top, rgba(color(epsilon), 0.5), white);
  display: flex;
  align-items: flex-start;
}

.loader {
  $spacing: $spacing-2;
  margin-top: $spacing;
  margin-right: $spacing;
  margin-left: auto;
  width: 30%;
  max-width: 100px;
}
.loader-space-saver,
.loader-button {
  width: 100%;
  padding-top: 150%;
  position: relative;
  border-radius: 5px;
}
.loader-holder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.toolbar {
  z-index: 2;
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
