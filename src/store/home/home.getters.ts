import { GetterTree } from 'vuex'
import { IRootState } from '../state';
import { IHomeStoreState } from './home.states';
import { HomeStoreTypes as Types } from './home.types'
export const getters: GetterTree<IRootState, IHomeStoreState> = {
  service: (state: IHomeStoreState) => state.service,
  listNews: (state: IHomeStoreState) => state.listNews
}