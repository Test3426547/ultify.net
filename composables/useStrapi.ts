import { useFetch } from '#app'

export function useStrapi() {
  const fetch = (endpoint: string, options = {}) => {
    const config = useRuntimeConfig()
    return useFetch(`${config.public.strapiBaseUrl}/${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
  }

  return {
    fetch,
  }
}