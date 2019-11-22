<template>
  <div id="app">
    <HeaderContent
      main
      title="Welcome to Vue-Preloaders homepage"
      subtitle="Enjoy use cases and a showcase of beautiful preloaders, all handled via Vue-Preloaders"
    />
    <div class="hr" />

    <div>
      <HeaderContent
        title="Select use case"
        subtitle="
        You have a select. Each select change you need to send an ajax to get new data. </br>
        Till data will come, you have to Disable the select and give an Indication for waiting. </br>
        Hello, vue-preloaders.
        "
      />
      <DemoSelect @codeButtonClick="$refs.codeModal.open($event)" />
    </div>

    <div>
      <HeaderContent
        title="Form use case"
        subtitle="Yes. your form needs an indication when sending an ajax.
          <br />No. Putting preloader on the whole screen is not the way to go.
          <br />Try me - beautiful, precise, and easy to use preloader that'll cover ONLY your form."
      />
      <DemoForm @codeButtonClick="$refs.codeModal.open($event)" />
    </div>

    <div>
      <HeaderContent
        title="Explore the preloaders!"
        subtitle="Check some beautiful preloaders and the way to implement them.
          <br />You are more than welcome to pull-request new and neat preloaders for everyone to watch and use."
      />
      <div class="cards">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :loader-data="card.loaderData"
          :white-toolbar="card.darkBackground"
          :types="card.types"
          @codeModalButtonClick="$refs.codeModal.open({ ...card, openerElement: $event })"
          ref="cards"
        />
      </div>
    </div>

    <CodeModal ref="codeModal" />
  </div>
</template>

<script>
import DemoSelect from "./components/demo/DemoSelect.vue";
import HeaderContent from "./components/HeaderContent.vue";
import DemoForm from "./components/demo/DemoForm.vue";
import colors from "./styles/config/variables.scss";
import CodeModal from "./components/CodeModal";
import Card from "./components/Card";
import Slack from "./components/preloaders/Slack";
import Hexagon from "./components/preloaders/Hexagon";
import Rainbow from "./components/preloaders/Rainbow";
import SqaureFill from "./components/preloaders/SquareFill";
import Infinite from "./components/preloaders/Infinite";
import Danger from "./components/preloaders/Danger";

const types = {
  asset: "Asset",
  component: "Component",
  text: "Text",
  html: "Html"
};

export default {
  name: "app",
  metaInfo: {
    title: "Vue-Preloaders App"
  },
  components: {
    Card,
    CodeModal,
    DemoForm,
    HeaderContent,
    DemoSelect
  },
  computed: {
    cards() {
      const cards = [
        {
          loaderData: {
            component: require("./components/preloaders/Squares").default,
            overlayStyle: {
              backgroundColor: colors["color-alpha"]
            }
          },
          componentSource: require("!!raw-loader!./components/preloaders/Squares")
            .default
        },
        {
          loaderData: {
            component: require("./components/preloaders/Slack").default,
            overlayStyle: {
              backgroundColor: "#ffffff"
            }
          },
          credit: {
            text: "GlitchWorker",
            url: "https://codepen.io/glitchworker/pen/mVgogz"
          },
          componentSource: require("!!raw-loader!./components/preloaders/Slack")
            .default
        },
        {
          loaderData: {
            component: require("./components/preloaders/Hexagon").default,
            overlayStyle: {
              backgroundColor: "#ECF0F1"
            }
          },
          credit: {
            text: "Roland Lösslein",
            url: "https://codepen.io/weaintplastic/pen/qEMZbx"
          },
          componentSource: require("!!raw-loader!./components/preloaders/Hexagon")
            .default
        },
        {
          loaderData: {
            component: require("./components/preloaders/Infinite").default,
            overlayStyle: {
              background:
                "radial-gradient(circle farthest-corner at center,#3c4b57 0%,#1c262b 100%)",
              opacity: 1
            }
          },
          credit: {
            text: "Martin van Driel",
            url: "https://codepen.io/martinvd/pen/xbQJom"
          },
          componentSource: require("!!raw-loader!./components/preloaders/Infinite")
            .default,
          darkBackground: true
        },
        {
          loaderData: {
            component: require("./components/preloaders/Rainbow").default,
            overlayStyle: {
              background: "radial-gradient(#222, #000)",
              opacity: 0.9
            }
          },
          credit: {
            text: "Jack Rugile",
            url: "https://codepen.io/jackrugile/pen/JddmaX"
          },
          componentSource: require("!!raw-loader!./components/preloaders/Rainbow")
            .default,
          darkBackground: true
        },
        {
          loaderData: {
            component: require("./components/preloaders/SquareFill").default,
            overlayStyle: {
              backgroundColor: "#242F3F",
              opacity: 1
            }
          },
          credit: {
            text: "Tashfeen",
            url: "https://codepen.io/tashfene/pen/raEqrJ"
          },
          componentSource: require("!!raw-loader!./components/preloaders/SquareFill")
            .default,
          darkBackground: true
        },
        // {
        //   loaderData: {
        //     component: require('./components/preloaders/Danger').default,
        //     overlayStyle: {
        //       backgroundColor: '#090707',
        //       opacity: 1,
        //     },
        //   },
        //   credit: {
        //     text: 'James Panter',
        //     url: 'https://codepen.io/jpanter/pen/PWWQXK',
        //   },
        //   componentSource: require('!!raw-loader!./components/preloaders/Danger')
        //     .default,
        //   darkBackground: true,
        // },
        {
          loaderData: {
            assetSrc: "https://i.giphy.com/media/TvLuZ00OIADoQ/giphy.webp",
            overlayStyle: {
              backgroundColor: "#1874d2",
              opacity: 1
            }
          },
          credit: {
            text: "via GIPHY",
            url: "https://giphy.com/gifs/TvLuZ00OIADoQ"
          }
        },
        {
          loaderData: {
            cssStyle: {
              justifyContent: "flex-end"
            },
            assetSrc: "https://i.giphy.com/media/l3nWhI38IWDofyDrW/giphy.webp",
            overlayStyle: {
              backgroundColor: "#ffffff",
              opacity: 1
            }
          },
          credit: {
            text: "via GIPHY, Tobias Rothe, @ethor",
            url: "https://giphy.com/gifs/thinking-l3nWhI38IWDofyDrW"
          }
        },
        {
          loaderData: {
            assetSrc: "https://i.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.webp",
            overlayStyle: {
              backgroundColor: "#161618",
              opacity: 1
            }
          },
          credit: {
            text: "via GIPHY, Make it Move, @makeitmove",
            url: "https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg"
          },
          darkBackground: true
        },
        {
          loaderData: {
            assetSrc: "https://i.giphy.com/media/jAYUbVXgESSti/giphy.webp",
            overlayStyle: {
              backgroundColor: "#ecf0ef",
              opacity: 1
            }
          },
          credit: {
            text: "via GIPHY",
            url: "https://giphy.com/gifs/google-icon-loading-jAYUbVXgESSti"
          }
        },
        {
          loaderData: {
            assetSrc: "//i.imgur.com/FEDTpyE.gif",
            overlayStyle: {
              backgroundColor: "black",
              opacity: 1
            }
          },
          credit: {
            text: "via GIPHY",
            url: "https://giphy.com/gifs/VseXvvxwowwCc"
          },
          darkBackground: true
        },
        {
          loaderData: {
            assetSrc: "https://i.giphy.com/media/4T1NFafropdQOrBYw6/giphy.webp",
            overlayStyle: {
              background: "linear-gradient(to top, #6c87a7, #4262a8)",
              opacity: 1
            }
          },
          credit: {
            text: "via GIPHY, Rodney Dangerfield, @rodneydangerfield",
            url:
              "https://giphy.com/gifs/rodneydangerfield-loop-flip-diving-4T1NFafropdQOrBYw6"
          }
        },
        {
          loaderData: {
            assetSrc: "https://i.giphy.com/media/sM503VtpDzxLy/giphy.webp",
            overlayStyle: {
              background: "#44defe",
              opacity: 1
            }
          },
          credit: {
            text: "via GIPHY",
            url: "https://giphy.com/gifs/sM503VtpDzxLy"
          }
        },
        {
          loaderData: {
            assetSrc: "https://media.giphy.com/media/isodBFMr9EJ7G/giphy.gif",
            text: "Loading...",
            textStyle: {
              color: "white"
            }
          },
          credit: {
            text: "via GIPHY",
            url: "https://giphy.com/gifs/frozen-bit-loading-isodBFMr9EJ7G"
          },
          darkBackground: true
        },
        {
          loaderData: {
            assetSrc: "https://i.giphy.com/media/MTKsRM3QzNeOI59SbO/giphy.webp",
            overlayStyle: {
              background: "black",
              opacity: 1
            }
          },
          credit: {
            text: "via GIPHY",
            url:
              "https://giphy.com/gifs/loop-happiness-loading-MTKsRM3QzNeOI59SbO"
          },
          darkBackground: true
        },
        {
          loaderData: {
            text: "Only text preloader.",
            textStyle: {
              textAlign: "center",
              color: "white",
              fontSize: "16px"
            }
          },
          darkBackground: true
        },
        {
          loaderData: {
            cssStyle: {
              textAlign: "center"
            },
            html:
              '<div style="padding: 10px;"><p style="color: white; margin-bottom: 10px">Even the sky is not the limit with vue-preloaders.</p><div style="background: pink; padding: 5px">I\'m an injected HTML, <br>check source</div></div>'
          },
          darkBackground: true
        }
      ];

      return cards.map(card => this.getCardWithType(card));
    }
  },
  mounted() {
    const close = this.$preloaders.open({
      component: HeaderContent,
      cssStyle: {
        position: "fixed",
        padding: "20px"
      },
      componentProps: {
        title: "App use case",
        subtitle:
          "Fetching data, initializing app. </br> Im the meantime, throw a nice preloader."
      },
      assetSrc: "https://i.giphy.com/media/jAYUbVXgESSti/giphy.webp",
      overlayStyle: {
        backgroundColor: "#ecf0ef",
        opacity: 1
      }
    });
    setTimeout(close, 4000);
  },
  methods: {
    getCardWithType(card) {
      const cardTypes = [];
      const { component, assetSrc, text, html } = card.loaderData;
      if (component) cardTypes.push(types.component);
      if (assetSrc) cardTypes.push(types.asset);
      if (text) cardTypes.push(types.text);
      if (html) cardTypes.push(types.html);

      return {
        ...card,
        types: cardTypes.join(", ")
      };
    }
  }
};
</script>

<style lang="scss" scoped>
$card-gap: $spacing-container / 2;

#app {
  overflow: hidden;
  padding: $spacing-container;

  > * {
    &:not(:last-child) {
      margin-bottom: $spacing-8;
    }
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -$card-gap;
}
.card {
  max-width: 250px;
  margin: $card-gap;
}

.hr {
  width: 100%;
  max-width: 80px;
  height: 2px;
  background-color: color(beta);
  margin: auto;
}

@include breakpoint-desktop {
}
@include breakpoint-mobile {
}
</style>
