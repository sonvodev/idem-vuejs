import { AxiosRequestConfig } from "axios";
import axios from 'axios'
import { IApiResponse } from "../utils/AxiosConfiguration";
export class BaseService {
  protected select<T, TParam>(path: string, params?: TParam, config?: AxiosRequestConfig): Promise<T> {
    return axios.get(path, { params, ...config })
      .then((response: IApiResponse) => {
        return response.isSuccess
          ? Promise.resolve(response.data)
          : Promise.reject(response.exception)
      })
      .catch((error: any) => {
        return Promise.reject(error)
      })
  }
  protected selectById<T>(id: string | number, path: string, config?: AxiosRequestConfig): Promise<T> {
    return axios.get(path.replace(':id', id.toString()), { ...config })
      .then((response: IApiResponse) => {
        return response.isSuccess
          ? Promise.resolve(response.data)
          : Promise.reject(response.exception)
      })
      .catch((error: any) => {
        console.log(error)
        return Promise.reject(error)
      })
  }
}