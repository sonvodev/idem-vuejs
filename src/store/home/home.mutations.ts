import { MutationTree } from 'vuex';
import { IRootState } from '../state';
import { IHomeStoreState } from './home.states';
import { HomeStoreTypes as Types } from './home.types';
const mutations: MutationTree<IHomeStoreState> = {
  [Types.SET_LIST_NEWS]: (state: IHomeStoreState, payload) => {
    state.listNews = payload.docs
  }
}

export default mutations;