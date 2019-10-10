<template>
  <div id="app">
    <div class="cards">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        @codeModalButtonClick="$refs.codeModal.open({ ...card, openerElement: $event })"
        ref="cards"
      />
    </div>
    <CodeModal ref="codeModal" />
  </div>
</template>

<script>
import colors from './styles/config/variables.scss';
import CodeModal from './components/CodeModal';
import Card from './components/Card';
import Squares from './components/preloaders/Squares';
import SquaresContent from '!!raw-loader!./components/preloaders/Squares';
import Slack from './components/preloaders/Slack';
import SlackContent from '!!raw-loader!./components/preloaders/Slack';
import Flat from './components/preloaders/Flat';
import FlatContent from '!!raw-loader!./components/preloaders/Flat';
import Hexagon from './components/preloaders/Hexagon';
import HexagonContent from '!!raw-loader!./components/preloaders/Hexagon';
import Plug from './components/preloaders/Plug';
import PlugContent from '!!raw-loader!./components/preloaders/Plug';

export default {
  name: 'app',
  components: { Card, CodeModal },
  computed: {
    cards() {
      return [
        {
          loaderData: {
            component: Squares,
            overlayStyle: {
              backgroundColor: colors['color-alpha'],
            },
          },
          componentSource: SquaresContent,
        },
        {
          loaderData: {
            component: Slack,
            overlayStyle: {
              backgroundColor: '#ffffff',
            },
          },
          componentSource: SlackContent,
          credit: {
            text: 'GlitchWorker',
            url: 'https://codepen.io/glitchworker/pen/mVgogz',
          },
        },
        {
          loaderData: {
            component: Flat,
            overlayStyle: {
              backgroundColor: '#ECF0F1',
            },
          },
          componentSource: FlatContent,
          credit: {
            text: 'Codrin Pavel',
            url: 'https://codepen.io/zerospree/pen/aCjAz?editors=1100',
          },
        },
        {
          loaderData: {
            component: Hexagon,
            overlayStyle: {
              backgroundColor: '#ECF0F1',
            },
          },
          componentSource: HexagonContent,
          credit: {
            text: 'Roland Lösslein',
            url: 'https://codepen.io/weaintplastic/pen/qEMZbx',
          },
        },
        {
          loaderData: {
            component: Plug,
            overlayStyle: {
              backgroundColor: '#f05a30',
            },
          },
          componentSource: PlugContent,
          credit: {
            text: 'Anastasiya Kuligina',
            url: 'https://codepen.io/WebSonata/pen/bRaONB',
          },
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  max-width: 250px;
}
</style>
