export class HttpClient {
  baseURL: string;

  headers?: Record<string, string>;

  constructor({ baseURL, headers }: { baseURL: string; headers?: Record<string, string> }) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  private async request<T>(
    endpoint: string,
    method: RequestInit['method'],
    options: RequestInit = {},
  ) {
    const url = `${this.baseURL}${endpoint}`;

    const response = await fetch(url, {
      method,
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    });

    return {
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      data: (await response.json()) as T,
    };
  }

  async get<T>(endpoint: string, options: Omit<RequestInit, 'body'> = {}) {
    return this.request<T>(endpoint, 'GET', options);
  }

  async delete<T>(endpoint: string, options: Omit<RequestInit, 'body'> = {}) {
    return this.request<T>(endpoint, 'GET', options);
  }

  async post<T>(
    endpoint: string,
    body?: Record<string | number, any>,
    options: Omit<RequestInit, 'body'> = {},
  ) {
    return this.request<T>(endpoint, 'POST', {
      ...options,
      ...(body && { body: JSON.stringify(body) }),
    });
  }

  async put<T>(
    endpoint: string,
    body?: Record<string | number, unknown>,
    options: Omit<RequestInit, 'body'> = {},
  ) {
    return this.request<T>(endpoint, 'PUT', {
      ...options,
      ...(body && { body: JSON.stringify(body) }),
    });
  }

  async patch<T>(
    endpoint: string,
    body?: Record<string | number, unknown>,
    options: Omit<RequestInit, 'body'> = {},
  ) {
    return this.request<T>(endpoint, 'PATCH', {
      ...options,
      ...(body && { body: JSON.stringify(body) }),
    });
  }
}

export const api = new HttpClient({ baseURL: process.env.NEXT_PUBLIC_API_URL as string });
export const mockApi = new HttpClient({ baseURL: process.env.NEXT_PUBLIC_CLIENT_URL as string });
