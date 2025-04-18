interface RequestConfig {
  signature?: boolean; // 是否验签
  isReturnNativeResponse?: boolean; // 是否原样返回 res
  noHandleReturnResponse?: boolean; // 不走通用返回处理直接返回 res.data
  hasErrorNoFailToast?: boolean; // 静默 错误信息不提示
}

export const useFetch = (baseUrl: string, config?: RequestConfig) =>
  createFetch({
    baseUrl,
    options: {
      async beforeFetch({ options }) {
        const userStore = useUserStore();
        const { token } = storeToRefs(userStore);
        const headers = { 'Content-Type': 'application/json' };

        token && Object.assign(headers, { Authorization: token.value });
        options.headers = { ...options.headers, ...headers };
        return { options };
      },
      afterFetch({ data }) {
        if (config?.isReturnNativeResponse) return { data };

        if (data.data) data.data = JSON.parse(data.data);
        if (!data.success) console.error(data.message);
        return data;
      },
      onFetchError(ctx) {
        if (ctx.error && !config?.hasErrorNoFailToast) showFailToast(ctx.error || '请求异常');
        return ctx;
      },
    },
  });

// prettier-ignore
export const usePostFetch = <T>(url: string, payload?: unknown, config?: RequestConfig) => useFetch(import.meta.env.VITE_BASE_API, config)<T>(url).post(payload).json<T>();

// prettier-ignore
export const useGetFetch = <T>(url: string, config?: RequestConfig) => useFetch(import.meta.env.VITE_BASE_API, config)<T>(url).get().json<T>();
