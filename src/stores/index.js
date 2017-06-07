import Vuex from 'vuex';
import Vue from 'vue';

import player from './player';
import round from './round';
import stock from './stock';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    player,
    round,
    stock,
  },
});

export default store;
