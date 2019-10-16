<template>
  <div id="app">
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
    <CodeModal ref="codeModal" />
  </div>
</template>

<script>
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
  components: { Card, CodeModal },
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
        {
          loaderData: {
            component: require("./components/preloaders/Danger").default,
            overlayStyle: {
              backgroundColor: "#090707",
              opacity: 1
            }
          },
          credit: {
            text: "James Panter",
            url: "https://codepen.io/jpanter/pen/PWWQXK"
          },
          componentSource: require("!!raw-loader!./components/preloaders/Danger")
            .default,
          darkBackground: true
        },
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
            url: "https://giphy.com/gifs/rodneydangerfield-loop-flip-diving-4T1NFafropdQOrBYw6"
          },
        },
        {
          loaderData: {
            assetSrc: "https://i.giphy.com/media/sM503VtpDzxLy/giphy.webp",
            overlayStyle: {
              background: "#44defe",
              opacity: 1
            },
          },
          credit: {
            text: "via GIPHY",
            url: "https://giphy.com/gifs/sM503VtpDzxLy"
          },
        },
        {
          loaderData: {
            assetSrc: "https://media.giphy.com/media/isodBFMr9EJ7G/giphy.gif",
            text: `Loading...`,
            textStyle: {
              color: 'white'
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
            },
          },
          credit: {
            text: "via GIPHY",
            url: "https://giphy.com/gifs/loop-happiness-loading-MTKsRM3QzNeOI59SbO"
          },
          darkBackground: true
        },
        {
          loaderData: {
            text: 'Only text preloader.',
            textStyle: {
              textAlign: 'center',
              color: 'white',
              fontSize: '16px'
            }
          },
          darkBackground: true
        },
        {
          loaderData: {
            cssStyle: {
              textAlign: 'center'
            },
            html: `
            <p style="color: white; margin-bottom: 10px">
              Even the sky is not the limit with vue-preloaders.
            </p>
            <div style="background: pink; padding: 5px">
              I'm an injected HTML, <br>
              check source
            </div>
            `,
          },
        }
      ];

      return cards.map(card => this.getCardWithType(card));
    }
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
$card-gap: $spacing-2;

#app {
  overflow: hidden;
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
</style>
