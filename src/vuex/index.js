import Vuex from 'vuex';

import player from './player';
import round from './round';
import stock from './stock';

const store = new Vuex.Store({
  modules: {
    player,
    round,
    stock,
  },
});

export default store;
