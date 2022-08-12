import { fetchUserInfo, fetchAskDetail, fetchList } from "../api/index";

export default {
  async FETCH_USER({ commit }, payload) {
    const response = await fetchUserInfo(payload.data);
    commit("SET_USER", { data: response.data });
    return response;
  },
  async FETCH_ASK_DETAIL({ commit }, payload) {
    const response = await fetchAskDetail(payload.data);
    commit("SET_ASK_DETAIL", { data: response.data });
    return response;
  },
  async FETCH_LIST({ commit }, payload) {
    const response = await fetchList(payload.data);
    commit("SET_LIST", response.data);
    return response;
  },
};
