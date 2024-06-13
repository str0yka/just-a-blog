type ApiRequestConfig = import('axios').AxiosRequestConfig;

type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: ApiRequestConfig }
  : { config?: ApiRequestConfig; params: Params };
