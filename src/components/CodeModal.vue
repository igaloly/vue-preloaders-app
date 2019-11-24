<template>
  <div
    class="code-modal"
    @click="close"
    :style="{ backgroundColor: `rgba(0,0,0, ${backgroundOpacity})`, transition: `background-color ${transitionDuration}ms ease`, pointerEvents, overflow }"
  >
    <div class="modal-container">
      <div class="modal-wrapper" ref="modalWrapper">
        <div class="modal" @click.stop :style="{ transform, transition, opacity }">
          <div class="top">
            <button class="close" @click="close">
              <Cross />
            </button>
          </div>
          <div class="content">
            <div class="credit" v-if="credit">
              Credit:
              <a
                v-if="Array.isArray(credit)"
                v-for="creditItem in credit"
                class="credit-url"
                :href="creditItem.url"
                rel="noopener"
                target="_blank"
              >{{creditItem.text}}</a>
              <a
                class="credit-url"
                :href="credit.url"
                rel="noopener"
                target="_blank"
              >{{credit.text}}</a>
            </div>
            <SourceContent
              class="source"
              v-for="(code, index) in [loaderSource, componentSource].filter(source => source)"
              :key="index"
              :code="code"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SourceContent from "./SourceContent.vue";
import Cross from "./icons/Cross.vue";
import consts from "../styles/config/variables.scss";

const initValues = {
  transition: "",
  opacity: 0,
  transform: "",
  overflow: "hidden"
};

export default {
  name: "CodeModal",
  components: { Cross, SourceContent },
  data() {
    return {
      openerElement: {},
      componentSource: "",
      loaderSource: "",
      credit: "",
      ...initValues,
      backgroundOpacity: 0,
      pointerEvents: "none",
      transitionDuration: parseInt(consts["transition-duration"])
    };
  },
  methods: {
    open({ credit, componentSource, loaderData: loader, openerElement }) {
      if (!openerElement) return;

      this.openerElement = openerElement;
      this.componentSource = componentSource;
      if (loader) {
        this.loaderSource = { ...loader };
        if (this.loaderSource.component)
          this.loaderSource.component = this.loaderSource.component.name;
        this.loaderSource = JSON.stringify(this.loaderSource, null, 2);
      }
      this.credit = credit;

      this.$el.scrollTop = 0;

      this.$nextTick(() => {
        this.goToOpener();
        this.overflow = "auto";
        this.opacity = 1;
        setTimeout(() => {
          this.transition = `transform ${this.transitionDuration}ms`;
          this.backgroundOpacity = 0.5;
          this.transform = "translate(0, 0) scale(1)";
          this.pointerEvents = "auto";
        }, 50);
      });
    },
    close() {
      this.pointerEvents = "none";
      this.goToOpener();
      this.backgroundOpacity = 0;
      setTimeout(() => {
        Object.keys(initValues).forEach(key => (this[key] = initValues[key]));
      }, this.transitionDuration);
    },
    goToOpener() {
      const modalRect = this.$refs.modalWrapper.getBoundingClientRect();
      const openerRect = this.openerElement.getBoundingClientRect();

      const top = `${(modalRect.top +
        modalRect.height / 2 -
        openerRect.top -
        openerRect.height / 2) *
        -1}px`;

      const left = `${(modalRect.left +
        modalRect.width / 2 -
        openerRect.left -
        openerRect.width / 2) *
        -1}px`;
      this.transform = `translate(${left}, ${top}) scale(0)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.code-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  will-change: background-color;
  z-index: 3;
}

.modal-container {
  width: 100%;
  max-width: 800px + ($spacing-container * 2);
  display: flex;
}
.modal-wrapper {
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  padding: $spacing-container;
}
.modal {
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  opacity: 1;
  will-change: transform, opacity;
}

.top {
  display: flex;
  justify-content: flex-end;
}
.close {
  padding: $spacing-2;
}
.cross {
  height: $icon-size;
  width: $icon-size;
}

.content {
  padding: 0 $spacing-container $spacing-container $spacing-container;
}
.credit {
  margin-bottom: $spacing-3;
}
.credit-url {
  text-decoration: underline;
  margin-right: $spacing-1;
}
.source {
  &:not(:last-child) {
    margin-bottom: $spacing-3;
  }
}

@include breakpoint-mobile {
  .credit,
  .source {
    font-size: $font-1;
  }
}
</style>
