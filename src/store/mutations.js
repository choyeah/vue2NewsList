export default {
  SET_USER(state, payload) {
    state.user = payload.data;
  },
  SET_ASK_DETAIL(state, payload) {
    state.askDetail = payload.data;
  },
  SET_LIST(state, list) {
    state.list = list;
  },
};
