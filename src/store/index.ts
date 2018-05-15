import Vue from 'vue';

import Vuex, { Store } from 'vuex'
import { homeModule } from './home';
import { IRootState } from './state';
import { HomeStoreTypes } from './home/home.types'
Vue.use(Vuex);

const store = new Store<IRootState>({
  modules: {
    home: homeModule
  }
})
export enum StoreTypes {
  Home = 'home'
}
export { store as default, HomeStoreTypes };