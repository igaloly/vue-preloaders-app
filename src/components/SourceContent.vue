<template>
  <div class="source">
    <div class="copy-wrapper">
      <div class="copied" :class="{ visible: isCopied }">Copied!</div>
      <button class="button" @click="copyCode">
        <Copy class="copy" />
      </button>
    </div>
    <pre class="code">{{code}}</pre>
  </div>
</template>

<script>
import Copy from './icons/Copy.vue';

export default {
  name: 'SourceContent',
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  components: { Copy },
  data() {
    return {
      isCopied: false,
    };
  },
  methods: {
    copyCode() {
      navigator.clipboard.writeText(this.code).then(() => {
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 1000);
      });
    },
  },
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
}
.copy-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
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
  }
}
@include breakpoint-mobile {
  .button {
    padding: $spacing-2;
  }
  .copy {
    height: $icon-size * 1.25;
  }
}
</style>
