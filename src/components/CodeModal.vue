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
            <SourceContent
              class="source"
              v-for="(code, index) in [loaderSource, componentSource]"
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
import SourceContent from './SourceContent.vue';
import Cross from './icons/Cross.vue';
import consts from '../styles/config/variables.scss';

const initValues = {
  transition: '',
  opacity: 0,
  transform: '',
  overflow: 'hidden',
};

export default {
  name: 'CodeModal',
  components: { Cross, SourceContent },
  data() {
    return {
      openerElement: {},
      componentSource: '',
      loaderSource: '',
      ...initValues,
      backgroundOpacity: 0,
      pointerEvents: 'none',
      transitionDuration: parseInt(consts['transition-duration']),
    };
  },
  methods: {
    open({ componentSource, loaderData: loader, openerElement }) {
      if (!openerElement) return;

      this.openerElement = openerElement;
      this.componentSource = componentSource;
      this.loaderSource = { ...loader };
      if (this.loaderSource.component) this.loaderSource.component = this.loaderSource.component.name;
      this.loaderSource = JSON.stringify(this.loaderSource, null, 2);
      this.$el.scroll(0, 0);

      this.$nextTick(() => {
        this.goToOpener();
        this.overflow = 'auto';
        this.opacity = 1;
        setTimeout(() => {
          this.transition = `transform ${this.transitionDuration}ms`;
          this.backgroundOpacity = 0.5;
          this.transform = 'translate(0, 0) scale(1)';
          this.pointerEvents = 'auto';
        }, 50);
      });
    },
    close() {
      this.pointerEvents = 'none';
      this.goToOpener();
      this.backgroundOpacity = 0;
      setTimeout(() => {
        Object.keys(initValues).forEach(key => (this[key] = initValues[key]));
      }, this.transitionDuration);
    },
    goToOpener() {
      const modalRect = this.$refs.modalWrapper.getBoundingClientRect();
      const openerRect = this.openerElement.getBoundingClientRect();

      const top = `${(modalRect.top
        + modalRect.height / 2
        - openerRect.top
        - openerRect.height / 2)
        * -1}px`;

      const left = `${(modalRect.left
        + modalRect.width / 2
        - openerRect.left
        - openerRect.width / 2)
        * -1}px`;
      this.transform = `translate(${left}, ${top}) scale(0)`;
    },
  },
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
  z-index: 2;
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
}

.content {
  padding: 0 $spacing-container $spacing-container $spacing-container;
}
.source {
  &:not(:last-child) {
    margin-bottom: $spacing-3;
  }
}
</style>