import { UseFetchOptions } from 'nuxt/app'

export function useStrapi<T>(endpoint: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()

  return useFetch<T>(`/api${endpoint}`, {
    baseURL: config.public.strapiURL,
    ...options,
  })
}