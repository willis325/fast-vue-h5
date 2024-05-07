import { createFetch } from '@vueuse/core';

export const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_BASE_API,
  options: {
    async beforeFetch({ options }) {
      options.headers = { ...options.headers, 'Content-Type': 'application/json' };
      return { options };
    },
    afterFetch({ data }) {
      if (data.data) data.data = JSON.parse(data.data);
      if (!data.success) console.error(data.message);
      return data;
    },
  },
});

export const usePostFetch = <T>(url: string, payload?: unknown) => useFetch<T>(url).post(payload).json<T>();
