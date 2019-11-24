<!-- 
  Check The template ( form tag ) and Methods object. You'll have all the information you need there.
-->

<template>
  <div class="demo-form">
    <!-- set REF to the form to catch it in the code ( can also catch by class or any other selector. Ref is more native for Vue )  -->
    <form class="form" @submit.prevent="submit" ref="form">
      <div>
        <input type="text" v-model="userData.firstName" placeholder="First Name" />
      </div>
      <div>
        <input type="text" v-model="userData.lastName" placeholder="Last Name" />
      </div>
      <div>
        <input type="tel" v-model="userData.phone" placeholder="Phone Number" />
      </div>
      <div>
        <button class="submit" type="submit">Send</button>
        <button
          type="button"
          ref="codeButton"
          @click="$emit('codeButtonClick', {componentSource: require('!!raw-loader!./DemoForm.vue').default, credit, openerElement: $refs.codeButton})"
        >
          <Code class="code-icon" />
        </button>
      </div>

      <img class="preload" src="https://i.giphy.com/media/iE3aMP0PRaeHOJAA5r/giphy.webp" />
      <img class="preload" src="https://i.giphy.com/media/3o6vXURvyF7bmW1HGg/giphy.webp" />
    </form>
  </div>
</template>

<script>
import Code from "../icons/Code.vue";
const userData = {
  firstName: "",
  lastName: "",
  phone: ""
};

export default {
  name: "DemoForm",
  components: { Code },
  data() {
    return {
      userData: { ...userData },
      credit: [
        {
          text: "via GIPHY, A is for Ai",
          url: "https://giphy.com/gifs/ai-mail-aisforai-iE3aMP0PRaeHOJAA5r"
        },
        {
          text: "via GIPHY, TaylorAnneDraws",
          url: "https://giphy.com/gifs/funny-art-cute-3o6vXURvyF7bmW1HGg"
        }
      ]
    };
  },
  methods: {
    submit() {
      const container = this.$refs.form;

      // simple use case. just open it.
      let close = this.$preloaders.open({
        // custom it however you want
        container,
        assetSrc: "https://i.giphy.com/media/iE3aMP0PRaeHOJAA5r/giphy.webp",
        assetStyle: {
          maxWidth: "100px"
        },
        overlayStyle: {
          opacity: 1,
          backgroundColor: "#fbd265"
        }
      });
      setTimeout(() => {
        this.userData = Object.assign({}, userData);
        // and then - just close it.
        close();

        // more advance. add after the closing another preloader -> in the same simple way.
        setTimeout(() => {
          // open
          close = this.$preloaders.open({
            // custom it however you want
            container,
            assetSrc: "https://i.giphy.com/media/3o6vXURvyF7bmW1HGg/giphy.webp",
            assetStyle: { maxWidth: "100px" },
            overlayStyle: { opacity: 1, backgroundColor: "#fff" }
          });
          // and close
          setTimeout(close, 1000);
        }, 300);
      }, 1500);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-form {
  display: flex;
  justify-content: center;
}

.form {
  width: 100%;
  max-width: 500px;
  border-radius: 5px;

  > * {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}

.code-icon {
  width: $icon-size;
  height: $icon-size;
}

input {
  width: 100%;
}

.submit {
  margin-right: $spacing-2;
}
</style>
