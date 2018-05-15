import { ActionTree, ActionContext } from 'vuex'
import { IRootState } from '../state';
import { IHomeStoreState } from './home.states';
import { HomeStoreTypes as Types } from './home.types'
import { IHomeService } from '../../services/home.service';
import { INewsListing } from '../../models';
export const actions: ActionTree<IRootState, IHomeStoreState> = {
  [Types.GET_LIST_NEWS]: ({ getters, commit }: ActionContext<IRootState, IHomeStoreState>, payload) => {
    return (getters.service as IHomeService).getListNews(payload)
      .then((payload: { docs: INewsListing[], meta: any }) => {
        commit(Types.SET_LIST_NEWS, payload)
      })
      .catch((error: any) => Promise.reject(error));
  }
}