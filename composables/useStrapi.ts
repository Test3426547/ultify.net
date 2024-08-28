import { useRuntimeConfig } from '#imports';

interface StrapiResponse<T> {
  data: T;
}

interface StrapiError {
  error: string;
}

interface StrapiFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: Record<string, any>;
}

async function useStrapi<T>() {
  const config = useRuntimeConfig();
  const strapiUrl = config.public.strapiUrl;

  const fetch = async (endpoint: string, options?: StrapiFetchOptions): Promise<StrapiResponse<T> | StrapiError> => {
    const response = await fetch(`${strapiUrl}${endpoint}`, {
      method: options?.method || 'GET',
      headers: options?.headers || {},
      body: options?.body ? JSON.stringify(options.body) : undefined,
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  };

  return { fetch };
}

export default useStrapi;