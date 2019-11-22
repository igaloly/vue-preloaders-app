<template>
  <div class="header-content" :class="{main}">
    <div class="title">{{title}}</div>
    <div class="subtitle" v-html="subtitle"></div>
  </div>
</template>

<script>
export default {
  props: {
    main: {
      type: Boolean
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
$ratio: 1.5;

.header-content {
  text-align: center;

  .title {
    font-weight: bold;
  }

  @include breakpoint-desktop {
    margin-bottom: $spacing-4;
    .title {
      font-size: $font-4;
      margin-bottom: $spacing-1;
    }

    &.main {
      .title {
        font-size: $font-4 * $ratio;
      }
      .subtitle {
        font-size: $font-3;
      }
    }
  }
  @include breakpoint-mobile {
    margin-bottom: $spacing-3;
    .title {
      font-size: $font-3;
    }
    &.main {
      .title {
        font-size: $font-3 * $ratio;
        margin-bottom: $spacing-1;
      }
      .subtitle {
        font-size: $font-2;
      }
    }
  }
}
</style>
