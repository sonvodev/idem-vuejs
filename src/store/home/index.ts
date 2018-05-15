import { Module } from "vuex";
import { IRootState } from "../state";
import { HomeStoreState } from "./home.states";
import { HomeService } from "../../services/home.service";
import { getters } from "./home.getters";
import { actions } from "./home.actions"
import mutations from "./home.mutations";
export const homeModule: Module<IRootState, {}> = {
  namespaced: true,
  state: new HomeStoreState({ service: new HomeService() }),
  getters: getters,
  actions: actions,
  mutations: mutations
}