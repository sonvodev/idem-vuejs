import { IBaseModel } from "../base-model";

export interface INewsListing extends IBaseModel {
  headline?: any;
  multimedia?: any
  byline?: any
 }

export class NewsListing implements INewsListing {
}