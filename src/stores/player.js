import { player as mutations } from './mutations';

const defaultPlayer = {
  gold: 30,
  isBoatman: false,
};

export default {
  state: {
    roster: [],
  },
  mutations: {
    [mutations.ADD_PLAYER] (state, { name, stocks }) {
      state.roster.push({
        name,
        stocks: {...stocks},
        ..defaultPlayer,
      });
    }
  },
  actions: {},
  getters: {
    boatman: (state) => (state.roster.filter(p => p.isBoatman)),
  },
};
