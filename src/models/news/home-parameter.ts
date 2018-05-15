import { IBaseParamter } from "../base-parameter";

export interface INewsParamter extends IBaseParamter {
  q?: string;
  page?: number
}

export class NewsParamter implements INewsParamter {
  'api-key': string;
  q?: string;
  page?: number;
  /**
   *
   */
  constructor(option: INewsParamter) {
    this['api-key'] = option["api-key"] || '33a67b27ae1a4429ab8a50f87d0f1017'
    this.q = option.q;
    this.page = option.page
  }
}