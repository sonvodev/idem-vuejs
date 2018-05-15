import { IBaseModel } from "../base-model";
import { INewsListing } from "./home-listing";

export interface INewsDetail extends IBaseModel,INewsListing {

 }

export class NewsDetail implements INewsDetail {
  headline: any
  multimedia: any
  byline: any
  /**
   *
   */
  constructor(option: INewsDetail = { }) {
   this.headline = option.headline
   this.byline = option.byline
  }
}