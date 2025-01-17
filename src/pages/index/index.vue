<script lang="ts" setup name="index">
const router = useRouter();
onMounted(() => console.log('onMounted'));
onActivated(() => console.log('onActivated'));
</script>

<template>
  <div class="flex-col-center h-100vh">
    <HelloWorld msg="fast-vue-h5" />
    <van-button type="primary" class="mt-8" @click="router.push('/login')">Login</van-button>
  </div>
</template>
