import { useUserStore } from '@/store';

export const useInitialize = (callback: () => void) => {
  const userStore = useUserStore();
  const { token } = storeToRefs(userStore);

  onMounted(() => {
    if (!token.value) return;
    callback && callback();
  });

  watch(token, (val) => {
    if (val && callback) callback();
  });
};
