import Vue from 'vue';
import './style.less';
import { get, draw } from './cards';

const init = (options) => new Vue(options);

const Card = {
  props: ['card'],
  template: `
    <div class="card-container centered">
      {{ card.strategy }}
    </div>
  `
};

const App = {
  template: `
    <div class="container">
      <h1 class="header">Oblique Strategies</h1>
      <card v-bind:card="card"></card>
      <button class="btn refresh-btn"
              v-on:click="refresh">
        Refresh
      </button>
    </div>
  `,
  data() {
    return {
      card: draw()
    };
  },
  methods: {
    refresh() {
      this.card = draw();
    }
  }
};

const Root = { el: '#app' };

Vue.component('card', Card);
Vue.component('app', App);

init(Root);
