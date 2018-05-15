import { IRootState } from "../state";
import { IHomeService } from "../../services/home.service";
import { INewsListing } from "../../models";


export interface IHomeStoreState<TService = any> extends IRootState<TService> {
  listNews?: INewsListing[]
}

export class HomeStoreState implements IHomeStoreState<IHomeService> {

  service: IHomeService
  listNews?: INewsListing[]
  /**
   *
   */
  constructor(option: IHomeStoreState) {
    this.service = option.service
    this.listNews = <INewsListing[]>[];
  }
}