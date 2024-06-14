type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: RequestInit }
  : { config?: RequestInit; params: Params };
