import { AxiosRequestConfig, AxiosResponse } from "axios";
export interface IApiResponse<T = any> {
  isSuccess?: boolean;
  data?: T | T[]
  exception?: { code: number, message: string }
}
export class ApiResponse<T=any> implements IApiResponse {
  isSuccess?: boolean;
  data?: T | T[]
  exception?: { code: number, message: string }
  /**
   *
   */
  constructor(option: ApiResponse) {
    this.isSuccess = option.isSuccess;
    this.data = option.data;
    this.exception = option.exception;
  }
}
export class AxiosConfiguration {
  static ValidateState(status: number): boolean {
    return status >= 200 && status <= 503
  }
  static requestInterceptor(config: AxiosRequestConfig) {
    return config;
  }
  static responseInterceptor(response: AxiosResponse) {
    switch (response.status) {
      case 200:
        response.data = new ApiResponse({ data: response.data.response, isSuccess: true })
    }
    return response.data
  }
  static exceptionist(error: any) {
    console.log(error)
    return error
  }
}
