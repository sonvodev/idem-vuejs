import { BaseService } from "./base.service";
import { INewsListing, INewsParamter } from "../models";
import UrlConstants from '../common/uri.constants'
import { IApiResponse } from "../utils/AxiosConfiguration";
export interface IHomeService {
  getListNews(param: INewsParamter): any
}
export class HomeService extends BaseService implements IHomeService {
  /**
   *
   */
  constructor() {
    super();
  }
  getListNews(param: INewsParamter) {
    return super.select(UrlConstants.NewRoutes.GetList, param)
      .catch(error => Promise.reject(error))
  }
}