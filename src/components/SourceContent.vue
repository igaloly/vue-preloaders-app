<template>
  <div class="source">
    <div class="copy-wrapper">
      <div class="copied" :class="{ visible: isCopied }">Copied!</div>
      <button class="button" @click="copyCode">
        <Copy class="copy" />
      </button>
    </div>
    <div class="code">{{code}}</div>
  </div>
</template>

<script>
import Copy from "./icons/Copy.vue";

export default {
  name: "SourceContent",
  props: {
    code: {
      type: String,
      required: true
    }
  },
  components: { Copy },
  data() {
    return {
      isCopied: false
    };
  },
  methods: {
    toggleCopyLabel() {
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 1000);
    },
    copyCode() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.code).then(this.toggleCopyLabel);
      } else {
        window.clipboardData.setData("Text", this.code);
        this.toggleCopyLabel();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.source {
  position: relative;
  display: block;
  background-color: #eee;
  border-radius: 5px;
  font-size: $font-2;
  padding: $spacing-3;
  pointer-events: none;
}
.copy-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
}
.button {
  pointer-events: all;
}

.code {
  word-break: break-word;
  white-space: pre-wrap;
  font-family: courier, monospace;
}
.copied {
  color: white;
  padding: $spacing-1;
  background-color: color(beta);
  border-radius: 10px;
  transition: opacity $transition, transform $transition;
  display: flex;
  align-items: center;

  &:not(.visible) {
    transform: translateX(10%);
    opacity: 0;
  }
}

@include breakpoint-desktop {
  .button {
    padding: $spacing-3;
  }
  .copy {
    height: $icon-size * 2;
    width: $icon-size * 2;
  }
}
@include breakpoint-mobile {
  .button {
    padding: $spacing-2;
  }
  .copy {
    height: $icon-size * 1.25;
    width: $icon-size * 1.25;
  }
}
</style>
